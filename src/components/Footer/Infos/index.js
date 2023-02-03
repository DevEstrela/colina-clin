import styles from '../Infos/Infos.module.css';
import boton from '../../../img/footer/boton.png'
import email from '../../../img/footer/email.png';
import send from '../../../img/footer/send.png'


function Infos(){
    return(
        <section className={styles.container}>

            <nav className={styles.containerNav}>
                <h4>Paginas</h4>
                    <div>
                        <a href='https://colinadosipes.com.br/quem-somos/' target="_blank" without rel="noreferrer">Quem somos</a>
                    </div>
                    
                    <div>
                        <a href='https://colinadosipes.com.br/' target="_blank" without rel="noreferrer">Blog</a>
                    </div>
                    
                    <div>
                        <a href='https://grupocolina.solides.jobs/' target="_blank" without rel="noreferrer">Trabalhe Conosco</a>
                    </div>
         
                    
            </nav>
            
            <nav className={styles.containerNav}>
                <h4>Serviços</h4>
                    <div>
                        <a href='https://colinadosipes.com.br/jazigo/' target="_blank" without rel="noreferrer">Jazigo</a>
                    </div>
                    
                    <div>
                        <a href='https://colinadosipes.com.br/cremacao/' target="_blank" without rel="noreferrer">Cremação</a>
                    </div>
                    
                    <div>
                        <a href='https://colinadosipes.com.br/plano-funerario/' target="_blank" without rel="noreferrer">Planos</a>
                    </div>
                                    
            </nav>

            <nav className={styles.containerNav}>
                <h4>Contatos</h4>
                    <div>
                        <a href='https://criarmeulink.com.br/u/1674159251' target="_blank" without rel="noreferrer">(11) 94158-7650</a>
                    </div>
                    
                    <div>
                       <p>flores@gmail.com.br</p>
                    </div>                                    
            </nav>
            <div>
                <img alt="Premio de qualidade" className={styles.imgQualidade} src={boton} />
            </div>
        </section>
    )
}
export default Infos;