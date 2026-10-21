import ffImage from "../assets/ff.png";
import rigaImage from "../assets/riga.png";


export default function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>Welcome to MUTOVU TSS (your success is our priority)</p>

      <div className="home-gallery">
        <img src={ffImage} alt="FF" />
        <img src={rigaImage} alt="Riga" />
      </div>
    </div>
  );
}