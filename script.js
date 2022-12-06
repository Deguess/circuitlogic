

//Exercício de Meia Onda
function meiaonda() {
  
  //Variáveis  
  let V1 = document.querySelector('#V1').value; 
  let N1 = document.querySelector('#N1').value;
  let N2 = document.querySelector('#N2').value;
  let C = document.querySelector('#C').value;
  let RL = document.querySelector('#RL').value;
  let F = 60;

    //Tensão de Pico no Capacitor
    //1 Passo
     let V2 = (V1 * N2) / N1;
    
    //2 Passo
     let V2p = V2 * Math.sqrt(2);
    
    //3 Passo
     let Vcp = V2p - 0.7;

    //Tensão de Ripple
     let I = Vcp / (RL * 1000);
     let Vond = I / (F * (C * Math.pow(10, -6)));

    //Tensão média na carga
     let Vmax = Vcp;
     let Vmin = Vcp - Vond;
     let Vmed = (parseFloat(Vmax) + parseFloat(Vmin)) / 2;

    //Mostrar resultados/valores
    document.querySelector('#res').innerHTML = V2.toFixed(2) + " V";
    document.querySelector('#res1').innerHTML = V2p.toFixed(2) + " V";
    document.querySelector('#res2').innerHTML = Vcp.toFixed(2) + " V";
    document.querySelector('#res4').innerHTML = Vond.toFixed(2) + " V";
    document.querySelector('#res7').innerHTML = Vmed.toFixed(2) + " V";
}


//Exercício de Center Tape
function centertape() {

    //Variáveis  
     let V1 = document.querySelector('#V1').value; 
     let N1 = document.querySelector('#N1').value;
     let N2 = document.querySelector('#N2').value;
     let C = document.querySelector('#C').value;
     let RL = document.querySelector('#RL').value;
     let F = 60;

    //Tensão de pico capacitor
    //1 Passo
     let V2 = (V1 * N2) / N1;
    
    //2 Passo
     let V2p = V2 * Math.sqrt(2);
    
    //3 Passo
     let Vcp = (V2p / 2) - 0.7;

    //Tensão de Ripple
     let I = Vcp / (RL * 1000);
     let Vond = I / ((F * 2) * (C * Math.pow(10, -6)));   

    //Tensão média na carga
     let Vmax = Vcp;
     let Vmin = Vcp - Vond;
     let Vmed = (parseFloat(Vmax) + parseFloat(Vmin)) / 2;

    //Mostrar resultados/valores
    document.querySelector('#res').innerHTML = V2.toFixed(2) + " V";
    document.querySelector('#res1').innerHTML = V2p.toFixed(2) + " V";
    document.querySelector('#res2').innerHTML = Vcp.toFixed(2) + " V";
    document.querySelector('#res4').innerHTML = Vond.toFixed(2) + " V";
    document.querySelector('#res7').innerHTML = Vmed.toFixed(2) + " V";


}

//Exercício de Ponte
function ponte() {
    
     //Variáveis  
      let V1 = document.querySelector('#V1').value; 
      let N1 = document.querySelector('#N1').value;
      let N2 = document.querySelector('#N2').value;
      let C = document.querySelector('#C').value;
      let RL = document.querySelector('#RL').value;
      let F = 60;

     //Tensão de pico capacitor
     //1 Passo
      let V2 = (V1 * N2) / N1;
      
     //2 Passo
     let V2p = V2 * Math.sqrt(2);

     //3 Passo
     let Vcp = V2p - 1.4; 

    //Tensão de Ripple
      let I = Vcp / (RL * 1000);
      let Vond = I / ((2 * F) * (C * Math.pow(10, -6)));  
    
    //Tensão média na carga
     let Vmax = Vcp;
     let Vmin = Vcp - Vond;
     let Vmed = (parseFloat(Vmax) + parseFloat(Vmin)) / 2;

    //Mostrar resultados/valores
    document.querySelector('#res').innerHTML = V2.toFixed(2) + " V";
    document.querySelector('#res1').innerHTML = V2p.toFixed(2) + " V";
    document.querySelector('#res2').innerHTML = Vcp.toFixed(2) + " V";
    document.querySelector('#res4').innerHTML = Vond.toFixed(2) + " V";
    document.querySelector('#res7').innerHTML = Vmed.toFixed(2) + " V";


}

