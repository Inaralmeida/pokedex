/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import meiaLuaTop from '../../Assets/Img/meiaLuaTop.svg'
import meiaLuaBottom from '../../Assets/Img/meiaLuaBottom.svg'
import centroPokedex from '../../Assets/Img/centroPokedex.svg'
import * as S from './PokedexBase.styles'
import { ajustaId } from '../../Utils/AjustaID'
import { api } from '../../Services/api'
import {FaSearch} from 'react-icons/fa'

const PokedexBase = ({ setPokemonDaVez }) => {
  const [pokedexAberta, setPokedexAberta] = useState(null)
  const [basePokemons, setBasePokemons] = useState([])
  const [valueInput, setValueInput] = useState('')

  
  const pokedexApi = () =>{
    api.get('/pokedex/1/')
    .then((response)=>{
      const data = response.data.pokemon_entries
      const ids = data.map(poke=> poke.entry_number)
      setBasePokemons(ids)
    })
    
  }
  
  useEffect(() => {
    pokedexApi()
  }, [])

  const abrirPokedex = () => {
    setPokedexAberta(!pokedexAberta)
    setPokemonDaVez(null)
  }

  return (
    <S.Pokedex pokedexAberta={pokedexAberta}>
      <div className='top'>
        <img src={meiaLuaTop} alt="meia pokebola" />
      </div>
      <img src={centroPokedex} alt=""
        onClick={abrirPokedex}
        className='Button-Pokedex-Open' />
      <div className='vidro' style={pokedexAberta === null ? { display:'none'} :  {display:'flex'}}>
        <S.Content >

          <header>
            <input type="text" 
            placeholder='Digite o Id ou nome'
            value={valueInput}
            onChange={({target})=> setValueInput(target.value)}
            />
            <FaSearch className='icon' onClick={()=> {
              setPokemonDaVez(valueInput)
              setValueInput('')
            }}/>
          </header>


          <section className='pokes'>

          {
            basePokemons.length > 0 &&
            basePokemons.map(poke => {
              if (poke <= 807) {
                return (
                  <div key={poke}>
                    <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${ajustaId(poke)}.png`} alt='' onClick={()=> setPokemonDaVez(poke)}/>
                  </div>
                )
              }
            })

          }
          </section>

        </S.Content>
      </div>
      <div className='bottom'>
        <img src={meiaLuaBottom} alt="meia pokebola" />
      </div>

    </S.Pokedex>
  )
}

export default PokedexBase
