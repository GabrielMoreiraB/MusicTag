import { Link } from "react-router-dom";
import styles from './cabecalho.module.css'
import CabecalhoLink from "../CabecalhoLink";


const Cabecalho = () => {
    return (
        <div>
        <header className={styles.cabecalho}>
            <Link to="./">
                <h3 className={styles.titulo}>🎬Play</h3>
            </Link>
                <nav>
                    <CabecalhoLink url='./'>Home</CabecalhoLink>
                    <CabecalhoLink url='./Favoritos'>Favoritos</CabecalhoLink>
                </nav>
        </header>
    </div>
     );
}
 
export default Cabecalho;