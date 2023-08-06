document.getElementById("simulatorForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const question1 = document.querySelector('input[name="question1"]:checked').value;
    const question2 = document.querySelector('input[name="question2"]:checked').value;
    const question3 = document.querySelector('input[name="question3"]:checked').value;
    const question4 = document.querySelector('input[name="question4"]:checked').value;
  
    const answers = [question1, question2, question3, question4];
  
    const modalidades = checkModalidades(answers);
  
    document.getElementById("result").innerHTML = "<h4>Você pode concorrer à vaga nas seguintes cotas:</h4><ul>" + modalidades.map(modalidade => "<li>" + modalidade + "</li>").join("") + "</ul>";
  });
  
  document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("simulatorForm").reset();
    document.getElementById("result").innerHTML = "";
  });
  
  function checkModalidades(answers) {
    const modalidadesPossiveis = [];
  
    const [q1, q2, q3, q4] = answers;
  
    /*=====Todos sim=====*/
    if (q1 === "Sim") {
      if (q2 === "Sim") {
        if (q3 === "Sim") {
          if (q4 === "Sim") {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
            modalidadesPossiveis.push("L1 - Escola pública e renda inferior");
            modalidadesPossiveis.push("L2 - Escola pública, renda inferior e autodeclarado preto, pardo ou indígena");
            modalidadesPossiveis.push("L4/L6 - Escola pública, renda não considerada e preto, pardo ou indígena");
            modalidadesPossiveis.push("L14 - Escola pública, renda não considerada, preto, pardo ou indígena e pessoa com deficiência");
          } 
          
          /*=====Todos não=====*/
          else {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
            modalidadesPossiveis.push("L1 - Escola pública e renda inferior");
            modalidadesPossiveis.push("L2 - Escola pública, renda inferior e autodeclarado preto, pardo ou indígena");
            modalidadesPossiveis.push("L4/L6 - Escola pública, renda não considerada e preto, pardo ou indígena");
          }
        } 
        
        
        else {
          if (q4 === "Sim") {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
            modalidadesPossiveis.push("L3/L5 - Escola pública e renda não considerada");
            modalidadesPossiveis.push("L13 - Escola pública e pessoa com deficiência");
            modalidadesPossiveis.push("L14 - Escola pública, renda não considerada, preto, pardo ou indígena e pessoa com deficiência");
          } 
          
          
          else {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
            modalidadesPossiveis.push("L3/L5 - Escola pública e renda não considerada");
            modalidadesPossiveis.push("L13 - Escola pública e pessoa com deficiência");
          }
        }
      } 
      
      
      else {
        if (q3 === "Sim") {
          if (q4 === "Sim") {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
            modalidadesPossiveis.push("L3/L5 - Escola pública e renda não considerada");
            modalidadesPossiveis.push("L13 - Escola pública e pessoa com deficiência");
            modalidadesPossiveis.push("L14 - Escola pública, renda não considerada, preto, pardo ou indígena e pessoa com deficiência");
          } 
          
          
          else {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
            modalidadesPossiveis.push("L3/L5 - Escola pública e renda não considerada");
            modalidadesPossiveis.push("L13 - Escola pública e pessoa com deficiência");
          }
        } 
        
        
        else {
          if (q4 === "Sim") {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
            modalidadesPossiveis.push("L13 - Escola pública e pessoa com deficiência");
          } 
          
          
          else {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
          }
        }
      }
    } 
    
    
    else {
      if (q2 === "Sim") {
        if (q3 === "Sim") {
          if (q4 === "Sim") {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
            modalidadesPossiveis.push("L10 - Escola pública, renda inferior, autodeclarado preto, pardo ou indígena e pessoa com deficiência");
          } 
          
          
          else {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
          }
        } 
        
        
        else {
          if (q4 === "Sim") {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
            modalidadesPossiveis.push("L10 - Escola pública, renda inferior, autodeclarado preto, pardo ou indígena e pessoa com deficiência");
          } 
          
          
          else {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
          }
        }
      } 
      
      
      else {
        if (q3 === "Sim") {
          if (q4 === "Sim") {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
            modalidadesPossiveis.push("L10 - Escola pública, renda inferior, autodeclarado preto, pardo ou indígena e pessoa com deficiência");
          } 
          
          
          else {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
          }
        } 
        
        
        else {
          if (q4 === "Sim") {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
            modalidadesPossiveis.push("L10 - Escola pública, renda inferior, autodeclarado preto, pardo ou indígena e pessoa com deficiência");
          } 
          
          
          else {
            modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
          }
        }
      }
    }
  
    return modalidadesPossiveis;
  }