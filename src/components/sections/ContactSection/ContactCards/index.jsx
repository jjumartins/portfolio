import whatsapp_icon from '../../../../assets/whatsapp-icon.png'
import linkedin_icon from '../../../../assets/linkedin-icon.png'
import github_icon from '../../../../assets/github-icon.png'
import email_icon from '../../../../assets/email-icon.png'
import styles from './styles.module.css'

export const ContactCards = () => {
  return (<>
    <div className={styles.card}>
      <div className={styles.content}>
        <a href='https://wa.me/5511993965256' target='_blank'><img src={whatsapp_icon} alt='Whatsapp Icon' /></a>
        <p className='paragraph'>Contate-me pelo Whatsapp</p>
        <a href='https://wa.me/5511993965256' target='_blank'>
          <p className='label'>&#40;11&#41; 99396-5256</p>
        </a>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.content}>
        <a href='https://www.linkedin.com/in/julia-martins-arruda/' target='_blank'><img src={linkedin_icon} alt='Linkedin Icon' /></a>
        <p className='paragraph'>Acesse meu LinkedIn</p>
        <a href='https://www.linkedin.com/in/julia-martins-arruda/' target='_blank'>
          <p className='label'>in/julia-martins-arruda</p>
        </a>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.content}>
        <a href='https://github.com/jjumartins' target='_blank'><img src={github_icon} alt='Github Icon' /></a>
        <p className='paragraph'>Conheça meu GitHub</p>
        <a href='https://github.com/jjumartins' target='_blank'>
          <p className='label'>@jjumartins</p>
        </a>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.content}>
        <a href='mailto:jumartins958@hotmail.com' target='_blank'><img src={email_icon} alt='Email Icon' /></a>
        <p className='paragraph'>Envie-me um e-mail</p>
        <a href='mailto:jumartins958@hotmail.com' target='_blank'>
          <p className='label'>jumartins958@hotmail.com</p>
        </a>
      </div>
    </div>
  </>)
}