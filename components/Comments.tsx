'use client'

import { handleCommentSubmit } from "@/lib/actions"
import prisma from "@/lib/db"
import { useUser } from "@clerk/nextjs"

export default async function Comments({parameters} : {
    parameters: {
        blogid: string
    }
}) {

    
    const comments = await prisma.comment.findMany({
        where: {
            Post: {
                id: `${parameters.blogid}`
            }
        },
        include: {
            WrittenBy: true // Include user details if needed
        }
    });

    const {user} = useUser();
    const userID  = user?.id

    const handleCommentSubmitwithUserID = handleCommentSubmit.bind(null, userID)
    const handleCommentSubmitWithBlogID = handleCommentSubmitwithUserID.bind(null, parameters.blogid)

    return (
        <>
            < form action={handleCommentSubmitWithBlogID} className="mb-8" >
                <input
                    type="text"
                    name="comment"
                    placeholder="Write your comment..."
                    className="border border-gray-300 rounded-md p-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2">Post Comment</button>
            </form >

            < div >
                <h2 className="text-xl font-semibold mb-4">Comments</h2>
                {
                    comments.map((comment, index) => (
                        <div key={index} className="border border-gray-300 rounded-md p-3 mb-2">
                            <p className="text-gray-800">{comment.content}</p>
                            <p className="text-gray-600 mt-1">{comment.WrittenBy.Name}</p>
                        </div>
                    ))
                }
            </div >
        </>
    )
}