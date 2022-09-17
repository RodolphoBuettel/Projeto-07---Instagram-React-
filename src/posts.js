
function Post(props){
    return(
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imagemUsuario} />
                        meowed
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
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.imagemCurtidas}/>
                        <div class="texto">
                            {props.texto}
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default function Posts() {
    const post = [
        {imagemUsuario :"assets/img/meowed.svg" , imagemConteudo: "assets/img/gato-telefone.svg", imagemCurtidas :"assets/img/respondeai.svg" , texto: "Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>" },
        {imagemUsuario :"assets/img/barked.svg" , imagemConteudo:"assets/img/dog.svg" , imagemCurtidas :"assets/img/adorable_animals.svg" , texto: "Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>" }
    ]


    return (
        <div class="posts">
            {post.map((p) => <Post imagemUsuario = {p.imagemUsuario} imagemConteudo = {p.imagemConteudo} 
                imagemCurtidas = {p.imagemUsuario} texto = {p.texto}/> )}
        </div>

    );

}