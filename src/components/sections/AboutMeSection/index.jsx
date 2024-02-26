import styles from './styles.module.css'

export const AboutMeSection = () => {
  return (<>
    <section id='aboutme' className='scroll'>
      <div className='container flex'>
        <div>
          <h2 className='title h2'>Sobre mim</h2>
        </div>
        <div>
          <p className={`paragraph ${styles.aboutText}`}>
            Olá, meu nome é Julia, e estou em uma jornada de transição de carreira para o mundo da tecnologia. Anteriormente, explorei a área de Administração e Negócios, porém decidi trilhar novos caminhos e atualmente estou imersa no estudo de Desenvolvimento Front End.
          </p>
          <p className={`paragraph ${styles.aboutText}`}>
            Sempre tive o hábito de desvendar o funcionamento das coisas, identificando oportunidades de melhoria e implementando soluções criativas e inovadoras. Portanto, essa transição representa não apenas uma mudança profissional, mas também uma paixão que sempre tive por desafios e inovação.
          </p>
        </div>
      </div>
    </section>
  </>)
}