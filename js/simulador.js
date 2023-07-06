document.getElementById('cotas-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var escola = document.querySelector('input[name="escola"]:checked').value;
    var renda = document.querySelector('input[name="renda"]:checked').value;
    var etnia = document.querySelector('input[name="etnia"]:checked').value;
    var deficiencia = document.querySelector('input[name="deficiencia"]:checked').value;

    var resultado = document.getElementById('resultado');

    if (escola === 'sim' && renda === 'sim' && etnia === 'sim' && deficiencia === 'sim') {
      resultado.innerHTML = 'Você pode concorrer à vaga na modalidade L10.';
    } else if (escola === 'sim' && renda === 'sim' && etnia === 'sim') {
      resultado.innerHTML = 'Você pode concorrer à vaga na modalidade L2.';
    } else if (escola === 'sim' && renda === 'sim' && deficiencia === 'sim') {
      resultado.innerHTML = 'Você pode concorrer à vaga na modalidade L9.';
    } else if (escola === 'sim' && renda === 'sim') {
      resultado.innerHTML = 'Você pode concorrer à vaga na modalidade L1.';
    } else if (escola === 'sim' && etnia === 'sim' && deficiencia === 'sim') {
      resultado.innerHTML = 'Você pode concorrer à vaga na modalidade L14.';
    } else if (escola === 'sim' && etnia === 'sim') {
      resultado.innerHTML = 'Você pode concorrer à vaga na modalidade L4.';
    } else if (escola === 'sim' && deficiencia === 'sim') {
      resultado.innerHTML = 'Você pode concorrer à vaga na modalidade L13.';
    } else if (escola === 'sim') {
      resultado.innerHTML = 'Você pode concorrer à vaga nas modalidades L3 e L5.';
    } else {
      resultado.innerHTML = 'Você pode concorrer à vaga na modalidade A0.';
    }
  });