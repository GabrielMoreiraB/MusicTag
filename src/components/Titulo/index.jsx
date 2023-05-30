import styles from './titulo.module.css';

const Titulo = ({ children }) => {
    return ( 
        <div className={styles.texto}>
            {children}
        </div>
     );
}
 
export default Titulo;