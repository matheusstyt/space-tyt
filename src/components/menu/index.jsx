import { BiHomeAlt2 } from "react-icons/bi"
import { IoIosEye } from "react-icons/io"
import { AiOutlineLike } from "react-icons/ai"
import { BsStars} from "react-icons/bs"
import {  MdLightbulbOutline } from "react-icons/md"

import "./menu.scss"
export default function Menu () {
    return (
        <nav className="menu-nav"> 
            <ul>
                <li>
                    <BiHomeAlt2 className="ico-padrao" color="#fff" size={20}/>
                    <p>Início</p>
                </li>
                <li>
                    <IoIosEye className="ico-padrao" color="#fff" size={20}/>
                    <p>Mais curtidas</p>
                </li>
                <li>
                    <AiOutlineLike className="ico-padrao" color="#fff" size={20}/>
                    <p>Mais vistas</p>
                </li>
                <li>
                    <BsStars className="ico-padrao" color="#fff" size={20}/>
                    <p>Novas</p>
                </li>
                <li>
                    <MdLightbulbOutline className="ico-padrao" color="#fff" size={20}/>
                    <p>Surpreenda-me</p>
                </li>
            </ul>
        </nav>
        
    )
}