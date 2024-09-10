import NavBar from '../../Components/NavBar/NavBar'
import Header from '../../Components/Header/Header'
import MailList from '../../Components/MailList/MailList'
import Footer from '../../Components/Footer/Footer'
import './Aventures.css'

// Import des images
import Bouhertma from "../../Assets/Bouhertma.jpg"
import BniMtir from "../../Assets/BniMtir.jpg"
import JbelRssas from "../../Assets/JbelRssas.jpg"
import OuedZitoun from "../../Assets/OuedZitoun.jpg"

const Aventures = () => {
  return (
    <div>
       <NavBar/>
      <Header/>
      <div className="campinaDescription">
        <h1 className="campinaTitle">Bienvenue chez CAMPINA</h1>
        <p className="campinaParagraph">
          <img src={Bouhertma} alt="Description de l'image Bouhertma" className="imagePropos"/>
          Jandouba, 

Un emplacement naturel idéal pour le camping offre une retraite loin de l'agitation de la vie quotidienne, un refuge où les sons de la nature remplacent le bruit de la ville. Imaginez-vous entouré par une forêt luxuriante, le clapotis d'une rivière à proximité et le chant des oiseaux qui vous accueille au réveil. Le site de camping parfait offre une sensation d'isolement et de tranquillité, permettant aux campeurs de se déconnecter et de se ressourcer dans un environnement naturel préservé. C'est un endroit où les étoiles brillent dans un ciel sans pollution lumineuse, où les feux de camp réchauffent les nuits fraîches et où chaque journée est une aventure à explorer les sentiers sinueux, à observer la faune locale et à se reconnecter avec la nature d'une manière profonde et significative.
        </p>

        {/* Ajoutez d'autres images et du texte au besoin */}

        <p className="campinaParagraph">
          Jbal Rsas, 
Un emplacement naturel propice au camping offre une escapade immersive dans la splendeur brute de la nature. Imaginez-vous entouré de vastes étendues de verdure, avec pour seule compagnie le chant des oiseaux et le murmure apaisant d'un cours d'eau voisin. C'est un endroit où le temps semble ralentir, où chaque souffle d'air est chargé de fraîcheur et de parfums de la terre. Les nuits sont bercées par le scintillement des étoiles, éloignant les soucis du monde moderne. En ces lieux, les feux de camp crépitent, unifiant les campeurs dans une communion chaleureuse avec la nature. Chaque lever de soleil offre une promesse de nouvelles découvertes et d'aventures à venir, tandis que chaque coucher de soleil peint le ciel d'une palette de couleurs vibrantes. C'est dans ces instants simples mais profondément enrichissants que l'on trouve la véritable essence du camping : la liberté, la paix et la connexion intime avec notre environnement naturel.
          <img src={JbelRssas} alt="Description de l'image JbelRssas" className="imagePropos"/>

        </p>


        <p className="campinaParagraph">
          <img src={OuedZitoun} alt="Description de l'image OuedZitoun" className="imagePropos"/>
          Beja, Un emplacement naturel idéal pour le camping offre un havre de paix au cœur de la nature sauvage. Imaginez-vous dans un paysage où le vert des arbres se mêle au bleu du ciel et au miroitement d'un lac tranquille. C'est un endroit où chaque brise porte avec elle le parfum de la terre humide et où le silence est interrompu seulement par le chant des oiseaux et le murmure de la rivière. Le camping dans un tel lieu permet de se déconnecter de l'agitation urbaine et de se reconnecter avec l'essence même de la vie. C'est une opportunité de se réveiller au son des premières lueurs du jour, de se promener parmi les arbres séculaires, et de contempler les étoiles scintillantes dans un ciel nocturne dépourvu de toute pollution lumineuse. En ces lieux, chaque instant devient une célébration de la simplicité et de la beauté de la nature, offrant aux campeurs une véritable évasion loin du stress et des préoccupations de la vie quotidienne.
        </p>

        {/* Ajoutez d'autres sections au besoin */}

      </div>
     
      <MailList/>
      <Footer/>
    </div>
  )
}

export default Aventures
