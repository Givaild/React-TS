import {PencilLine} from "phosphor-react"
import { Avatar } from "./Avatar"

import styles from "./Sidebar.module.css"

export function Sidebar(){
    return(
            <aside className={styles.sidebar}>
                <img className={styles.cover} 
                src="https://media.istockphoto.com/photos/react-inscription-against-laptop-and-code-background-picture-id1389287506?s=612x612"
                 />
                    <div className={styles.profile}>
                       <Avatar  src="https://github.com/givaild.png"/>

                        <strong>Givaildo de Andrade</strong>
                        <span> Dev FrontEnd Intern</span>
                    </div>

                    <footer>
                        <a href="#">
                            <PencilLine size={20}/>
                            Editar seu perfil
                        </a>
                    </footer>
            
            </aside>
    )
}