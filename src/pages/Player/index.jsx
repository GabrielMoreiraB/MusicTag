import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';
import videos from '../../Json/db.json'
import styles from './player.module.css';
import NaoEncontrada from '../../components/NaoEncontrada';

const Player = () => {
    const parametros = useParams();

    const video = videos.find(video => {
        return video.id === Number(parametros.id)
    })
    if(!video){
        return <NaoEncontrada/>
    }
    return (
        <>
            <Banner imagem='player' />
            <Titulo>
            <h1>{video.titulo}</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
                </iframe>
            </section>

        </>
    );
}

export default Player;