import { projects } from '../../../../data/projects'
import { ProjectsCards } from './ProjectsCards'
import styles from './styles.module.css'

export const ProjectsList = () => {
  return (<>
    <ul className={styles.flexbox}>
      {projects.map((project, i) => (
        <ProjectsCards project={project} key={i} />
      ))}
    </ul>
  </>)
}