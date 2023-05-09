import React from 'react'
import Tags from '../tags'
import "./gallery.scss"
import fotos from "./fotos.json"
export default function Gallery() {
  return (
    <div className='content-gallery'>
        <h2>Navegue pela galeria</h2>
        <Tags/>
        {
            fotos.fotos.map(fotos => {
                return <img src={fotos.src} alt='foto '/>
            })
        }
    </div>
  )
}
