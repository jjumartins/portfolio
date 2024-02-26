import { DefaultLayout } from '../DefaultLayout'
import { BannerSection } from '../../components/sections/BannerSection'
import { AboutMeSection } from '../../components/sections/AboutMeSection'
import { TechSection } from '../../components/sections/TechSection'
import { ProjectsSection } from '../../components/sections/ProjectsSection'
import { ContactSection } from '../../components/sections/ContactSection'

export const HomePage = () => {
  return (<>
    <DefaultLayout>
      <BannerSection />
      <AboutMeSection />
      <ContactSection />
      <TechSection />
      <ProjectsSection />
    </DefaultLayout>
  </>)
}