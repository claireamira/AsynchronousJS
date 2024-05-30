{
button= document.getElementById("myButton")



    async function getData() {
        let img = document.getElementById("myDog")
        let response = await fetch('https://dog.ceo/api/breeds/image/random')
        let data = await response.json()
        console.log(data)
        img.src = data.message
    }
    async function getJoke(){
        let type=document.getElementById("type")
        let setup=document.getElementById("setup")
        let punch=document.getElementById("punchline")
        let response= await fetch ('https://official-joke-api.appspot.com/random_joke')
        let jokeData=await response.json()
        console.log(jokeData)

        punch.innerHTML= jokeData.punchline

    }

    button.addEventListener('click', ()=>{
        getData()
    })
    
}