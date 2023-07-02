import React,{useState,useEffect} from 'react'
import {CiPizza} from 'react-icons/ci'
import {GiFruitBowl , GiNoodles,GiCheckMark} from 'react-icons/gi'
import {MdOutlineIcecream} from 'react-icons/md'
import { fetchdata, fetchTabdata } from '../service'

function Tabs(props) {
    const [active,setActive]=useState('pizza')
    const [tabData,setTabData]=useState('')
    const [tabLabel,setLabel]=useState([
        {
            name:'Pizza',
            icon:<CiPizza/>,
            id:'99f673fe102180db00908baa87abfa32'
        },
        {
            name:'fruit Bowl',
            icon:<GiFruitBowl/>,
            id:'542d31cd47565286752191accea94045'
        },
        {
            name:'Noodles',
            icon:<GiNoodles/>,
            id:'a243e3cd56da95b31e5a86ef52578908'
        },
        {
            name:'Ice Cream',
            icon:<MdOutlineIcecream/>,
            id:'29e669d0a57b1823dda85669c0f39fea'
        },

    ])
    const handleClick=(name,id)=>{
        setActive(name)
        fetchTabdata(id).then((response)=>{
            setTabData(response)
            props.setLoader(false)
        })
    }
    useEffect(()=>{
        fetchTabdata(tabLabel[0].id).then((response)=>{
            setTabData(response);
            props.setLoader(false)
        })
    },[])
    return (
        <div className="container">
        <h1 className='recipeHeading'>What would you like to have!</h1>
        <div className="tabs">
            {tabLabel.map((item,index)=>(
              <div onClick={()=>(handleClick(item.name,item.id),props.setLoader(true))} key={index} className={`tablist ${active===item.name ? 'active':""}`}>
                {item.icon}
                <span>{item.name}</span>
            </div>
            ))} 
        </div>
        <div className='recipe_banner'>
            {
                tabData!==''&&  <>
                <div className="left-col">
                    <span className='badge'>{tabData.recipe.cuisineType[0].toUpperCase()}</span>
                    <h1>{tabData.recipe.label}</h1>
                    <p><strong>Recipe by:</strong><small>{tabData.recipe.source}</small></p>
                    <h3>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            {tabData.recipe.ingredientLines.map((list,index)=>
                                (<li key={index}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{list}</span></li>)
                            )}
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <div className="image-wrapper">
                    <img src={tabData.recipe.image} alt={tabData.recipe.label} />
                    </div>
                </div>
                </>
                 }
                
        </div>
    </div>
  )
}

export default Tabs