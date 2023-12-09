import React from "react";
import styled from "styled-components";
import Painel from "../Painel";

const Modal = ({isOpen,onClose,children}) => {

    if (!isOpen) return null;
    
    return (
        <DivOverlay>

        <DivContainer class="modal-container">
           
            
            <DivTarefa>
            <h2>Nova Tarefa</h2>
                <Label>Nome da Tarefa:</Label>
                <Input type="text" />
            </DivTarefa>
            
            <DivObsevacao class="observacao">
                <Label>Observação:</Label>
                <TextArea  type="text-area"  />
            </DivObsevacao>
            <DivDataUrgencia>
            <div class="data">
                <Label>Data Limite:</Label>
                <Input type="date" placeholder="Data" />
            </div>
            <div className="importancia">
                <Label>Urgência</Label>
                <Select name="importancia">
                    <option>Muito urgente</option>
                    <option>Pode esperar</option>
                    <option>Um dia eu faço</option>
                </Select>
            </div>
            </DivDataUrgencia>
            <button>Salvar</button>
            <button onClick={onClose}>Cancelar</button>

            
        </DivContainer>
        </DivOverlay>
        
    );
}
const TextArea = styled.textarea`
height:55px;
border-radius: 25px;
border:none;
`
const Select = styled.select`
    height:25px;
    border-radius: 25px;
   border:none;
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

    
`;
const DivDataUrgencia = styled.div`
    display:flex;
    justify-content: space-between;

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

export default Modal;