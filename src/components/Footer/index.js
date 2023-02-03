import styles from '../Footer/Footer.module.css';
import Redes from './Redes';
import Infos from './Infos'

function Footer(){
    return(
        <footer className={styles.container}>
            <Redes/>
            <Infos/>
        </footer>
    )
}
export default Footer;