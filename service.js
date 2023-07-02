const queryStrings={
    app_id:process.env.REACT_APP_APP_ID,
    app_key:process.env.REACT_APP_APP_KEY
}
// https://api.edamam.com/api/recipes/v2?type=public&q=carrot&app_id=4ef35c23&app_key=f15760b7a6ffc270dec8dfeb25f08046

export const fetchdata=async(defaultQuery)=>{
    const{app_id,app_key}=queryStrings;
try{
const data=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`)
const response = await data.json();
return response;
}
catch(e){
console.log(e,'kuch toh gadbad hai daya, kuch toh gadbad hai!!')
return e;
}
}

export const fetchTabdata=async(defaultQuery)=>{
    const{app_id,app_key}=queryStrings;
try{
const data=await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`)
const response = await data.json();
return response;
}
catch(e){
console.log(e,'kuch toh gadbad hai daya, kuch toh gadbad hai!!')
return e;
}
}