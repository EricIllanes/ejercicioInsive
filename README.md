 
 # Análisis Ejercicio: 

Para comenzar a desarrollar el ejercicio, lo primero que realicé fue analizar bien el cuadrado que se nos da, 
esto con el fin de poder identificar algún patrón o secuencia en los números que se encuentran en las diagonales principales.

Para facilitar este análisis, construí una secuencia de cuadrados, de lados impares (3x3, 5x5, 7x7 y 9x9), y así logré identificar que los números que se posicionaban en las diagonales tenían una relación entre sí, que se podía representar con un modelo matemático.
* Representación del análisis:
```
Así, la suma de los números ubicados en las diagonales de un cuadrado de: 
3x3 ----> 1 + 3 + 5 + 7
5x5 ----> ...la suma anterior + 13 + 17 + 21 + 25
7x7 ----> ...las sumas anteriores + 31 + 37 + 43 + 49
```
Por lo cual la sumatoria de las diagonales de un cuadrado de _n_ x _n_, con '_n_' impar, sería:
> $$
>\sum_{i=1}^{n} 16n^2+4n+5
>$$

Luego de verificar que el modelo era el correcto, lo transformé a código. Tuve dificultades para representar la sumatoria a través del while(), dándome resultados diferentes a los esperados, pero luego de correcciones logré dar con la función esperada:

```
function sumaDiagonalesPrincipales(numeroDeLados) {
  let sumaTotal = 1;

  let posicionFigura = (numeroDeLados - 1) / 2;

  let n = 1;

  while (n <= posicionFigura) {
    let valorPotencia = Math.pow(n, 2);
        sumaTotal += 16*valorPotencia + 4*n + 4;
        n++;
  }

  return `La suma de las diagonales principales es: ${sumaTotal}`;
}
```
Una vez cubierta las opciones para los cuadrados de lados impares, realicé el mismo análisis para aquellos que fueran de lados pares (2x2, 4x4, 6x6, ...), obtuve la secuencia de los números que se posicionan en la diagonal, y realicé el código final:
```
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
```