import { RiSearchLine } from "react-icons/ri"
import { GiGalaxy } from "react-icons/gi"

import "./header.scss"
export default function Header () {
    return (
        <header>
            <div className="content-logo">
                <div style={{ background: "linear-gradient(to bottom, #7B78E5, #C98CF1)" }}>
                    <span style={{ background: "linear-gradient(to bottom, #7B78E5, #C98CF1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        <GiGalaxy color="#fff" size={50} />
                    </span>
                </div>
                <h1>Uga Space</h1>
            </div>
            <div className="content-search">
                <input type="search" placeholder="O que voce procura?" spellCheck="false"/>
                <RiSearchLine size={20} className="search-ico"/>
            </div>
        </header>
    )
}