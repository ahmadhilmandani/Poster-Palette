import LandingSection from './components/landingSection/landingSection'
import ServiceSection from './components/serviceSection/serviceSetion'
import OurPosterSection from './components/ourPosterSection/ourPosterSection'
import ClientTestimoniSection from './components/clientTestimoniSection/clientTestimoniSection'

export default function Home() {
  return (
    <main className='w-full min-h-screen'>
      <LandingSection />
      <ServiceSection />
      <OurPosterSection />
      <ClientTestimoniSection />
    </main>
  )
}