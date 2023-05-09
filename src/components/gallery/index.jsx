import React from 'react'
import Tags from '../tags'
import "./gallery.scss"
import fotos from "./fotos.json"
export default function Gallery() {
  return (
    <div className='content-gallery'>
        <h2>Navegue pela galeria</h2>
        <Tags/>
        <ul>
            {
                fotos.fotos.map(fotos => {
                    return <li key={fotos.id}>
                        <img src={fotos.src} alt='foto '/>
                        <h3>{fotos.titulo}</h3>
                        <p>Fonte/fotógrafo/satétilite</p>
                    </li>
                })
            }
            
        </ul>
        
    </div>
  )
}
