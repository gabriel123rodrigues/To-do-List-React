import {React,useState} from "react";
import styled from "styled-components";

import Icon from '@mdi/react';
import { mdiCalendarRange,mdiAlertCircleOutline } from '@mdi/js';

const ModalEdit = ({isOpen,onClose,tarefa,editTarefa}) => {
    const [editedItem,setEditTarefa] = useState({...tarefa});
    
if (!isOpen) return null;
   
    

    const tarefaHandleChange = (e) =>{
        const {name,value} = e.target;
        setEditTarefa({...editedItem,[name]:value});
        console.log(editedItem)
    }
    const tarefaHandle = () => {
        editTarefa(editedItem);
        

    }
    return (
        <DivOverlay>

        <DivContainer class="modal-container" >
           
            
            <DivTarefa>
            <h2>Editar Tarefa</h2>
                <Label>Nome da Tarefa:</Label>
                <Input type="text" defaultValue={tarefa.titulo} onChange={tarefaHandleChange}   name="titulo" />
            </DivTarefa>
            
            <DivObsevacao class="observacao">
                <Label>Observação:</Label>
                <TextArea  type="text-area" onChange={tarefaHandleChange}  defaultValue={tarefa.observacao} name="observacao"/>
            </DivObsevacao>
            <DivDataUrgencia>
            <Div>
                <Label><Icon path={mdiCalendarRange} size={0.7} />Data Limite:</Label>
                <Input type="date" name="data" onChange={tarefaHandleChange} defaultValue={tarefa.data} placeholder="Data" />
            </Div>
            <Div>
                <Label><Icon path={mdiAlertCircleOutline} size={0.7} />Urgência</Label>
                <Select onChange={tarefaHandleChange}  defaultValue={tarefa.importancia} name="importancia" >
                    <Option value="" selected disabled>Importância</Option>
                    <Option>Muito urgente</Option>
                    <Option>Pode esperar</Option>
                    <Option>Um dia eu faço</Option>
                </Select>
            </Div>
            </DivDataUrgencia>
            <DivButton>
            <Button type="submit" onClick={tarefaHandle} style={{backgroundColor:"#51FC72"}} >Salvar</Button>
            <Button onClick={onClose} style={{backgroundColor:"#FE1E50"}}>Cancelar</Button>
            </DivButton>
            
        </DivContainer>
        </DivOverlay>
        
    );
}

const Option = styled.option`
    color: black;
`
const DivButton = styled.div`
    display: flex;
    flex-direction: row-reverse;
`
const Button = styled.button`
    width: 70px;
    height: 30px;
    color: black;
    margin-left: 5px;
    cursor: pointer;
    border: none;
   
    font-size: 15px;
`
const TextArea = styled.textarea`
height:55px;
border-radius: 15px;
border:none;
color: black;
`
const Select = styled.select`
    height:25px;
    border-radius: 15px;
   border:none;
   color:black;
`
const Label = styled.label`
    margin-bottom: 10px;
    
`
const DivTarefa = styled.div`
    display: flex;
    flex-direction: column;
    
`;
const DivObsevacao = styled.div`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input `
    height:25px;
    border-radius: 25px;
    border: none;
    color: black;

    
`;
const DivDataUrgencia = styled.div`
    display:flex;
    justify-content: space-evenly;

`;


const DivOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* fundo escurecido */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:1;
`;


const DivContainer = styled.div`
    background-color: rgb(0,0,0,0.7);
   
    padding:15px;
    border-radius: 10px;
    height: 460px;
    width: 350px;
    overflow: auto;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
`

export default ModalEdit;