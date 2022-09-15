
import Usuario from "./usuario";
import Sugestoes from "./sugestao";

export default function SibeBar(){

    return(
        <div class = "sidebar">
            <Usuario/>
            <Sugestoes/>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );

}