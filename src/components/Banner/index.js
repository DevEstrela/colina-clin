import styles from '../Banner/Banner.module.css';
import banner from '../../img/banner.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Banner(){
    return(
        <section className={styles.containerBanner}>
            <section className={styles.containerTitle} 
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="550"
                data-aos-duration="200"
            >
                <h1>
                    Uma <span>clínica odontológica</span> em que você pode confiar
                </h1>

                <p>
                    Cuide de seu corpo, você mora nele.
                </p>
            </section>
            <img 
                src={banner}
                alt='banner da empresa'  
                className={styles.banner} 
                
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-delay="250"
                data-aos-duration="100"
                
            />
        </section>
    )
}

export default Banner;