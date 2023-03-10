

function sumaDiagonalesPrincipales(numeroDeLados) {
  if (numeroDeLados % 2 === 0) {
    let sumaTotal = 0;
    let posicionFigura = numeroDeLados / 2;
    let n = 1;

    while (n <= posicionFigura) {
      let valorPotencia = Math.pow(n, 2);
      sumaTotal += 16 * valorPotencia - 12 * n + 6;
      n++;
    }
    return `La suma de las diagonales principales es: ${sumaTotal}`;
  } else {
    let sumaTotal = 1;
    let posicionFigura = (numeroDeLados - 1) / 2;
    let n = 1;
    while (n <= posicionFigura) {
      let valorPotencia = Math.pow(n, 2);
      sumaTotal += 16 * valorPotencia + 4 * n + 4;
      n++;
    }
    return `La suma de las diagonales principales es: ${sumaTotal}`;
  }
}

//ingresa de qué número de lados es tu cuadrado, por ejemplo si es un cuadrado de 5x5, debes ingresar el 5.
console.log(sumaDiagonalesPrincipales(5));
