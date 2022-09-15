
import Stories from "./stories";
import Posts from "./posts";
import SideBar from "./sidebar";

export default function Corpo() {

    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <SideBar />
            
        </div>
    );

}