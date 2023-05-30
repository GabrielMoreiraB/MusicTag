import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";

const Inicio = () => {
    return ( 
        <>
            <Cabecalho/>
            <Banner imagem='home'/>
            <Titulo>
                <h1>Um lugar para guardar músicas vídeos e filmes!</h1>
            </Titulo>
            <Card id='1' titulo='gato bonifácil' capa='https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg'/>
            <Rodape/>
        </>
     );
}
 
export default Inicio;