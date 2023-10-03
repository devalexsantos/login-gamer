import { Weather } from '@/types/Product'
import SliderProducts from './SliderProducts'

export default async function ListOffers() {
  const products: Weather = await fetch(
    process.env.NEXT_PUBLIC_URL_OFFERS_CATEGORY as string,
    { next: { revalidate: 60 * 60 * 2 /* 02 horas */ } },
  ).then((res) => res.json())

  return (
    <div className="flex justify-center mt-[-140px]">
      <SliderProducts products={products} />
    </div>
  )
}
