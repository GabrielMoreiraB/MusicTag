import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './cabecalho.module.css'
import CabecalhoLink from "../CabecalhoLink";


const Cabecalho = () => {
    return (
        <div>
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo da pagina" />
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