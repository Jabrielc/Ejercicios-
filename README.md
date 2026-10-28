# 30 Ejercicios en React

Los 30 ejercicios de consola (C#) convertidos en aplicaciones web con **React 19 + Vite 7**.
Incluye menú dinámico, buscador y varios extras.

## Uso
```bash
npm install
npm run dev      # http://localhost:5173
npm test         # prueba la lógica de los 30 ejercicios
npm run build
```
Requiere Node.js 20.19+ o 22.12+.

## Qué incluye
- **Menú dinámico:** las tarjetas de inicio se generan solas desde `src/data/exercises.js`,
  con filtros por categoría (Todos, Favoritos, Condicionales, Ciclos, Cálculos).
- **Buscador:** filtra las tarjetas al instante; ignora acentos y mayúsculas; busca por título,
  categoría, descripción o número. `/` enfoca el buscador, `Esc` lo limpia, `Enter` abre el primer resultado.
- **Navegación con URL:** `#/ejercicio/12` funciona con el botón atrás y se puede compartir.
- **Extras:** favoritos ★, marca ✓ en los ejercicios probados con barra de progreso, tema claro/oscuro,
  botones Anterior/Siguiente y tarjeta de resultado. Todo se guarda en el navegador (localStorage).

## Los ejercicios
Se conservan los números originales: 1 al 15 y 18 al 32 (30 ejercicios).

| Categoría | Ejercicios |
|---|---|
| Condicionales | 1, 2, 3, 4, 5, 19, 20, 30, 32 |
| Ciclos | 6, 7, 9, 10, 12, 13, 14, 15, 18, 21, 22, 23, 27, 28, 29, 31 |
| Cálculos | 8, 11, 24, 25, 26 |

Cada `Console.ReadLine` es un campo del formulario y cada `Console.WriteLine` es una línea del resultado.
Los ejercicios que repiten muchas veces (9, 12, 14, 18, 21, 22, 23, 27, 29, 31) usan un cuadro de texto
donde se escribe la lista de datos.

### Diferencias con el código de consola
- **3:** el enunciado dice 2 % de descuento (el código usaba 20 %).
- **7:** incluye las horas extra del ejercicio 1, como pide el enunciado.
- **9:** la nota 20 cuenta como aprobada.
- **11:** el descuento aplica si el precio bruto es mayor a 50.
- **12:** el 0 se cuenta aparte (no como negativo).
- **13:** factorial hasta 100 (en C# con `int` se desbordaba desde 13).
- **15:** rango 20–400 como dice el enunciado (editable).
- **24:** área con la fórmula de Herón correcta.
- **26:** usa `Math.PI` y el volumen con 4/3 real.
- **29:** caja inicial 3.71 como dice el enunciado (editable).
- **32:** las claves no distinguen mayúsculas ni acentos.

## Estructura
```
src/
  App.jsx                 # estado general y rutas
  data/exercises.js       # los 30 ejercicios (datos + lógica)
  data/exercises.test.js  # pruebas
  hooks/                  # useHash, useLocalStorage
  utils/                  # parse.js (validación), text.js (normalizar)
  components/             # Header, SearchBar, Home, ExerciseCard, ExerciseView,
                          # ResultBox, ErrorBoundary
```

## Agregar o cambiar un ejercicio
Cada ejercicio es un objeto en `EXERCISES`. No hay que tocar ningún componente:

```js
{
  id: 33, category: 'Cálculos', title: 'Doble de un número',
  description: 'Multiplica un número por dos.',
  fields: [{ name: 'n', label: 'Número', type: 'number', default: '4' }],
  run: ({ n }) => [`El doble es: ${Number(n) * 2}`],   // devuelve las líneas del resultado
}
```
Tipos de campo: `number`, `text`, `textarea`, `select` (con `options`).
Las líneas con formato `Etiqueta: valor` se muestran como filas en la tarjeta de resultado.
