
function Dados(props){
    return(
        <div class="usuario">
            <img src={props.imagem} />
            <div class="texto">
                <strong>{props.texto}</strong>
                <span>
                   {props.span}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default function Usuario() {

    return (
        <Dados imagem = "assets/img/catanacomics.svg" texto = "catanacomics" span = "Catana" />
    );

}