function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("img");
  var data = new Date();
  var hora = data.getHours();
  var res = window.document.getElementById("resultado");
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = "imagens/manha.png";
    document.body.style.background ='#d39886'
    document.body.style.color ='#000000e5'
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = "imagens/tarde.png";
    document.body.style.background ='#b66844'
  } else {
    //Boa noite!
    img.src = 'imagens/noite.png';
    document.body.style.background = '12124d'
  }
}
function resultado(){
  const sentence = "o que eu to falando aqui blablabla"

  console.log(sentence.toUpperCase());
  
}