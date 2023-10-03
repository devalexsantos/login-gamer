import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ListOffers from '@/components/ListOffers'
import Offers from '@/components/Offers'
import Videos from '@/components/Videos'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Offers />
      <ListOffers />
      <Categories />
      <Videos />
      <Footer />
    </div>
  )
}
