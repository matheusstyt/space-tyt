import React from 'react'
import fotos from "./populares.json";
import "./populares.scss";
export default function Populares() {
  return (
    <aside>
        <h3>Populares</h3>
        <ul>
            {
                fotos.populares.map( foto => {
                    return <li key={foto.id}>
                        <img src={foto.src} alt={`Imagem da ${foto.titulo}`}></img>
                    </li>
                })
            }
            <button>Ver mais</button>
        </ul>
    </aside>
  )
}
