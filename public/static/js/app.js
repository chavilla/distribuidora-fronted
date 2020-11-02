//Oculta el título y muestra a los tres segundos
setTimeout(()=>{
    btnMain.classList.remove('translate-right');
  },300);


  //efecto máquina de escribir
  function writing(str){
    let arrFromString=str.split('');

    let i=0;
    let printString=setInterval(()=>{
      title.innerHTML+=arrFromString[i];

      i++;
      if (i===arrFromString.length) {
        clearInterval(printString);
        
        setTimeout(() => {
          title.innerHTML='';
        writing(str);
        }, 5000);
      }
    },100);

  }

  writing('Innovación Y Precios Bajos');