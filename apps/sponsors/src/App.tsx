import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import WhySponsor from './components/WhySponsor'
import Tiers from './components/Tiers'
import BenefitsTable from './components/BenefitsTable'
import AddOns from './components/AddOns'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhySponsor />
        <Tiers />
        <BenefitsTable />
        <AddOns />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
