import whatsapp_icon from '../../assets/whatsapp-icon.png'
import linkedin_icon from '../../assets/linkedin-icon.png'
import github_icon from '../../assets/github-icon.png'
import email_icon from '../../assets/email-icon.png'
import { user } from '../../data/user'
import styles from './styles.module.css'


export const Footer = () => {
  return (<>
    <footer>
      <div className={`container ${styles.footerSection}`}>
        <div className={styles.footer}>
          <div>
            <h2 className='title h2'>Contato</h2>
            <div className={styles.socialIcons}>
              <a href='https://wa.me/5511993965256' target='_blank'><img src={whatsapp_icon} alt='Whatsapp Icon' /></a>
              <a href='https://www.linkedin.com/in/julia-martins-arruda/' target='_blank'><img src={linkedin_icon} alt='Linkedin Icon' /></a>
              <a href='https://github.com/jjumartins' target='_blank'><img src={github_icon} alt='Github Icon' /></a>
              <a href='mailto:jumartins958@hotmail.com' target='_blank'><img src={email_icon} alt='Email Icon' /></a>
            </div>
          </div>
          <div>
            <p className={`paragraph ${styles.mobileP}`}>Todos os direitos reservados - {user}</p>
          </div>
        </div>
      </div>
    </footer>
  </>)
}