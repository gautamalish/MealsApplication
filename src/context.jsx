
import React,{useContext} from "react";
import axios from "axios";
const AppContext=React.createContext()


const allMealsUrl=`https://www.themealdb.com/api/json/v1/1/search.php?s=`
const randomMealUrl="https://www.themealdb.com/api/json/v1/1/random.php"


function AppProvider({children}){
    const [loading,setLoading]=React.useState(false)
    const [meals,setMeals]=React.useState([])
    const [searchTerm,setSearchTerm]=React.useState("")
    const [showModal,setShowModal]=React.useState(false)
    const [selectedMeal,setSelectedMeal]=React.useState(null)
    const [favourites,setFavourites]=React.useState(JSON.parse(localStorage.getItem("favourites"))||[])

    function addToFavourites(idMeal){
        console.log(idMeal)
        const meal=meals.find(item=>item.idMeal===idMeal)
        const alreadyFavourite=favourites.find(meal=>meal.idMeal===idMeal)
        if(alreadyFavourite) return
        const updatedFavourites=[...favourites,meal]
        setFavourites(updatedFavourites)
        localStorage.setItem("favourites",JSON.stringify(updatedFavourites))
    }
    function removeFromFavourites(idMeal){
        const updatedFavourites=favourites.filter((item)=>item.idMeal!==idMeal)
        setFavourites(updatedFavourites)
        localStorage.setItem("favourites",JSON.stringify(updatedFavourites))
    }
    const selectMeal=((idMeal,favouriteMeal)=>{
        let meal
        if(favouriteMeal){
            meal=favourites.find((meal)=>meal.idMeal===idMeal)
        }
        else{
            meal=meals.find(item=>item.idMeal===idMeal)
        }
        setSelectedMeal(meal)
        setShowModal(true)
    })
    async function fetchMeals(url){
        setLoading(true)
        try{
            const response=await axios(url)
            if(response.data.meals){
                setMeals(response.data.meals)
            }
            else{
                setMeals([])
            }
            
             }
             catch(error){
             console.log(error)
             }
             setLoading(false)
    }
    function fetchRandomMeal(){
        fetchMeals(randomMealUrl)
    }
    function closeModal(){
        setShowModal(false)
    }
    React.useEffect(()=>{
        fetchMeals(allMealsUrl)
    },[])
    React.useEffect(()=>{
        if(!searchTerm) return
        fetchMeals(`${allMealsUrl}${searchTerm}`)
        },[searchTerm])
    return <AppContext.Provider value={{meals,loading,setSearchTerm,fetchRandomMeal,showModal,selectedMeal,selectMeal,closeModal,addToFavourites,removeFromFavourites,favourites}}>
        {children}
    </AppContext.Provider>
}
export {AppContext,AppProvider}