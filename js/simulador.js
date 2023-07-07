document.getElementById("simulatorForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const question1 = document.getElementById("question1").value;
  const question2 = document.getElementById("question2").value;
  const question3 = document.getElementById("question3").value;
  const question4 = document.getElementById("question4").value;

  const answers = [question1, question2, question3, question4];

  const modalidades = checkModalidades(answers);

  document.getElementById("result").innerHTML = "<h4>Você pode concorrer à vaga nas seguintes cotas:</h4><ul>" + modalidades.map(modalidade => "<li>" + modalidade + "</li>").join("") + "</ul>";
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
          modalidadesPossiveis.push("L3/L5 - Escola pública e renda não considerada");
          modalidadesPossiveis.push("L4/L6 - Escola pública, renda não considerada e preto, pardo ou indígena");
          modalidadesPossiveis.push("L9 - Escola pública, renda inferior e pessoa com deficiência");
          modalidadesPossiveis.push("L13 - Escola pública e pessoa com deficiência");
          modalidadesPossiveis.push("L14 - Escola pública, renda não considerada, preto, pardo ou indígena e pessoa com deficiência");
        }

        /*=====S, S, S, N=====*/
        else {
          modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
          modalidadesPossiveis.push("L1 - Escola pública e renda inferior");
          modalidadesPossiveis.push("L2 - Escola pública, renda inferior e autodeclarado preto, pardo ou indígena");
          modalidadesPossiveis.push("L3/L5 - Escola pública e renda não considerada");
          modalidadesPossiveis.push("L4/L6 - Escola pública, renda não considerada e preto, pardo ou indígena");
        }
      }

      /*=====S, S, N, S=====*/
      else {
        modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
        modalidadesPossiveis.push("L1 - Escola pública e renda inferior");
        modalidadesPossiveis.push("L3/L5 - Escola pública e renda não considerada");
        modalidadesPossiveis.push("L9 - Escola pública, renda inferior e pessoa com deficiência");
        modalidadesPossiveis.push("L13 - Escola pública e pessoa com deficiência");
      }
    }

    /*=====S, N, S, S=====*/
    else {
      if (q3 === "Sim") {
        if (q4 === "Sim") {
          modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
          modalidadesPossiveis.push("L3/L5 - Escola pública e renda não considerada");
          modalidadesPossiveis.push("L4/L6 - Escola pública, renda não considerada e preto, pardo ou indígena");
          modalidadesPossiveis.push("L13 - Escola pública e pessoa com deficiência");
          modalidadesPossiveis.push("L14 - Escola pública, renda não considerada, preto, pardo ou indígena e pessoa com deficiência");
        }

        /*=====S, N, S, N=====*/
        else {
          modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
          modalidadesPossiveis.push("L3/L5 - Escola pública e renda não considerada");
          modalidadesPossiveis.push("L4/L6 - Escola pública, renda não considerada e preto, pardo ou indígena");
        }
      }

      /*=====S, N, N, S=====*/
      else {
        if (q4 === "Sim") {
          modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
          modalidadesPossiveis.push("L3/L5 - Escola pública e renda não considerada");
          modalidadesPossiveis.push("L13 - Escola pública e pessoa com deficiência");
        }

        /*=====S, N, N, N=====*/
        else {
          modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
          modalidadesPossiveis.push("L3/L5 - Escola pública e renda não considerada");
        }
      }
    }
  }

  /*=====N, S, S, S=====*/
  else {
    if (q2 === "Sim") {
      if (q3 === "Sim") {
        if (q4 === "Sim") {
          modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
        }

        /*=====N, S, S, N=====*/
        else {
          modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
        }
      }

      /*=====N, S, N, S=====*/
      else {
        modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
      }
    }

    /*=====N, N, S, S=====*/
    else {
      if (q3 === "Sim") {
        if (q4 === "Sim") {
          modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
        }

        /*=====N, N, S, N=====*/
        else {
          modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
        }
      }

      /*=====N, N, N, S=====*/
      else {
        if (q4 === "Sim") {
          modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
        }

        /*=====N, N, N, N=====*/
        else {
          modalidadesPossiveis.push("A0 - Acesso universal / Ampla concorrência");
        }
      }
    }
  }

  return modalidadesPossiveis;
}