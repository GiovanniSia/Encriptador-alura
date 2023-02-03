function encriptar(texto) {
  let vocales = ['e', 'i', 'a', 'o', 'u']
  let convertida = ['enter', 'imes', 'ai', 'ober', 'ufat']
  for (let i = 0; i < vocales.length; i++) {
    texto = texto.replaceAll(vocales[i], convertida[i]);
  }
  return texto;
}

function desencriptar(texto) {
  let vocales = ['e', 'i', 'a', 'o', 'u']
  let convertida = ['enter', 'imes', 'ai', 'ober', 'ufat']
  for (let i = 0; i < vocales.length; i++) {
    texto = texto.replaceAll(convertida[i], vocales[i]);
  }
  return texto;
}

let botonEncriptar = document.querySelector(".boton-encriptar");
botonEncriptar.addEventListener('click', () => {
  let textoIngresado = document.querySelector(".ingresar-texto").value;
  document.querySelector(".sin-mensaje").className = 'sin-mensaje none';
  document.querySelector(".con-mensaje").className = 'con-mensaje';

  document.querySelector('.texto-encriptador').value = encriptar(textoIngresado);
  //alert(encriptar(textoIngresado));
})

let botonDesencriptar = document.querySelector(".boton-desencriptar");
botonDesencriptar.addEventListener('click', () => {
  let textoIngresado = document.querySelector(".ingresar-texto").value;
  document.querySelector(".sin-mensaje").className = 'sin-mensaje none';
  document.querySelector(".con-mensaje").className = 'con-mensaje';

  document.querySelector('.texto-encriptador').value = desencriptar(textoIngresado)
  //alert(desencriptar(textoIngresado));
})


let botonCopiar = document.querySelector('.boton-copiar');
botonCopiar.addEventListener('click', () => {
  let textoEncriptado = document.querySelector(".texto-encriptador");
  let text = textoEncriptado.value;
  document.querySelector(".sin-mensaje").className = 'sin-mensaje';
  document.querySelector(".con-mensaje").className = 'con-mensaje none';
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard ' + text);
    })
    .catch(err => {
      console.error('Error in copying text: ', err);
    });

})