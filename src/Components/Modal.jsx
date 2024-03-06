import { useContext } from "react"
import { AppContext } from "../context"
export default function Modal(){
    const {selectedMeal,closeModal}=useContext(AppContext)
    const {strMealThumb:image,strMeal:title,strInstructions:text,strSource:source}=selectedMeal
    return <aside className="modal-overlay">
        <div className="modal-container">
            <img src={image} alt={title} className="modal-img"/>
            <div className="modal-content">
                <h4>{title}</h4>
                <p className="instruction-title">Cooking Instructions</p>
                <p>{text}</p>
                <a href={source} target="_blank">Original Source</a>
                <button onClick={closeModal}>Close</button>
            </div>
            
        </div>
    </aside>
}