//Exercício de Malha
function malha() {

  //Variáveis
    let E1 = document.querySelector('#E1').value;
    let E2 = document.querySelector('#E2').value;
    let R1 = document.querySelector('#R1').value;
    let R2 = document.querySelector('#R2').value;
    let R3 = document.querySelector('#R3').value;
    let R4 = document.querySelector('#R4').value;
    let R5 = document.querySelector('#R5').value;
    let R6 = document.querySelector('#R6').value;
    let i1;
    let i2;
    let i3;

  //Descobrindo I1
  //i1 = E1  / (((R2 * R2) / - R5 - R6 - R2) + R1 + R2 + R3 + R4);
  var Rtotal = (parseFloat(R1) + parseFloat(R2) + parseFloat(R3) + parseFloat(R4)).toFixed(2);
  let div = ((R2*R2) / (- R5 - R6 - R2)).toFixed(2);
  i1 = (E1 / (parseFloat(Rtotal) + parseFloat(div))).toFixed(2);

  //Descobrindo o I2
  //i2 = ((- E2 + (R2 * i1)) / (- R5 - R6 - R2));
  let soma = - parseFloat(E2) + (parseFloat(R2) * parseFloat(i1));
  i2 = - soma / (- R5 - R6 - R2);

  //Descobrindo I3
  i3 = i1 - i2;

  //Potência do Resistores
  let P1 = R1 * Math.pow(i1, 2);
  let P2 = R2 * Math.pow(i3, 2);
  let P3 = R3 * Math.pow(i1, 2);
  let P4 = R4 * Math.pow(i1, 2);
  let P5 = R5 * Math.pow(i2, 2);
  let P6 = R6 * Math.pow(i2, 2);
  let PE1 = E1 * Math.pow(i1, 2);
  let PE2 = E2 * Math.pow(i2, 2);



  document.querySelector('#res10').innerHTML = i1 + " A";
  document.querySelector('#res11').innerHTML = i2.toFixed(2) + " A";
  document.querySelector('#res12').innerHTML = i3.toFixed(2) + " A";
  document.querySelector('#res14').innerHTML = P1.toFixed(2) + " W";
  document.querySelector('#res15').innerHTML = P2.toFixed(2) + " W";
  document.querySelector('#res16').innerHTML = P3.toFixed(2) + " W";
  document.querySelector('#res17').innerHTML = P4.toFixed(2) + " W";
  document.querySelector('#res18').innerHTML = P5.toFixed(2) + " W";
  document.querySelector('#res19').innerHTML = P6.toFixed(2) + " W";
  document.querySelector('#res20').innerHTML = PE1.toFixed(2) + " W";
  document.querySelector('#res21').innerHTML = PE2.toFixed(2) + " W";

}

//function limpar1(target) {
  

  //Input's
  //document.querySelector('#V1').reset();
  //document.querySelector('#N1').innerHTML = "";
  //document.querySelector('#N2').innerHTML = "";
  //document.querySelector('#C').innerHTML = "";
  //document.querySelector('#RL').innerHTML = "";

  //Resultados
  //document.querySelector('#res').innerHTML = "";
  //document.querySelector('#res1').innerHTML = "";
 // document.querySelector('#res2').innerHTML = "";
  //document.querySelector('#res4').innerHTML = "";
 // document.querySelector('#res7').innerHTML = "";
  

//}

//SIMULADOR DE PORTAS LÓGICAS

