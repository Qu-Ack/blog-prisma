import prisma from "@/lib/db";
import tigerbackground from '@/public/tigerbackground.jpg'
import Image from "next/image";
import Link from "next/link";

export async function GetBlogs() {
    const posts = await prisma.post.findMany();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                    <Link href={`/blogs/${post.id}`}>
                        <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Image src={tigerbackground} alt={post.title} className="w-full h-56 object-cover object-center" />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
                                <p className="mt-2 text-gray-600">{post.content.substring(0, 150)}</p>
                                {post.content.length > 150 && (
                                    <a href={`/blog/${post.id}`} className="mt-2 block text-blue-500 hover:underline font-semibold">
                                        Show More
                                    </a>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
