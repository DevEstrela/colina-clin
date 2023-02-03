import styles from './Topics.module.css';
import sala from '../../img/topics/sala.png';
import recep from '../../img/topics/recep.png';
import check from '../../img/topics/check.png';

function Topics(){
    return(
        <main className={styles.container}>
            <section className={styles.containerDisplay}>
                <div className={styles.containerTitle}>
                    <h1>Sua <span>saúde</span> em primeiro</h1>
                    <p>Somos espelizados em <strong><span>tratamento dentario.</span></strong>  Nossa clinica conta com todos equipamentos para te ajudar no tratamento</p>
                </div>
                <div className={styles.containerTopics}>
                    <div className={styles.topics}>
                        <img src={check}/>
                        <h3>Consultas</h3>
                    </div>
                    <p>Não sei o que falar, mas marque sua consulta</p>

                    <div className={styles.topics}>
                        <img src={check}/>
                        <h3>Diagnóstico</h3>
                    </div>
                    <p>Não sei o que falar, mas marque sua consulta</p>

                    <div className={styles.topics}>
                        <img src={check}/>
                        <h3>Agendamentos</h3>
                    </div>
                    <p>Não sei o que falar, mas marque sua consulta</p>

                    

                </div>


            </section>

            <section className={styles.containerImagens}>
                <div className={styles.contanerImg}
                    data-aos="fade-up"
                    data-aos-offset="50"      //deslocamento (em px) do ponto de disparo original
                    data-aos-delay="200"      //valores de 0 a 3000, com passo 50ms
                    data-aos-duration="500"  //atenuação padrão para animações AOS
                    data-aos-mirror="false"  //se a animação deve acontecer apenas uma vez - enquanto rola para baixo
                    data-aos-once="false"     //se os elementos devem ser animados ao passar por eles
                    data-aos-anchor-placement="center"
                    data-aos-easing="ease-in-sine"
                >
                    <img src={sala} className={styles.img} /> 
                </div>
                <div className={styles.contanerImg}
                    data-aos="fade-up"
                    data-aos-offset="50"      //deslocamento (em px) do ponto de disparo original
                    data-aos-delay="200"      //valores de 0 a 3000, com passo 50ms
                    data-aos-duration="500"  //atenuação padrão para animações AOS
                    data-aos-mirror="false"  //se a animação deve acontecer apenas uma vez - enquanto rola para baixo
                    data-aos-once="false"     //se os elementos devem ser animados ao passar por eles
                    data-aos-anchor-placement="center"
                    data-aos-easing="ease-in-sine"
                >
                    <img src={recep} className={styles.img}  />
                </div>
            </section>
        </main>
    )
}
export default Topics;