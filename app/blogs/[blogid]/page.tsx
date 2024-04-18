import prisma from "@/lib/db"
import Comments from "@/components/Comments"

export default async function BlogPage({params}: {
    params: {blogid: string}
}) {

    const blog = await prisma.post.findUnique({
        where: {
            id: `${params.blogid}`
        },
        include: {
            Author: true
        }
    }) 

    return(
        <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>
            <p className="text-gray-600 mb-4">By {blog?.Author.Name}</p>
            <pre className="text-lg text-gray-800 whitespace-pre-wrap mb-8">{blog?.content}</pre>
        </div>
        <Comments parameters={params}/>
    </div>
    )
}