import React, { useState } from "react";
import styled from "styled-components";
import img from '../../assets/img/miranha.jpg'
import Modal from "../modal/index.js";
import Cards from "../Cards/index.js";
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';


const Painel = () => {
    const [tarefas, setTarefas] = useState([]);
    const [modalAberto, setModalAberto] = useState(false);
    const [busca,setBusca] = useState('');
   

    const abrirModal = () => {
       
        setModalAberto(true);
    }

    const fecharModal = () => {
        setModalAberto(false);
    }
    const addTarefa = (tarefa) =>{
        
        setTarefas ([...tarefas,tarefa]);
     
    }
    const deleteTarefa = (id) =>{
       const updateTarefas = tarefas.filter(tarefa => tarefa.id !== id);
       setTarefas(updateTarefas);
    }

    

    const editTarefa = (editedItem) =>{
        
        
        const updateTasks = tarefas.map((tarefa)=>
        tarefa.id === editedItem.id ? editedItem :tarefa);
        setTarefas(updateTasks);
        console.log(tarefas);
    }
    

    const filterTarefasPesquisa = () =>{
        const lowerBusca = busca.toLowerCase()
        return tarefas.filter((tarefa)=> 
        tarefa.titulo.toLowerCase().includes(lowerBusca));
    }
    const filterTarefasImportancia = () =>{
        return tarefas.filter((tarefa)=>{
            tarefa.importancia.toLowerCase().includes(busca);
        })
    }
    

    

    return (<>

        <Div>
           
            <Modal isOpen={modalAberto} onClose={fecharModal} addTarefa={addTarefa} />

            <DivOverlay>
                <header>
                    <Navbar>
                        <Input type="text" placeholder="Pesquisa" value={busca} onChange={(ev)=>setBusca(ev.target.value)} />
                        <Select value={busca} onChange={(ev)=>setBusca(ev.target.value)}>
                            <Option defaultValue={''} selected disabled>Importância</Option>
                            <Option>Muito urgente</Option>
                            <Option>Pode esperar</Option>
                            <Option>Um dia eu faço</Option>
                        </Select>
                        <Button onClick={abrirModal}><Icon path={mdiPlus} size={1} /></Button>
                    </Navbar>
                    
                    <main>

                        <Section>

                            <DivContainer>

                                {filterTarefasImportancia().filterTarefasPesquisa().map((tarefa) => <Cards key={tarefa.id}  editTarefa={editTarefa} tarefa={tarefa} deleteTarefa={deleteTarefa}/>)}


                               

                            </DivContainer>

                        </Section>
                    </main>
                </header>
            </DivOverlay>
        </Div>
    </>
    )
}
const Option = styled.option`
    color: black;
`
const DivOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3); 
`

const Div = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: relative;

`;
const Navbar = styled.nav`
    display:flex;
    justify-content: center;
    gap:30px;
    padding-top: 15px;

`;

const Input = styled.input`
    width: 350px;
    height: 45px;
    border-radius: 5px;
    border:none;
    color:black;

`;

const Section = styled.section`
    display: flex;
    justify-content: center;
`;

const DivContainer = styled.div`
    align-self: center;
    border-radius: 15px;
    margin-top: 25px;
    width: 1000px;
    height: 500px;
    background-color: rgb(255, 255, 255, 0.7);
    opacity: 0.8;
    border: solid 5px black;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    justify-content: center;
`
const Select = styled.select`
    border-radius: 5px;
    border:none;
    color:black;
`
const Button = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
    cursor: pointer;
   
    bottom: 15px;
    right: 15px;
  
`

export default Painel;


