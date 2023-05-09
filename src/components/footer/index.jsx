import "./footer.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";

export default function Footer () {
    return (
        <footer>
            <div className="content-redes-sociais">
                <FaFacebook className="ico-color" size={25}/>
                <GrTwitter className="ico-color" size={25}/>
                <FaInstagram className="ico-color" size={25}/>
            </div>
            <h3>Desenvolvido por @matheus._dev</h3>
        </footer>
    )
}