import { TechList } from './TechList'

export const TechSection = () => {
  return (<>
    <section id='stack' className='scroll'>
      <div className='container'>
        <h2 className='title h2'>Tecnologias</h2>
        <TechList />
      </div>
    </section>
  </>)
}