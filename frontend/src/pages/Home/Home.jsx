import ClientTestimoni from './components/clientTestimoni'
import OurPosterSection from './components/ourPosterSection/ourPosterSection'
import LandingSection from './components/landingSection/landingSection'
import ServiceSection from './components/serviceSection/serviceSetion'

export default function Home() {
  return (
    <main className='w-full min-h-screen'>
      <LandingSection />
      <ServiceSection />
      <OurPosterSection />
      <ClientTestimoni />
    </main>
  )
}