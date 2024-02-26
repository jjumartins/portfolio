import gitIcon from '../../../../../assets/git-icon.png'
import styles from './styles.module.css'

export const ProjectsCards = ({ project }) => {
  return (<>
    <li className={styles.cards}>
      <div className={styles.cards_title}>
        <h3 className='title h3'>{project.name}</h3>
        <a target='_blank' href={project.repository}><img src={gitIcon} alt='Git Icon' /></a>
      </div>
      <a target='_blank' href={project.deploy}><img src={project.img}/></a>
      <p className='title paragraph'>{project.description}</p>
      <p className='paragraph'>
        <a target='_blank' href={project.deploy} className='link'>Veja em ação</a> ou <a target='_blank' href={project.repository} className='link'>acesse o repositório</a></p>
    </li>
  </>)
}