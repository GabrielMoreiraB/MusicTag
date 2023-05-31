import { useFavoritoContext} from '../../contextos/Favoritos'
import styles from './card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritas from './desfavoritar.png';
import { Link } from 'react-router-dom';

const Card = ({id, titulo, capa}) => {
    const {favorito,
        adicionaFavorito} = useFavoritoContext()

    const ehFavorito = favorito.some(item => item.id === id);
    const iconeFav = ehFavorito? iconeDesfavoritas : iconeFavoritar
    return ( 
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={iconeFav} 
            alt="favoritar filme" 
            className={styles.favoritar} 
            onClick={()=>{
                adicionaFavorito({id, titulo, capa});
            } } />
        </div>
     );
}
 
export default Card;