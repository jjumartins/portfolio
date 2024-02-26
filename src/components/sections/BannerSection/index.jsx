import banner from '../../../assets/banner-img.png'
import { username } from '../../../data/user'
import styles from './styles.module.css'

export const BannerSection = () => {
  return (<>
    <section className={styles.banner}>
      <div className='container flex'>
        <div className={styles.welcomeBox}>
          <p className='label'>{username}</p>
          <h1 className='title h1'>Bem vindo&#40;a&#41; ao meu portfólio</h1>
          <p className='paragraph'>Desenvolvedora Front-End</p>
          <a href="../../../assets/curriculo-julia.pdf" download='curriculo-julia.pdf' type='application/pdf'><button type='button' className='btn'>Baixar Currículo</button></a>
        </div>
        <img className={styles.img} src={banner} alt='Imagem de computador' />
      </div>
    </section>
  </>)
}