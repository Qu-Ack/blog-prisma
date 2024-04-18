'use server'

import { redirect } from "next/navigation"
import prisma from "./db"
import { revalidatePath } from "next/cache"


export async function handleFormData(userID: any, formData: FormData ) {
    'use server'

    const title = formData.get('title')
    const content = formData.get('content')

    const post = await prisma.post.create({
        data: {
            title: `${title}`,
            content: `${content}`,
            Author: {
                connect: {
                    externid: `${userID}`
                }
            }

        }
    })

    revalidatePath('/')
    redirect('/')

}


export async function handleCommentSubmit(userID: any , blogid: any, formdata: FormData) {
    const comment = formdata.get('comment');

    const postcomment = await prisma.comment.create({
        data:{
            content: `${comment}`,
            Post:{
                connect: {
                    id: `${blogid}`,
                },
            },
            WrittenBy: {
                connect: {
                    externid: `${userID}`
                }
            }
        }, 
    })


    revalidatePath(`/blogs/${blogid}`)
}