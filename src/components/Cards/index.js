import React from "react";
import Icon from '@mdi/react';
import { mdiCircleSmall,mdiDeleteOffOutline,mdiPencil  } from '@mdi/js';
import styled from "styled-components";
import Modal from "../modal";



const Cards = ({ tarefa,deleteTarefa }) => {

    return (

        <DivContainer>
            <header>
                <h2 className="titulo">{tarefa.titulo}</h2>
                <p className="importancia"><Icon path={mdiCircleSmall} size={1} style={{ color: 'red' }} />{tarefa.importancia}</p>
            </header>
            <div>
                <h4>Observação</h4>
                <p>{tarefa.observacao}</p>
            </div>
            <div>
                <h5>Data limite:</h5>
                <p>{tarefa.data}</p>
            </div>
            <div style={{display:"flex", justifyContent:"flex-end",paddingTop:"3px",paddingBottom:"0px"}}>
            <Button onClick={()=>deleteTarefa(tarefa.id)}><Icon path={ mdiDeleteOffOutline } size={1} /></Button>
            <Button ><Icon path= { mdiPencil } size={1} /></Button>
            </div>

        </DivContainer>

    )

}
export default Cards;

const Button = styled.button`
 width: 35px;
 height: 35px;
 border-radius: 50%;
 background-color: red;
 cursor: pointer;
 display:flex;
justify-content: center;
 bottom: 3px;
 right: 1px;

`


const DivContainer = styled.div`
    width: 200px;
    height: 280px;
    background-color: black;
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