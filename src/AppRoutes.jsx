import Favoritos from './pages/Favoritos';
import Inicio from './pages/Inicio';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import FavoritosProvider from './contextos/Favoritos';
import Player from './pages/Player';
import NaoEncontrada from './components/NaoEncontrada';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
        <Container>
            <FavoritosProvider>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/favoritos" element={<Favoritos />}></Route>
                    <Route path="/:id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada/>}></Route>
                </Routes>
            </FavoritosProvider>
        </Container>
        <Rodape />
    </BrowserRouter>
  );
};

export default AppRoutes;
