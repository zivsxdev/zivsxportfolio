import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Intro from '@/sections/Intro'
import Projects from '@/sections/Projects'
import GitHubStats from '@/sections/GitHubStats'
import Testimonials from '@/sections/Testimonials'
import FAQs from '@/sections/FAQs'
import ContactMe from '@/sections/ContactMe'
import Footer from '@/sections/Footer'
import AppWrapper from '@/sections/AppWrapper'

export default function Home() {
  return (
    <AppWrapper>
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <GitHubStats />
      <Testimonials />
      <FAQs />
      <ContactMe />
      <Footer />
    </AppWrapper>
  )
}
