import portfolio from '../../assets/portfolio.png'
import styles from './styles.module.css'

export const Header = () => {
  return (<>
    <header>
      <div className={`container flex ${styles.header}`}>
        <a href="/#"><img src={portfolio} alt='Portfólio' /></a>
        <nav>
          <ul className={styles.nav}>
            <li><a href='#aboutme'>Sobre</a></li>
            <li><a href='#stack'>Stack</a></li>
            <li><a href='#projects'>Projetos</a></li>
          </ul>
        </nav>
        <a href="/#contact"><button type='button' className='btn'>Contato</button></a>
      </div>
    </header>
  </>)
}