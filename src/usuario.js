import React from "react";


function Dados(){
    const [nome, setNome] = React.useState("Catana");
    const [nomeDeUsuario, setNomeDeUsuario] = React.useState("catanacomics");
    const [usuario, setUsuario] = React.useState("assets/img/catanacomics.svg");
    function inserirNome(){
        const nomePrompt = prompt("Qual o seu nome?");
        const semNome = "Não sabemos seu nome :(";
        if(nomePrompt != undefined){
            setNome(nomePrompt);
            setNomeDeUsuario(nomePrompt);
        }
        else{    
            setNomeDeUsuario(semNome);
            setNome(semNome);
        }
    }

    function inserirImagem(){
        const usuarioPrompt = prompt("Insira o link da imagem");
        const semFoto = "https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg";
        if(usuarioPrompt != undefined){
            setUsuario(usuarioPrompt);
        }
        else{
            setUsuario(semFoto);
        }
        
       
    }
    return(
        <div class="usuario">
            <img onClick={inserirImagem} src={usuario} />
            <div class="texto">
                <strong>{nomeDeUsuario}</strong>
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
        <Dados/>
    );

}