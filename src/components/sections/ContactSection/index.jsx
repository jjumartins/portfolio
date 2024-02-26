import styles from './styles.module.css'
import { ContactCards } from './ContactCards'

export const ContactSection = () => {
  return (<>
    <section id='contact' className='scroll'>
      <div className='container'>
        <h2 className='title h2'>Contato</h2>
        <div className={styles.contact}>
          <ContactCards />
        </div>
      </div>
    </section>
  </>)
}