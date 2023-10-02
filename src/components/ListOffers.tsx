import { Weather } from '@/types/Product'
import SliderProducts from './SliderProducts'

export default async function ListOffers() {
  const products: Weather = await fetch(
    process.env.NEXT_PUBLIC_URL_OFFERS_CATEGORY as string,
  ).then((res) => res.json())

  return (
    <div className="flex justify-center mt-[-140px] pb-28">
      <SliderProducts products={products} />
    </div>
  )
}
