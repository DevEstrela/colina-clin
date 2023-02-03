import styles from '../Service/Service.module.css';
import Botox from './Botox'
import Dentista from './Dentista';
import Telemedicina from './Telemedicina';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Service(){
    return(
        <section className={styles.container}                                           
        data-aos="zoom-in-up"
        data-aos-offset="30"
        data-aos-delay="100"
        data-aos-duration="200"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top"
        
        >
            
            <Dentista/>
            <Telemedicina/>
            <Botox/>
                 
        </section>
    )
}
export default Service;