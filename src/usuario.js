import React from "react";


function Dados(props){
    const [nome, setNome] = React.useState("Catana");
    const [usuario, setUsuario] = React.useState("assets/img/catanacomics.svg");
    function inserirNome(){
        const nomePrompt = prompt("Qual o seu nome?");
        setNome(nomePrompt);
    }

    function inserirImagem(){
        const usuarioPrompt = prompt("Insira o link da imagem");
        setUsuario(usuarioPrompt);
    }
    return(
        <div class="usuario">
            <img onClick={inserirImagem} src={usuario} />
            <div class="texto">
                <strong>{props.texto}</strong>
                <span>
                   {nome}
                    <ion-icon name="pencil" onClick = {inserirNome}></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default function Usuario() {

    return (
        <Dados  texto = "catanacomics" />
    );

}