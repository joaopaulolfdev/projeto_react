import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
export default function Footer(){
    return(
         <Footer>
            <ul classNam={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p>Nosso rodapé</p>
         </Footer>
          )
        }