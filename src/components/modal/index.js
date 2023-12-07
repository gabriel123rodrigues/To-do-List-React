import React from "react";
import styled from "styled-components";
import Painel from "../Painel";

const Modal = ({isOpen,onClose,children}) => {

    if (!isOpen) return null;
    
    return (
        <DivOverlay>
        <DivContainer class="modal-container">
            
            <div class="nome">
                <label>Nome da Tarefa:</label>
                <input type="text" placeholder="Nome" />
            </div>
            <div class="observacao">
                <label>Observação:</label>
                <input type="text" placeholder="Observação" />
            </div>
            <div class="data">
                <label>Data Limite:</label>
                <input type="date" placeholder="Data" />
            </div>
            <div>
                <label>Urgência</label>
                <select name="importancia">
                    <option>Muito urgente</option>
                    <option>Pode esperar</option>
                    <option>Um dia eu faço</option>
                </select>
            </div>
            <button>Salvar</button>
            <button onClick={onClose}>Cancelar</button>

            
        </DivContainer>
        </DivOverlay>
        
    );
}


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
    background-color: antiquewhite;
    padding:15px;
    border-radius: 10px;
    height: 460px;
    width: 350px;
    overflow: auto;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export default Modal;