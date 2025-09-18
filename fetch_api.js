 async function fetchData(){
    try{
        const pokemonName =document.getElementById("pokemonName").value.toLowerCase()
       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
       if(!response.ok) throw new Error("Error Ocurrs")
       const data = await response.json()
       const pokemanImage = data.sprites.front_default
       const imgElement = document.getElementById("pokemanImage")

       imgElement.src =pokemanImage
       imgElement.style.display="block"
    }

    catch(error){
      console.error(reportError)
    }
 }

 fetchData()