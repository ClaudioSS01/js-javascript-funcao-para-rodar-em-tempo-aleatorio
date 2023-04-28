function imprimirNumeroAleatorio() {
//aqui esta configurado para rodar entre 1 e 15 segundos
    const intervalo = Math.floor(Math.random() * 15) + 1;
    const tempoInicio = Date.now();
    setTimeout(() => {
      const tempoDecorrido = (Date.now() - tempoInicio) / 1000;
      console.log(`Tempo decorrido: ${tempoDecorrido.toFixed(2)} segundos.`);
      imprimirNumeroAleatorio();
    }, intervalo * 1000);
  }
  
  imprimirNumeroAleatorio();
