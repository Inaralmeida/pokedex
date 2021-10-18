import React from 'react'
import styled from 'styled-components'
import { defineCor } from '../../Utils/defineCor'

const Tag = styled.div`
    width: auto;
    height: 30px;
    text-align: center;
    padding: 5px;

    color: white;
    font-weight: bold;
    background-color: ${(p) => p.color.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;

    > p{
        text-transform: uppercase;
    };
`
const TagType = ({ type, name }) => {
    return (
        <Tag color={defineCor(type)}>
            <p>{name}</p>
        </Tag>
    )
}

export default TagType
