import styles from './styles.module.css'

export const TechCards = ({ technology }) => {
  return (<>
    <li className={styles.cards}>
      <img src={technology.img} alt={`${technology.name} Icon`} />
      <h3 className='title h3'>{technology.name}</h3>
    </li>
  </>)
}