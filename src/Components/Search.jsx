import { AppContext } from "../context"
import { useContext } from "react"
import React,{useState} from "react"
export default function Search(){
const {setSearchTerm,fetchRandomMeal}=useContext(AppContext)
const [text,setText]=useState("")
function handleChange(event){
    setText(event.target.value)
}
function handleSubmit(e){
    e.preventDefault()
    if(text){
        setSearchTerm(text)
    }
}
function handleRandomMeal(){
    setSearchTerm("")
    setText("")
    fetchRandomMeal()
}
    return(
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="type meal" className="form-input" onChange={handleChange} value={text}/>
                <button type="submit" className="btn">Search</button>
                <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>Surprise Me!</button>
            </form>
        </header>
    )
}