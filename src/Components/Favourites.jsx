import { useContext } from "react"
import { AppContext } from "../context"
import App from "../App"
export default function Favourites(){
    const {favourites,selectMeal,removeFromFavourites}=useContext(AppContext)
    return(
        <section className="favourites">
            <div className="favourites-content">
                <h5>Favourites</h5>
                <div className="favourites-container">
                    {favourites.map((item)=>{
                        const {idMeal,strMealThumb:image}=item
                        return <div key={idMeal} className="favourite-item">
                            <img src={image} alt="food image" className="favourite-img" onClick={()=>selectMeal(idMeal,true)}/>
                            <button className="remove-btn" onClick={()=>removeFromFavourites(idMeal)}>Remove</button>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}