import { Product } from '@/types/Product'
import Image from 'next/image'

interface ProductProps {
  product: Product
}

export default function Product({ product }: ProductProps) {
  return (
    <div className="flex flex-col gap-3 w-full p-4">
      <div className="bg-white rounded flex flex-col items-center bg-cover">
        <Image
          src={product.ProductImage[0].https}
          width={200}
          height={140}
          alt="Console Playstation 5"
          className="p-3"
        />
        <div className="flex flex-col items-center pb-2">
          <p className="text-[#4D4D4D] text-center p-3">
            CONSOLE SONY PLAYSTATION 5 + JOGO EA SPORTS FC 24
          </p>
          <span className="text-[#1123B1] font-bold text-2xl text-center">
            R$ 2.499,99
          </span>
          <span className="text-[#1123B1]">À vista no pix ou boleto</span>
        </div>
      </div>
      <button className=" px-4 py-2 bg-[#FF8F00] text-white rounded">
        APROVEITAR
      </button>
    </div>
  )
}
