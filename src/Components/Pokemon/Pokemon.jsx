/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import pokebolaGG from '../../Assets/Img/pokebolaGG.png'
import { api } from '../../Services/api';
import { ajustaId } from '../../Utils/AjustaID';
import { defineCor } from '../../Utils/defineCor';
import TagType from '../TagType/TagType';
import * as S from './Pokemon.styles'


const Pokemon = ({ pokemon }) => {
    const [load, setLoad] = useState(true)
    const [pokeDaVez, setPokeDaVez] = useState(pokemon)


    const requestPokemon = () => {
        setLoad(true)
        if(pokemon !== null){


            api.get(`/pokemon/${pokemon}`)
                .then((res) => {
                    const data = res.data
                    const status = data.stats.map((stat) => {
                        return {
                            value: stat.base_stat,
                            name: stat.stat.name
                        }
                    })
                    const habilidades = data.abilities.map(abilitie => {
                        return {
                            name: abilitie.ability.name
                        }
                    })
                    const tipos = data.types.map(type => {
                        return {
                            name: type.type.name
                        }
                    })
                    const pokeData = {
                        id: data.id,
                        name: data.name,
                        status: status,
                        habilidades: habilidades,
                        tipos: tipos,
                        peso: data.weight,
                        altura: data.height,
                    }
                    setPokeDaVez(pokeData);
                    setLoad(false)
                })
        }
    }

    useEffect(() => {
        requestPokemon()
    }, [])
    useEffect(() => {
        requestPokemon()
    }, [pokemon])

    return (
        <S.Container>
            {
                load ?

                    <img src={pokebolaGG} alt='loading' className='loading' />
                    :
                    !!pokeDaVez &&
                    (
                        <S.Content status={pokeDaVez.status} color={defineCor(pokeDaVez.tipos)} >
                            <h2>{pokeDaVez.name}</h2>

                            <section className='static'>
                                <div><p>ID</p> {pokeDaVez.id}</div>
                                <div><p>Habilidades</p>
                                    <span>
                                        {pokeDaVez.habilidades.map(hab => <TagType type={pokeDaVez.tipos} name={hab.name} />)}

                                    </span>
                                </div>
                                <div><p>Peso</p> {pokeDaVez.peso}KG</div>
                                <div><p>Altura</p> {pokeDaVez.altura}M</div>
                                <div><p>Tipo</p>
                                    <span>
                                        {pokeDaVez.tipos.map(tipo => <TagType type={tipo.name} name={tipo.name} />)}

                                    </span>
                                </div>

                            </section>
                            <div className='infos'>

                                <section className='bars'>
                                    {
                                        pokeDaVez.status.map((stats) => {
                                            return (
                                                <>
                                                    <label htmlFor="">{stats.name}</label>
                                                    <div className='progressBar'>
                                                        <span style={{ animation: `${stats.name} linear 1s forwards` }}>{stats.value}</span>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </section>
                                <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${ajustaId(pokeDaVez.id)}.png`} alt={pokeDaVez.name} />

                            </div>
                        </S.Content>
                    )
            }

        </S.Container>
    )
}

export default Pokemon
