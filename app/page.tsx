import { GetBlogs } from "@/components/getBlogs"
import { Suspense } from "react"
import Image from "next/image"
import TigerBackground from '@/public/tigerbackground.jpg'
function HomePage() {
    return (
        <div className="flex justify-center items-center">
            {/* <Image src={TigerBackground} alt="tiger background" height={500} className="ml-[124px] mt-[124px] border-green-400" ></Image> */}
            <div>
                <Suspense fallback={<p>Loading ...</p>}>
                    <GetBlogs/>
                </Suspense>
            </div>
        </div>
    )
}

export default HomePage