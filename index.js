const { app, BrowserWindow, ipcMain } = require('electron')//Adicionando electron no projeto


function CriarJanela(){

  const janela = new BrowserWindow({
    width:900,//Largura do programa
    height:600,//Altura do programa
    frame:false,//Barra em cima do Programa
    autoHideMenuBar: true,//Esconder barra de programa
    webPreferences: {
      nodeintegration: true//adicionar node na aplicação]
    }
  
  })

  janela.loadURL(`file://${__dirname}/front/index.html`)//Mostrar a pagina

}




app.on('ready', ()=>{CriarJanela()})//Chamando a função criar janela