'use client'

import prisma from "@/lib/db"
import { useUser } from "@clerk/nextjs"
import { handleFormData } from "@/lib/actions";
import { SubmitButton } from "@/components/submit-button";
import Loading from "./loading";
import { Suspense } from "react";

export default function WritePage() {

  const { user } = useUser();
  const userID = user?.id

  const handleFormDataWithUser = handleFormData.bind(null, userID)


  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Write a Blog Post</h1>
      <Suspense fallback={<Loading />}>
        <form action={handleFormDataWithUser}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your blog post title"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              rows={6}
              placeholder="Write your blog post content"
              required
            ></textarea>
          </div>
          <SubmitButton />
        </form>
      </Suspense>
    </div>
  )
}