import styles from '../Redes/Redes.module.css';
import logo from '../../../img/logo.png'
import face from '../../../img/footer/face.png'
import insta from '../../../img/footer/insta.png'
import linke from '../../../img/footer/linke.png'

function Redes (){
    return(
        <nav className={styles.container}>
            <img src={logo} alt="Logo do Grupo colina"/>
            <div >
                <a href="https://www.facebook.com/grcolina" target="_blank" without rel="noreferrer"><img src={face} alt="logo facebook" /></a>
                <a href="https://www.instagram.com/grupocolina/" target="_blank" without rel="noreferrer" ><img src={insta} alt="logo instagram" /></a>
                <a href="https://www.linkedin.com/company/grupo-colina/mycompany/" target="_blank" without rel="noreferrer"><img src={linke} alt="logo linkedin"/></a>
            </div>
            
        </nav>
    )
}
export default Redes;