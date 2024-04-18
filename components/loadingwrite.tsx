export default function LoadingWrite() {
    return (
        <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Write a Blog Post</h1>
        <form>
          <div className="mb-4">
            <div  className="bg-gray-300 block text-sm font-medium text-gray-700">
            </div>
            <div
              id="title"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-300"
            />
          </div>
          <div className="mb-6 bg-gray-300">
            <div className="bg-gray-300 block text-sm font-medium text-gray-700">
            </div>
            <div
              id="content"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-300"
            ></div>
          </div>
          <div
            className="px-4 py-2 bg-gray-300 text-white rounded-md hover:bg-green-900 focus:outline-none focus:bg-green-700"
          >
          </div>
        </form>
      </div>
    )
}