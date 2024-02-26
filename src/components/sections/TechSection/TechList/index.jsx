import { technologies } from '../../../../data/technologies'
import { TechCards } from './TechCards'
import styles from './styles.module.css'

export const TechList = () => {
  return (<>
    <ul className={styles.flexbox}>
      {technologies.map((technology, i) => (
        <TechCards technology={technology} key={i} />
      ))}
    </ul>
  </>)
}