import React,{useEffect,useState} from 'react'
import {BsSearch} from 'react-icons/bs';
import {fetchdata} from "../service"

function RecipeLists(props) {
    const[searchedTerm, setSearchedTerm]=useState('')
    const [query, setQuery]=useState('pizza')
    const[data,setData]=useState('');

    const searchrecipe=(searchQuery)=>{
        fetchdata(searchQuery).then((response)=>{
            setData(response)
            props.setLoader(false)
        })
    }
    useEffect(()=>{
        fetchdata(query).then((response)=>{
            setData(response)
            props.setLoader(false)
         })
    },[])
  return (
    <div className='container'>
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className='input-wrapper' >
                <input onChange={(e)=>setSearchedTerm(e.target.value)} value={searchedTerm} type="text" placeholder='Search a recipe...' />
                <button onClick={()=>(searchrecipe(searchedTerm),props.setLoader(true))} ><BsSearch /></button>
            </div> 
        </div>
        <div className='flexbox'>
            {
                data && data.hits.map((item,index)=>(
                    <div key={index} className='flexItem'>
                <div className='img-wrapper'>
                    <img src={item.recipe.image} alt={item.recipe.label} />
                </div>
                <p>{item.recipe.label}</p>
            </div>
                ))
            }   
        </div>
    </div>
  )
}

export default RecipeLists