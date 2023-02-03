import styles from './Header.module.css';
import logo from '../../img/logo.png'
import telefone from '../../img/telefone.png'
import wpp from '../../img/wpp.png'

function Header(){
    return(
        <header className={styles.container}>
            <nav className={styles.containerLogo}>
                <a>
                    <img src={logo} alt="Logo da colinaclin"/>
                </a>
            </nav>

            <nav className={styles.containerLinks}>
                <a>Home</a>
                <a>Serviços</a>
                <a>Quem somos</a>
                <a>Localização</a>
            </nav>

            <nav className={styles.containerButtons}>
                <a className={styles.buttonNumber}>
                    <img src={telefone}/>
                    (11) 4746-7777
                </a>

                <a className={styles.buttonWpp}>
                    <img src={wpp} alt="logo whatsapp"/>  
                    Consultas                  
                </a>
            </nav>
            
        </header>
    )
}
export default Header;