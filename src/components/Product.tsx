import { Product } from '@/types/Product'
import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const price = parseFloat(product.payment_option_details[0].value)
  const priceFormated = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  return (
    <Link href={product.url.https} target="_blank">
      <div className="flex flex-col gap-3 p-4">
        <div className="h-auto bg-white rounded flex flex-col items-center bg-cover">
          <Image
            src={product.ProductImage[0].https}
            width={200}
            height={140}
            alt="Console Playstation 5"
            className="p-3"
          />
          <div className="flex flex-col items-center pb-2">
            <p className="text-[#4D4D4D] text-center p-3 h-[60px] text-ellipsis overflow-hidden">
              {product.name}
            </p>
            <span className="text-[#1123B1] font-bold text-2xl text-center mt-3">
              {priceFormated}
            </span>
            <span className="text-[#1123B1]">À vista no pix ou boleto</span>
          </div>
        </div>
        <button className=" px-4 py-2 bg-[#FF8F00] text-white rounded">
          APROVEITAR
        </button>
      </div>
    </Link>
  )
}
