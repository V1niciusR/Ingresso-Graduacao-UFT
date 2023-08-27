function handleEscolaPublicaChange(isPublica) {
  const opcoesRenda = document.getElementById("opcoesRenda");
  const etniaDeclarada = document.getElementById("etnia_declarada");
  const deficiencia = document.getElementById("deficiencia");

  const radioInputs = [opcoesRenda, etniaDeclarada, deficiencia].flatMap(container => container.querySelectorAll('input[type="radio"]'));

  if (isPublica) {
      radioInputs.forEach(input => {
          if (input.value === "sim") {
              input.checked = true;
          } else {
              input.checked = false;
          }
      });
      opcoesRenda.style.display = "block";
      etniaDeclarada.style.display = "block";
      deficiencia.style.display = "block";
  } else {
      radioInputs.forEach(input => input.checked = false);
      opcoesRenda.style.display = "none";
      etniaDeclarada.style.display = "none";
      deficiencia.style.display = "none";
  }
}

function calcularResultado() {
  const etnia = document.querySelector('input[name="etnia"]:checked').value;
  const escolaPublica = document.querySelector('input[name="escola_publica"]:checked').value;
  const renda = document.querySelector('input[name="renda"]:checked').value;
  const etniaDeclarada = document.querySelector('input[name="etnia_declarada"]:checked').value;
  const deficiencia = document.querySelector('input[name="deficiencia"]:checked').value;

  const answers = [etnia, escolaPublica, renda, etniaDeclarada, deficiencia];

  const modalidades = checkModalidades(answers);

  document.getElementById("resultado").innerHTML = "<h4>Você pode concorrer à vaga nas seguintes cotas:</h4><ul>" + modalidades.map(modalidade => "<li>" + modalidade + "</li>").join("") + "</ul>";
}

function checkModalidades(answers) {
  const modalidadesPossiveis = [];

  const [etnia, escolaPublica, renda, etniaDeclarada, deficiencia] = answers;

  if (etnia === "nao" && escolaPublica === "nao") {
      modalidadesPossiveis.push("AC");
  }

  else if (etnia === "indigena" && escolaPublica === "nao") {
      modalidadesPossiveis.push("AC");
      modalidadesPossiveis.push("A1 - Indígena");
  }

  else if (etnia === "nao" && escolaPublica === "sim" && renda === "sim" && etniaDeclarada === "nao" && deficiencia === "nao") {
      modalidadesPossiveis.push("AC");
      modalidadesPossiveis.push("L1");
      modalidadesPossiveis.push("L5");
  }

  else if (etnia === "nao" && escolaPublica === "sim" && renda === "sim" && etniaDeclarada === "sim" && deficiencia === "nao") {
      modalidadesPossiveis.push("AC");
      modalidadesPossiveis.push("L1");
      modalidadesPossiveis.push("L2");
      modalidadesPossiveis.push("L5");
      modalidadesPossiveis.push("L6");
  }

  else if (etnia === "nao" && escolaPublica === "sim" && renda === "nao" && etniaDeclarada === "sim" && deficiencia === "nao") {
      modalidadesPossiveis.push("AC");
      modalidadesPossiveis.push("L5");
      modalidadesPossiveis.push("L6");
  }

  else if (etnia === "nao" && escolaPublica === "sim" && renda === "nao" && etniaDeclarada === "sim" && deficiencia === "nao") {
      modalidadesPossiveis.push("AC");
      modalidadesPossiveis.push("L5");
      modalidadesPossiveis.push("L6");
  }

  else if (etnia === "nao" && escolaPublica === "sim" && renda === "nao" && etniaDeclarada === "nao" && deficiencia === "nao") {
      modalidadesPossiveis.push("AC");
      modalidadesPossiveis.push("L5");
  }

  else if (etnia === "nao" && escolaPublica === "sim" && renda === "sim" && etniaDeclarada === "nao" && deficiencia === "sim") {
      modalidadesPossiveis.push("AC");
      modalidadesPossiveis.push("L1");
      modalidadesPossiveis.push("L5");
      modalidadesPossiveis.push("L9");
      modalidadesPossiveis.push("L13");
  }

  else if (etnia === "nao" && escolaPublica === "sim" && renda === "sim" && etniaDeclarada === "sim" && deficiencia === "sim") {
      modalidadesPossiveis.push("AC");
      modalidadesPossiveis.push("L1");
      modalidadesPossiveis.push("L2");
      modalidadesPossiveis.push("L5");
      modalidadesPossiveis.push("L6");
      modalidadesPossiveis.push("L9");
      modalidadesPossiveis.push("L10");
      modalidadesPossiveis.push("L13");
      modalidadesPossiveis.push("L14");
  }

  else if (etnia === "nao" && escolaPublica === "sim" && renda === "nao" && etniaDeclarada === "sim" && deficiencia === "sim") {
      modalidadesPossiveis.push("AC");
      modalidadesPossiveis.push("L5");
      modalidadesPossiveis.push("L6");
      modalidadesPossiveis.push("L13");
      modalidadesPossiveis.push("L14");
  }

  else if (etnia === "nao" && escolaPublica === "sim" && renda === "nao" && etniaDeclarada === "nao" && deficiencia === "sim") {
      modalidadesPossiveis.push("AC");
      modalidadesPossiveis.push("L5");
      modalidadesPossiveis.push("L13");
  }

  return modalidadesPossiveis;
}



document.getElementById("simulatorForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário.

  const question1 = document.querySelector('input[name="question1"]:checked').value;
  const question2 = document.querySelector('input[name="question2"]:checked').value;
  const question3 = document.querySelector('input[name="question3"]:checked').value;
  const question4 = document.querySelector('input[name="question4"]:checked').value;

  const answers = [question1, question2, question3, question4];

  const modalidades = checkModalidades(answers);

  document.getElementById("resultado").innerHTML =
    "<h4>Você pode concorrer à vaga nas seguintes cotas:</h4><ul>" +
    modalidades.map(modalidade => "<li>" + modalidade + "</li>").join("") +
    "</ul>";
});

document.getElementById("resetButton").addEventListener("click", function () {
  document.getElementById("simulatorForm").reset();
  document.getElementById("resultado").innerHTML = "";
});





