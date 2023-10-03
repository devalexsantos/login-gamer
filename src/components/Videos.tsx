import { videos } from '@/mock/videos'
import Image from 'next/image'
import Link from 'next/link'
import IconYoutube from './icons/IconYoutube'

export default function Videos() {
  return (
    <div
      id="videos"
      className="flex flex-col mt-14 pt-14 bg-[url('/assets/bg-videos.png')] items-center pb-28"
    >
      <h2 className="text-4xl font-bold pt-16 text-center">VÍDEOS</h2>
      <div className="mt-8 flex flex-wrap gap-3 justify-center max-w-6xl">
        {videos.map((video, index) => (
          <Link href={video.url} key={index} target="_blank">
            <div className="flex flex-col gap-2 rounded bg-white bg-cover p-3 bg-opacity-5">
              <Image
                src={video.imageUrl}
                width={349}
                height={250}
                alt={video.title}
                className="rounded"
              />
              <span>{video.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="https://www.youtube.com/playlist?list=PLlffXwND91ax9s8ttKkpUmx9_aII44HJ8"
        target="_blank"
        className="bg-[#FF0000] rounded flex gap-3 items-center px-6 py-2 mt-4"
      >
        <IconYoutube width={22} height={22} />
        VER MAIS
      </Link>
    </div>
  )
}
