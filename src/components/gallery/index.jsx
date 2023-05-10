import React from 'react';
import Tags from '../tags';
import "./gallery.scss";
import fotos from "./fotos.json";
import { AiOutlineHeart, AiOutlineExpandAlt } from "react-icons/ai"
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
                        <div className='content-info'>
                            <span>
                                <h3>{fotos.titulo}</h3>
                                <p>Fonte/fotógrafo/satétilite</p>
                            </span>
                            <span>
                                <AiOutlineHeart size={25} color='#fff' className='ico-card'/>
                                <AiOutlineExpandAlt size={25} color='#fff' className='ico-card'/>
                            </span>
                        </div>
                        

                    </li>
                })
            }
            
        </ul>
        
    </div>
  )
}
