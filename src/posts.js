import React from "react";

function Post(props){
    const[like, setLike] = React.useState("heart-outline");
    const[clicado, setClicado] = React.useState("salvo");
    const [salvar, setSalvar] = React.useState("bookmark-outline");
    const [curtidas1, setCurtidas] = React.useState(props.curtidas);
  
    function curtir(){
      if(like === "heart-outline"){
        setLike("heart");
        setClicado("red");
        setCurtidas(curtidas1 + 1);
      }else{
        setLike("heart-outline");
        setClicado("salvo")
        setCurtidas(curtidas1 - 1);
      }
    }
    function salvo(){
      if(salvar === "bookmark-outline"){
        setSalvar("bookmark");
      }else{
        setSalvar("bookmark-outline");
      }
    }

    return(
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imagemUsuario} />
                        {props.nome}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.imagemConteudo}/>
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon onClick={curtir} name={like} role="img" class={clicado} aria-label={like}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon onClick={salvo} name={salvar} role="img" class="md hydrated" aria-label={salvar}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.imagemCurtidas}/>
                        <div class="texto">
                           Curtido por <strong>{props.texto}</strong> e <strong> outras {curtidas1}</strong>
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default function Posts() {
    const post = [
        {imagemUsuario :"assets/img/meowed.svg" , nome: "meowed", imagemConteudo: "assets/img/gato-telefone.svg", imagemCurtidas :"assets/img/respondeai.svg" , texto: "respondeai", curtidas: 101523 },
        {imagemUsuario :"assets/img/barked.svg" , nome: "barked", imagemConteudo:"assets/img/dog.svg" , imagemCurtidas :"assets/img/adorable_animals.svg" , texto: "adorable_animals", curtidas: 199159 }
    ]


    return (
        <div class="posts">
            {post.map((p) => <Post imagemUsuario = {p.imagemUsuario} nome = {p.nome} imagemConteudo = {p.imagemConteudo} 
                imagemCurtidas = {p.imagemUsuario} texto = {p.texto} curtidas = {p.curtidas}/> )}
        </div>

    );

}