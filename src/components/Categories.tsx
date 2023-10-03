import { categories } from '@/mock/categories'
import Image from 'next/image'
import Link from 'next/link'

export default function Categories() {
  return (
    <div className="flex flex-col gap-3 pb-20">
      <h2 className="text-4xl font-bold pt-16 text-center">SUPER CATEGORIAS</h2>
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        {categories.map((categorie, index) => (
          <Link href={categorie.url} target="_blank" key={index}>
            <div className="bg-white rounded-sm p-3 flex flex-col hover:scale-105 transition-all ease-in-out">
              <Image
                src={categorie.imageUrl}
                width={180}
                height={150}
                alt={categorie.title}
              />
              <span className="text-[#1123B1] font-bold text-center mt-3">
                {categorie.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
