import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
export default function Navbar(){
   return(
    <ul className={styles.list}>
    <li className={styles.item}><Link to="/">Home</Link></li>
    <li className={styles.item}><Link to="/empresa"></Link>Empresa</li>
    <li className={styles.item}><Link to="/contato"></Link>Contato</li>
  </ul>
   )
}