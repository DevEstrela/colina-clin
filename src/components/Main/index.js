import styles from '../Main/Main.module.css'
import frente from '../../img/frente.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Main(){
    return(
        <main className={styles.Main}>
          
                <div className={styles.containerImg} 
                   data-aos="fade-down"
                   data-aos-offset="250"      //deslocamento (em px) do ponto de disparo original
                   data-aos-delay="200"      //valores de 0 a 3000, com passo 50ms
                   data-aos-duration="500"  //atenuação padrão para animações AOS
                   data-aos-mirror="false"  //se a animação deve acontecer apenas uma vez - enquanto rola para baixo
                   data-aos-once="false"     //se os elementos devem ser animados ao passar por eles
                   data-aos-anchor-placement="center"
                   data-aos-easing="ease-in-sine"
                >
                    <img
                        src={frente}
                        alt=""
                        className={styles.imgFrente}
                    />
                </div>

                <div className={styles.containerMedicos}>
                    <article>
                        <h1 className={styles.title}>Nós cuidamos de Você</h1>
                        <p className={styles.text}>Nós da colinaclin vamos das todo suporte e o<strong><span> melhor atendimento </span></strong> para você se sentir muito confortavel e ser bem atendido pela nossa equipe de doutores e especialista das area da saude. Contamos com os <strong><span> melhores equipamentos </span></strong>  que vai atender suas necessidades sem que você precise ir a outro lugar realizar algum tipo de exame extra.</p>
                    </article>

                    <div className={styles.containerDocs}>
                        <div className={styles.docs}>
                            <h3 className={styles.numDocs}>02</h3>
                            <p className={styles.textDocs}>Plantonistas</p>    
                        </div>

                        <div className={styles.docs}>
                            <h3 className={styles.numDocs}>05</h3>
                            <p className={styles.textDocs}>Doutores</p>  
                        </div>
                    </div>
                    

                </div>

           
        </main>
    )
}

export default Main;