//Função para mudar o valor dos botões
function mudarClick(){

  //Declarar botões
  const btn = document.querySelector('#btn');
  const btn1 = document.querySelector('#btn1');
  const btn3 = document.querySelector('#btn3');
  const btn4 = document.querySelector('#btn4');
  const btn6 = document.querySelector('#btn6');
  const btn7 = document.querySelector('#btn7');

  //Mudança de estado do botão primário (PORTA AND)
  btn.addEventListener('click', function handleClick() {
    const classInicial = 'btn btn-danger';
    const textoInicial = '0';

    if(btn.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase()) && btn.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase())) {

      btn.className = "btn btn-success";
      btn.textContent = " 1 "

    } else {

      btn.className = classInicial;
      btn.textContent = textoInicial; 

    }

  });

  //Mudança de estado do botão secundário (PORTA AND)
  btn1.addEventListener('click', function handleClick1() {
    const textoInicial = '0';
    const classInicial = 'btn btn-danger';
  
        if(btn1.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase()) && btn1.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase())) {
  
        btn1.className = "btn btn-success";  
        btn1.textContent = '1';
  
        } else {
  
        btn1.className = classInicial;  
        btn1.textContent = textoInicial;
  
    }
  
    });
    

    //Mudança de estado do botão primário (PORTA OR)
    btn3.addEventListener('click', function handleClick2() {
      const textoInicial = '0';
      const classInicial = 'btn btn-danger';
    
          if(btn3.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase()) && btn3.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase())) {
    
          btn3.className = "btn btn-success";  
          btn3.textContent = '1';
    
          } else {
    
          btn3.className = classInicial;  
          btn3.textContent = textoInicial;
    
      }
    
      });

          //Mudança de estado do botão secundário (PORTA OR)
    btn4.addEventListener('click', function handleClick3() {
      const textoInicial = '0';
      const classInicial = 'btn btn-danger';
    
          if(btn4.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase()) && btn4.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase())) {
    
          btn4.className = "btn btn-success";  
          btn4.textContent = '1';
    
          } else {
    
          btn4.className = classInicial;  
          btn4.textContent = textoInicial;
    
      }
    
      });

     //Mudança de estado do botão primário (PORTA NAND)
    btn6.addEventListener('click', function handleClick4() {
      const textoInicial = '0';
      const classInicial = 'btn btn-danger';
    
          if(btn6.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase()) && btn6.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase())) {
    
          btn6.className = "btn btn-success";  
          btn6.textContent = '1';
    
          } else {
    
          btn6.className = classInicial;  
          btn6.textContent = textoInicial;
    
      }
    
      });

                //Mudança de estado do botão secundário (PORTA NAND)
    btn7.addEventListener('click', function handleClick5() {
      const textoInicial = '0';
      const classInicial = 'btn btn-danger';
    
          if(btn7.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase()) && btn7.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase())) {
    
          btn7.className = "btn btn-success";  
          btn7.textContent = '1';
    
          } else {
    
          btn7.className = classInicial;  
          btn7.textContent = textoInicial;
    
      }
    
      });

      //Mudança de estado do botão primário (PORTA NOR)
    btn9.addEventListener('click', function handleClick6() {
      const textoInicial = '0';
      const classInicial = 'btn btn-danger';
    
          if(btn9.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase()) && btn9.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase())) {
    
          btn9.className = "btn btn-success";  
          btn9.textContent = '1';
    
          } else {
    
          btn9.className = classInicial;  
          btn9.textContent = textoInicial;
    
      }
    
      });

            //Mudança de estado do botão secundário (PORTA NOR)
    btn10.addEventListener('click', function handleClick7() {
      const textoInicial = '0';
      const classInicial = 'btn btn-danger';
    
          if(btn10.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase()) && btn10.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase())) {
    
          btn10.className = "btn btn-success";  
          btn10.textContent = '1';
    
          } else {
    
          btn10.className = classInicial;  
          btn10.textContent = textoInicial;
    
      }
    
      });

    //Mudança de estado do botão primário (PORTA XOR)
    btn12.addEventListener('click', function handleClick8() {
      const textoInicial = '0';
      const classInicial = 'btn btn-danger';
    
          if(btn12.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase()) && btn12.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase())) {
    
          btn12.className = "btn btn-success";  
          btn12.textContent = '1';
    
          } else {
    
          btn12.className = classInicial;  
          btn12.textContent = textoInicial;
    
      }
    
      });

        //Mudança de estado do botão secundário (PORTA XOR)
        btn13.addEventListener('click', function handleClick9() {
          const textoInicial = '0';
          const classInicial = 'btn btn-danger';
        
              if(btn13.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase()) && btn13.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase())) {
        
              btn13.className = "btn btn-success";  
              btn13.textContent = '1';
        
              } else {
        
              btn13.className = classInicial;  
              btn13.textContent = textoInicial;
        
          }
        
          });

      //Mudança de estado do botão primário (PORTA NXOR)
        btn15.addEventListener('click', function handleClick10() {
          const textoInicial = '0';
          const classInicial = 'btn btn-danger';
        
              if(btn15.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase()) && btn15.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase())) {
        
              btn15.className = "btn btn-success";  
              btn15.textContent = '1';
        
              } else {
        
              btn15.className = classInicial;  
              btn15.textContent = textoInicial;
        
          }
        
          });

          //Mudança de estado do botão secundário (PORTA NXOR)
          btn16.addEventListener('click', function handleClick11() {
            const textoInicial = '0';
            const classInicial = 'btn btn-danger';
          
                if(btn16.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase()) && btn16.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase())) {
          
                btn16.className = "btn btn-success";  
                btn16.textContent = '1';
          
                } else {
          
                btn16.className = classInicial;  
                btn16.textContent = textoInicial;
          
            }
          
            });

   //Mudança de estado do botão primário (PORTA NOT)
   btn18.addEventListener('click', function handleClick12() {
      const textoInicial = '0';
        const classInicial = 'btn btn-danger';
  
  if(btn18.textContent.toLocaleLowerCase().includes(textoInicial.toLocaleLowerCase()) && btn18.className.toLocaleLowerCase().includes(classInicial.toLocaleLowerCase())) {
  
      btn18.className = "btn btn-success";  
      btn18.textContent = '1';
  
    } else {
  
        btn18.className = classInicial;  
        btn18.textContent = textoInicial;
                
       }
                
  });

}


