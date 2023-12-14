import React from "react";
import Icon from '@mdi/react';
import { mdiCircleSmall } from '@mdi/js';
import styled from "styled-components";
import Modal from "../modal";

const Cards = ({tarefas}) =>{

    return (
       
        <DivContainer>
            <header>
                <h2 className="titulo">titulo</h2>
                <p className="importancia">Urgência<Icon path={mdiCircleSmall} size={1} style={{color:'red'}} />importante</p>
            </header>
            <div>
            <h4>Observação</h4>
            <p>observe</p>
            </div>
            <div>
                <h5>Data limite:</h5>
                <p>pra ontem</p>
            </div>

        </DivContainer>
       
    )

}
 export default Cards;




 const DivContainer = styled.div`
    width: 200px;
    height: 280px;
    background-color: blue;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 5px;
    border-radius: 8px;
    &::-webkit-scrollbar{
        width: 5px;

    }
    &::-webkit-scrollbar-thumb{
        background-color: white;
        border-radius: 20px;
        
    }
 `