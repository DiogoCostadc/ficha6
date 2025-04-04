if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").then(function(){
        console.log("Service Worker is registered")
    })
}

let categorialink = "https://api.chucknorris.io/jokes/categories"
let piadalink = "https://api.chucknorris.io/jokes/random?category="
let testediv 

//document.getElementById("piada").innerHTML = localStorage.getItem("piada")



fetch(categorialink,{
    method:'GET'    
})
.then(categoriaResponse => categoriaResponse.json())
.then(categoriaResponseJson =>{
    console.log(categoriaResponseJson)

    categoriaResponseJson.forEach(categoria => {
        let button = document.createElement("button")
        let name = document.createTextNode(`${categoria}`)
        button.appendChild(name);
        document.getElementById("teste").appendChild(button);
        
        button.onclick = () => {
            //console.log(categoria)
            //console.log(piadalink + categoria)
            
            fetch(piadalink + categoria, {
                method:'GET'
            })
            .then(piadaResponse => piadaResponse.json())
            .then(piadaResponseJson =>{
                //console.log(piadaResponseJson.value)
                let piada = piadaResponseJson.value
                localStorage.setItem("piada", `${piada}`)
                document.getElementById("piada").innerHTML = localStorage.getItem("piada")
            })
        };
            
    });
    if (localStorage.length>0){
        document.getElementById("piada").innerHTML = localStorage.getItem("piada")
    }else{

    }
    
})
   




