import "./home.css";
import Banner from "../../components/banner";
import Gallery from "../../components/gallery";

export default function HomePage() {
    return (
        <div className="container-geral">
            <Banner />
            <Gallery/>
        </div>
    )
 }