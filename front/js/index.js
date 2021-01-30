
function fazerConta(){
     const Valor_A = parseInt(document.getElementById('Valor_1').value) || 0//Pegar o valo de Valor atual
     const Valor_T = parseInt(document.getElementById('Valor_2').value) || 0//pegar o valor de Máximo
     const Valor = document.getElementById('Valor')
     Valor.innerText = Math.round((Valor_A/Valor_T)*100) + "%"

     Notificao("Seu calculo está pronto", `O seu calculo deu ${Math.round((Valor_A/Valor_T)*100)}%`)
}

function Notificao(Titulo, Corpo){
     const notificação = new Notification(Titulo, {body: Corpo})
     notificação.onclick()

}


if(Event.key === "ArrowUp"){
     console.log("para cima")
}
