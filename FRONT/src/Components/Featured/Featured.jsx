import "./Featured.css"
import Bouhertma from "../../Assets/Bouhertma.jpg"
import BniMtir from "../../Assets/BniMtir.jpg"
import JbelRssas from "../../Assets/JbelRssas.jpg"
import OuedZitoun from "../../Assets/OuedZitoun.jpg"
import useFetch from "../../Hooks/UseFetch"
import Beja from "../../Assets/4.jpg"
import Nabeul from "../../Assets/5.jpg"
import Jandouba from "../../Assets/1.png"
import Bizerte from "../../Assets/2.png"
import Tozer from "../../Assets/3.png"






const Featured = () => {
    const {data,loading,error} = useFetch("/randos/countByPlace?places=cairo")
  return (
    <div className="featured">
       { loading ? ("Loading please wait ") : (<><div className="featuredItem">
            <img src={Jandouba} alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Jandouba</h1>
            </div>
        </div>


        <div className="featuredItem">
            <img src={Bizerte} alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Bizerte</h1>
                <h2>{data[1]}</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={JbelRssas} alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Ben Arous</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Tozer} alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Tozeur</h1>
                <h2>{data[1]}</h2>
            </div>
        </div><div className="featuredItem">
            <img src={Beja} alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Beja</h1>
                <h2>{data[1]}</h2>
            </div>
        </div><div className="featuredItem">
            <img src={Nabeul} alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Nabeul</h1>
                <h2>{data[1]}</h2>
            </div>
        </div>
      </>)}
    </div>
  )
}

export default Featured
