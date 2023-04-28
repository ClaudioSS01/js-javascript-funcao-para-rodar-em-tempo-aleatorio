# js-javascript-funcao-para-rodar-em-tempo-aleatorio
<br>
<h1> A função  a seguir é para rodar em tempo aleatorio de 1 a 15 segundos </h1>
<br>
<code>
function imprimirNumeroAleatorio() {
    const intervalo = Math.floor(Math.random() * 15) + 1;
    const tempoInicio = Date.now();
    setTimeout(() => {
      const tempoDecorrido = (Date.now() - tempoInicio) / 1000;
      console.log(`Tempo decorrido: ${tempoDecorrido.toFixed(2)} segundos.`);
      imprimirNumeroAleatorio();
    }, intervalo * 1000);
  }
  
  imprimirNumeroAleatorio();
</code>
