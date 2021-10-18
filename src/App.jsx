/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Globalstyle } from "./Styles/GlobalStyles";
import * as S from './Styles/App.styles'
import PokedexBase from "./Components/PokedexBase/PokedexBase";
import Pokemon from "./Components/Pokemon/Pokemon";
import {  useState } from "react";

function App() {
  
  const [pokemonDaVez, setPokemonDaVez] = useState(null)
  
  


  return (
    <S.Container >

      <Globalstyle />
       <section className='pokedex'>
        <PokedexBase setPokemonDaVez={setPokemonDaVez}/>
      </section>
      <section className='pokemon'>
        <Pokemon pokemon={pokemonDaVez} />
      </section> 
    </S.Container>
  );
}

export default App;
