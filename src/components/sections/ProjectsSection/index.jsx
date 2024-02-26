import { ProjectsList } from './ProjectsList'

export const ProjectsSection = () => {
  return (<>
    <section id='projects' className='scroll'>
      <div className='container'>
        <h2 className='title h2'>Projetos</h2>
        <ProjectsList />
      </div>
    </section>
  </>)
}