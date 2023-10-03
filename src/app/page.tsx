import Categories from '@/components/Categories'
import Header from '@/components/Header'
import ListOffers from '@/components/ListOffers'
import Offers from '@/components/Offers'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Offers />
      <ListOffers />
      <Categories />
    </div>
  )
}
