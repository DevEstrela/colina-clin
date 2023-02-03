import styles from '../Botox/Botox.module.css';
import dente from '../../../img/service/dente.png';
import seta from '../../../img/service/seta.png';

function Botox(){
    return(  
            <section className={styles.box}>
           
                <div className={styles.box__content}>
                
                     <div className={styles.box__front}>
                            <div className={styles.contDente}>
                                <img className={styles.imgDente} src={dente} alt="" />  
                            </div>

                            <div className={styles.description}>
                                <h4>Botox</h4>
                            </div>
                            
                            <div className={styles.contSeta}>
                                <img src={seta} className={styles.imgSeta} alt="imagem de seta"/>
                            </div>
                    </div>


                    <div className={styles.box__back}>
                            <div className={styles.description}>
                                <h4>Procedimentos Estéticos</h4>
                            </div>
                            <div>
                                <p>Temos profissionais <strong><span>apacitados no segmento Estéticos</span></strong> para elevar sua beleza</p>
                            </div>
                            <div className={styles.contSeta}>
                                <img src={seta} alt=""   className={styles.imgSeta}/>
                            </div>
                    </div>
                
                </div>
                
            </section>
            
    )
}
   

export default Botox;