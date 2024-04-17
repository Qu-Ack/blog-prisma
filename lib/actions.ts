'use server'

import prisma from "./db"


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

}