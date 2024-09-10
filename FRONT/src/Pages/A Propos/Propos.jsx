import NavBar from '../../Components/NavBar/NavBar'
import Header from '../../Components/Header/Header'
import MailList from '../../Components/MailList/MailList'
import Footer from '../../Components/Footer/Footer'
import './Propos.css'

const Propos = () => {
  return (
    <div>
       <NavBar/>
      <Header/>
      <div className="campinaDescription">
      <h1 className="campinaTitle">Bienvenue chez CAMPINA</h1>
      <p className="campinaParagraph">
        CAMPINA est bien plus qu'un simple groupe d'organisateurs de rondos en Tunisie ; nous sommes des passionnés
        de découvertes, d'aventures et de moments inoubliables. Notre mission est de vous faire vivre des expériences
        uniques à travers les magnifiques paysages tunisiens.
      </p>

      

      <h2 className="campinaSubtitle">Notre Engagement</h2>
      <p className="campinaParagraph">
        Nous nous consacrons à la découverte de nouveaux endroits pittoresques à travers toute la Tunisie. Que ce soit
        au cœur des montagnes, sur les plages dorées, ou dans des oasis cachées, nous sommes déterminés à vous offrir
        une variété de destinations pour vos rondos.
      </p>

      {/* ... (Ajoutez des images et du texte supplémentaires au besoin) */}

      <h2 className="campinaSubtitle">Découvrir des Endroits Uniques</h2>
      <p className="campinaParagraph">
        Chaque rando organisée par CAMPINA est une opportunité de découvrir des endroits uniques et souvent méconnus.
        Notre équipe d'experts explore continuellement de nouveaux itinéraires pour vous offrir des expériences
        authentiques, loin des sentiers battus.
      </p>

      <h2 className="campinaSubtitle">Satisfaction du Client</h2>
      <p className="campinaParagraph">
        La satisfaction de nos clients est au cœur de notre démarche. Nous nous efforçons constamment de répondre à
        vos attentes et de dépasser vos espérances. De la planification minutieuse des rondos à l'accueil chaleureux
        sur le terrain, votre expérience avec CAMPINA est notre priorité absolue.
      </p>

      <h2 className="campinaSubtitle">Rejoignez l'Aventure</h2>
      <p className="campinaParagraph">
        Prêt à explorer la Tunisie d'une manière nouvelle et passionnante ? Rejoignez-nous pour une aventure
        inoubliable avec CAMPINA. Nous sommes impatients de partager des moments mémorables avec vous et de créer des
        souvenirs qui dureront toute une vie.
      </p>
    </div>
     
        <MailList/>
        <Footer/>
    </div>
  )
}

export default Propos
