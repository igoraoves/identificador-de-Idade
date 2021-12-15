function carregar(){
  var msg = window.document.getElementById("msg")
  var img = window.document.getElementById("foto")
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`
  if(hora < 12){
    img.src = "manha.jpg"
    document.body.style.background = "#75cc97"
  }else if(hora >= 12 && hora < 18) {
    img.src = "tarde.jpg"
    document.body.style.background = "#c03f14"
  }else{
    img.src ="noite.jpg"
    document.body.style.background = '#062c5b'
  }
}