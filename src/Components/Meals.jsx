import { useContext } from "react"
import { AppContext } from "../context"
import { BsHandThumbsUp } from "react-icons/bs";
export default function Meals(){
    const {meals,loading,selectMeal,addToFavourites}=useContext(AppContext)
    if(loading){
        return <section className="loading-section">
            <h1>Loading...</h1>
        </section>
    }
    if(meals.length<1){
        return <section className="no-meals">
            <h3>No meals matched your search. Please try again!</h3>
        </section>
    }
    return(
        <div className="section-center">
            {meals.map((singleMeal,index)=>{
            const {idMeal,strMeal:title,strMealThumb:image}=singleMeal
                return <article key={idMeal} className="single-meal">
                    <img src={image} alt="Food" className="img" onClick={()=>selectMeal(idMeal)}/>
                    <footer className="single-meal-footer">
                        <h5 className="title">{title}</h5>
                        <button className="like-btn" onClick={()=>addToFavourites(idMeal)}><BsHandThumbsUp/></button>
                    </footer>
                </article>
            })}
        </div>
    )
}