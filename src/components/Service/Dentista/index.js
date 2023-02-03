import styles from '../Dentista/Dentista.module.css';
import dente from '../../../img/service/dente.png';
import seta from '../../../img/service/seta.png';

function Dentista(){
    return(  
            <section className={styles.box}>
           
                <div className={styles.box__content}>
                
                    <div className={styles.box__front}>
                            <div className={styles.contDente}>
                                <img className={styles.imgDente} alt="imagem dente"  src={dente} />
                            </div>
                            <div className={styles.description}>
                                <h4>Dentista</h4>
                            </div>
                            <div className={styles.contSeta}>
                                <img src={seta} alt="seta"   className={styles.imgSeta}/>
                            </div>
                    </div>
                    <div className={styles.box__back}>
                            <div className={styles.description}>
                                <h4>Odontologia</h4>
                            </div>
                            <div>
                                <p>A Colinaclin sempre se preocupou em oferecer as <strong><span>melhores condições</span></strong> para atender os pacientes com segurança e dedicação</p>
                            </div>
                            <div className={styles.contSeta}>
                                <img src={seta} alt="seta"   className={styles.imgSeta}/>
                            </div>
                    </div>
                
                </div>
                
            </section>
            
    )
}
   

export default Dentista;