'use client'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { DialogOverlay } from '@radix-ui/react-dialog'

interface VideoModalProps {
  video: {
    title: string
    imageUrl: string
    url: string
  }
}

export default function VideoModal({ video }: VideoModalProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-col gap-2 rounded bg-white bg-cover p-3 bg-opacity-5 w-[350px]">
          <Image
            src={video.imageUrl}
            width={349}
            height={250}
            alt={video.title}
            className="rounded"
          />
          <span className="truncate">{video.title}</span>
        </div>
      </DialogTrigger>

      <DialogOverlay className="bg-transparent" />
      <DialogContent className="bg-black w-full max-w-4xl p-10">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${video.url}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  )
}
