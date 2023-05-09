
import banner from "./banner.png"
import "./banner.scss"
export default function Banner() {
    return (
      <div className='content-background'>
            <h3>A galeria mais completa de fotos do espaço!</h3>
            <img src={banner} alt="Imagem da terra vista do espaço"/> 
      </div>

    )
}