//Porta And
function portaAnd() {
  var btn = document.querySelector('#btn');
  var btn1 = document.querySelector('#btn1');
  const btn2 = document.querySelector('#btn2');

 var valor = btn.textContent;
 var valor1 =  btn1.textContent;
 

  if(parseInt(valor) == 1 && parseInt(valor1) == 1) {

    btn2.className = "btn btn-success";
    btn2.textContent = '1';
    console.log(valor);
    console.log(valor1);

  } else {

    btn2.className = 'btn btn-danger';
    btn2.textContent = '0';

  }




}

//Porta OR
function portaOR() {
  var btn3 = document.querySelector('#btn3');
  var btn4 = document.querySelector('#btn4');
  const btn2 = document.querySelector('#btn5');

 var valor = btn3.textContent;
 var valor1 =  btn4.textContent;
 

  if(parseInt(valor) == 1 || parseInt(valor1) == 1) {

    btn5.className = "btn btn-success";
    btn5.textContent = '1';
    console.log(valor);
    console.log(valor1);

  } else {

    btn5.className = 'btn btn-danger';
    btn5.textContent = '0';

  }
}

//Porta NAND
function portaNand() {
  var btn6 = document.querySelector('#btn6');
  var btn7 = document.querySelector('#btn7');
  const btn8 = document.querySelector('#btn8');

 var valor = btn6.textContent;
 var valor1 =  btn7.textContent;
 

  if(!(parseInt(valor) == 1 && parseInt(valor1) == 1)) {

    btn8.className = "btn btn-success";
    btn8.textContent = '1';
    console.log(valor);
    console.log(valor1);

  } else {

    btn8.className = 'btn btn-danger';
    btn8.textContent = '0';

  }
}

//Porta NOR
function portaNor() {
  var btn9 = document.querySelector('#btn9');
  var btn10 = document.querySelector('#btn10');
  const btn11 = document.querySelector('#btn11');

 var valor = btn9.textContent;
 var valor1 =  btn10.textContent;
 

  if(parseInt(valor) == 0 && parseInt(valor1) == 0) {

    btn11.className = "btn btn-success";
    btn11.textContent = '1';
    console.log(valor);
    console.log(valor1);

  } else {

    btn11.className = 'btn btn-danger';
    btn11.textContent = '0';

  }
}

//Porta XOR
function portaXor() {
  var btn12 = document.querySelector('#btn12');
  var btn13 = document.querySelector('#btn13');
  const btn14 = document.querySelector('#btn14');

 var valor = btn12.textContent;
 var valor1 =  btn13.textContent;
 

  if((parseInt(valor) == 1 && parseInt(valor1) == 0) || (parseInt(valor) == 0 && parseInt(valor1) == 1)) {

    btn14.className = "btn btn-success";
    btn14.textContent = '1';
    console.log(valor);
    console.log(valor1);

  } else {

    btn14.className = 'btn btn-danger';
    btn14.textContent = '0';

  }
}

//Porta NXOR
function portaNxor() {
  var btn15 = document.querySelector('#btn15');
  var btn16 = document.querySelector('#btn16');
  const btn17 = document.querySelector('#btn17');

 var valor = btn15.textContent;
 var valor1 =  btn16.textContent;
 

  if((parseInt(valor) == 1 && parseInt(valor1) == 1) || (parseInt(valor) == 0 && parseInt(valor1) == 0)) {

    btn17.className = "btn btn-success";
    btn17.textContent = '1';
    console.log(valor);
    console.log(valor1);

  } else {

    btn17.className = 'btn btn-danger';
    btn17.textContent = '0';

  }
}

//Porta NOT
function portaNot() {
  var btn18 = document.querySelector('#btn18');
  const btn20 = document.querySelector('#btn20');

  var valor = btn18.textContent;
 
  if(parseInt(valor) == 0) {

    btn20.className = "btn btn-success";
    btn20.textContent = '1';
    console.log(valor);
    console.log(valor1);

  } else {

    btn20.className = 'btn btn-danger';
    btn20.textContent = '0';

  }
}








