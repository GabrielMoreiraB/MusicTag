import Banner from "../../components/Banner";

import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import styles from './Inicio.module.css';
import { useEffect, useState } from "react";

const Inicio = () => {

    const [videos, setVideos] = useState([]);

    useEffect(()=> {
        fetch('https://my-json-server.typicode.com/GabrielMoreiraB/MudicTagApi/videos')
        .then(resp => resp.json())
        .then(dados=> {
            setVideos(dados);
        })
    }, [])

    return ( 
        <>
            <Banner imagem='home'/>
            <Titulo>
                <h1>Um lugar para guardar músicas vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map(video =>{
                    return <Card {...video} key={video.id}/>
                })}
            </section>

        </>
     );
}
 
export default Inicio;