const frutas = ["laranja", "limão", "uva"];

for(i=0 ; i<frutas.length ; i++) 
{
    let fruta = document.getElementById(`fruta-${i+1}`)
    fruta.innerHTML = frutas[i]
}
// let fruta1 = document.getElementById("fruta-1")
// fruta1.innerHTML = frutas[0]

// let fruta2 = document.getElementById("fruta-2")
// fruta2.innerHTML = frutas[1]

// let fruta3 = document.getElementById("fruta-3")
// fruta3.innerHTML = frutas[2]

function teclaPressionada()
{
    let textoAtual = document.getElementById("texto")
    console.log(textoAtual.value)
}

function clicou()
{
    let novaFruta = document.getElementById("texto").value
    frutas.push(novaFruta)  
    console.log(frutas)
    
    let fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = frutas[3]
     
} 

function digitou(e) 
{
    if (e.keyCode == 13) {
      // AO PRESSIONAR A TECLA "ENTER"
      let novaFruta = document.getElementById("texto").value
      frutas.push(novaFruta)  
      console.log(frutas)
      
      let fruta4 = document.getElementById("fruta-4")
      fruta4.innerHTML = frutas[3]
    }
}