import styles from './Form.module.css'
import mama from '../../img/form/mama.png'
import wpp from '../../img/wpp.png'
import telefone from '../../img/telefone.png'

function Form(){
    return(
        <section className={styles.container}>
            
                <section className={styles.opacity}>
                    <section className={styles.containerSub}>
                        <div className={styles.Image}>
                            <img src={mama}/>
                        </div>

                        <form>
                            <div className={styles.nome}>

                                <input 
                                 required
                                />
                                <label>Nome</label>

                            </div>





                                
                           
                            <div className={styles.email}>
                                <input 
                                    required
                                    className={styles.inputEmail}
                                    />
                                <label className={styles.email}>Email</label>

                            </div>

                                
                            
                            <div className={styles.telefone}>
                                <input 
                                    required
                                />
                                <label>Telefone</label>
                            </div>








                            <div className={styles.mensagem}>
                            <input 
                                 required
                                />
                                <label>Mensagem</label>
                            </div>

                            <div className={styles.button}>
                                
                                <button>ENVIAR</button>
                
                            </div>

                        </form>

                        <nav className={styles.containerNav}>
                                <h3>Fale Conosco</h3>
                                <p>Nos envie uma mensagem preenchendo o formulario, entraremos em contato o mais rapido possivel!</p>
                                <h5>Se preferir, tire suas duvidas atraves do telefone</h5>
                            <div>
                                <img src={telefone} />
                                <p>(11) 4746-7777</p>
                            </div>
                            <div>
                                <img src={wpp}/>
                                <p>(11) 99999-9999</p>
                            </div>
                            

                        </nav>

                    </section>
                </section>
           
        </section>
    )
}
export default Form;