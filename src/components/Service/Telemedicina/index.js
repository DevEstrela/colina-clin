import styles from '../Telemedicina/Telemedicina.module.css';
import tele from '../../../img/service/tele.png';
import seta from '../../../img/service/seta.png';

function Telemedicina(){
    return(  
            <section className={styles.box}>
           
                <div className={styles.box__content}>
                
                    <div className={styles.box__front}>

                            <div className={styles.contDente}>
                                <img className={styles.imgTele} alt=""  src={tele} />  
                            </div>

                            <div className={styles.description}>
                                <h4 >Telemedicina</h4>
                            </div>

                            <div className={styles.contSeta}>
                                <img src={seta}  alt=""  className={styles.imgSeta}/>
                            </div>
                    </div>
                


                    <div className={styles.box__back}>
                            <div className={styles.description}>
                                <h4>Consultas a Distância</h4>
                            </div>
                            <div>
                                <p>Temos uma estrutura de <strong><span>consultas médicas a distância</span></strong>, com acompanhamento de uma enfermeira </p>
                            </div>
                            <div className={styles.contSeta}>
                                <img src={seta} alt=""   className={styles.imgSeta}/>
                            </div>
                    </div>
                
                </div>
                
            </section>
            
    )
}
   

export default Telemedicina;