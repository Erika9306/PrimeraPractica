// 1. Declara la variable nombre con "Peter" usando let
// Tu código
let name = 'Peter';

// 2. Muestra el valor de nombre en la consola
// Tu código // Salida: Peter
console.log('Peter');

// 3. Reasigna la variable nombre al valor "Otto"
// Tu código
name = 'Otto';

// 4. Muestra el valor actualizado de nombre en la consola
// Tu código // Salida esperada: Otto
console.log(name);

// 5. Declara la variable edad con el valor 30 usando const
// Tu código
const age = 30;

// 6. Intenta reasignar edad a 35 (generará un error) y coméntalo para que no se ejecute
// Tu código // Error: TypeError: Assignment to constant variable.
//age = 35;

// 7. Muestra el valor de edad en la consola
// Tu código // Salida esperada: 30
console.log(age);

/////////////////

// Crea una variable llamada "nombre" con tu nombre como valor
// Tu código
const nombre = 'Erika';

// Crea una variable llamada "edad" con tu edad como valor
// Tu código
let edad = 31;

// Crea una variable llamada "mascota" con el nombre de tu mascota o "ninguna" si no tienes
// Tu código
const mascota = 'Juodis';

// Crea una variable llamada "aficion" con tu afición favorita
// Tu código
let aficion = 'el baile';

// Crea una variable llamada "frase" que combine tu nombre, edad, mascota y afición (usando las variables creadas anteriormente) en una frase
// Tu código // Ejemplo: "Hola, soy Ana, tengo 25 años, mi mascota se llama Max y mi afición favorita es jugar baloncesto""

console.log(`Hola, soy ${nombre}, tengo ${edad}, mi mascota se llama ${mascota}, y mi afición favorita es ${aficion}`);

/////////////////
// Declara dos variables numeroA y numeroB con los valores 5 y 7 respectivamente.
// Tu código
let numeroA = 5;
let numeroB = 7;

// Declara una variable sumaTotal que sea igual a la suma de numeroA y numeroB
// Tu código // 12
let sumaTotal = numeroA + numeroB;

// Declara una variable restaTotal que sea igual a la resta de numeroB menos numeroA
// Tu código // 2
let restaTotal = numeroB - numeroA;

// Declara una variable multiTotal que sea igual a la multiplicación de sumaTotal por restaTotal
// Tu código // 24
let multiTotal = sumaTotal * restaTotal;

// Declara una variable divisionTotal que sea igual a la división de multiTotal entre restaTotal
// Tu código // 12
let divisionTotal = multiTotal / restaTotal;

// Imprime los resultados en la consola
console.log("Suma total:", sumaTotal); // Salida: Suma total: 12
console.log("Resta total:", restaTotal); // Salida: Resta total: 2
console.log("Multiplicación total:", multiTotal); // Salida: Multiplicación total: 24
console.log("División Total:", divisionTotal); // Salida: División Total: 12



//////////////////

// Crea 3 variables: poderSuperheroeA con valor 95, poderSuperheroeB 
// con valor 85 y esSuperheroeAMasPoderoso con valor false
// Tu código
const poderSuperheroeA = 95;
const poderSuperheroeB = 85;
let esSuperheroeAMasPoderoso = false;

// Si el superhéroe A tiene mayor poder, cambia el valor de esSuperheroeAMasPoderoso a true
// Tu código
//Prueba distintos escenarios para que esSuperheroeAMasPoderoso sea true o false
if(poderSuperheroeA > poderSuperheroeB)
{
  esSuperheroeAMasPoderoso = true;
  console.log('A es más poderoso')
}else if(poderSuperheroeB > poderSuperheroeA){
  esSuperheroeAMasPoderoso = false;
  console.log('B es más poderoso');
}else {
  esSuperheroeAMasPoderoso = false;
  console.log('Ambos son iguales');
}


////////////////////////////BUCLES///////////////////
// Dado un array llamado videojuegos

const videojuegos = ["The Legend of Zelda", "Super Mario Bros", "Minecraft", "Fortnite", "The Witcher 3"];

// Usa un bucle para imprimir en la consola cada título de videojuego en el array
// Tu código

for(let i = 0; i<videojuegos.length; i++){
  //let ilgis = videojuegos[i];
  //console.log(ilgis);
 // console.log(videojuegos[i]);
}

for(let video of videojuegos){
   // console.log(video);
}

for(let i in videojuegos){
  //console.log(videojuegos[i]);
}


let y = 0;
while(y<videojuegos.length){
  y++;
  console.log(videojuegos[y]);
}




// Dado un array de objetos llamado comics, donde cada objeto representa un 
// cómic con las propiedades: titulo, numero, ventas

const comics = [
  { titulo: "Spider-Man", numero: 1, ventas: 100000 },
  { titulo: "Batman", numero: 1, ventas: 120000 },
  { titulo: "Superman", numero: 1, ventas: 110000 },
  { titulo: "X-Men", numero: 1, ventas: 95000 },
  { titulo: "Wonder Woman", numero: 1, ventas: 105000 }
];

// Usa un bucle para encontrar el cómic con las mayores ventas (puedes crear una nueva variable para 
// almacenar el que intentamos encontrar)

// Tu código
let bestComics = comics[0];
for (let i = 0; i<comics.length; i++){
  if(comics[i].ventas> bestComics.ventas){
    bestComics = comics[i];
  }
}
// Imprime en la consola el título del cómic con mayores ventas
console.log('el comics más vendido: ', bestComics.titulo);



// Dado un array de objetos llamado videojuegos, donde cada objeto representa 
// un videojuego con las propiedades: titulo, año, y genero

const videojuegos = [
  { titulo: "The Legend of Zelda: Breath of the Wild", año: 2017, genero: "Aventura" },
  { titulo: "Super Mario Odyssey", año: 2017, genero: "Plataformas" },
  { titulo: "The Witcher 3", año: 2015, genero: "RPG" },
  { titulo: "Cyberpunk 2077", año: 2020, genero: "RPG" },
  { titulo: "Minecraft", año: 2011, genero: "Sandbox" }
];

// Usa un bucle para filtrar y mostrar solo los videojuegos lanzados después de 2015, puedes utilizar
// un nuevo array donde almacenar solo los videojuegos que coincidan

// Tu código
let juegos = [];
for(let i = 0; i<videojuegos.length; i++){
  if(videojuegos[i].año>2015)
  {
    juegos.push(videojuegos[i]);
  }
}
console.log(juegos);
// Imprime el nuevo array por consola

// Dado un objeto llamado serie con las propiedades: 
// titulo, temporadas, y episodiosPorTemporada (array de números)

const serie = {
  titulo: "Stranger Things",
  temporadas: 4,
  episodiosPorTemporada: [8, 9, 8, 9]
};

// Usa un bucle para imprimir en la consola el número de episodios en cada temporada.
// Puedes hacer lo que quieras dentro (y fuera) del bucle con tal de sacar la siguiente salida por consola:
for(let i = 0; i< serie.episodiosPorTemporada.length; i++){
  
  console.log(`La serie ${serie.titulo} tiene las siguientes temporadas y episodios: temporada ${i+1}: ${serie.episodiosPorTemporada[i]} episodios`);
}
// La serie Stranger Things tiene las siguientes temporadas y episodios:
// Temporada 1: 8 episodios
// Temporada 2: 9 episodios
// Temporada 3: 8 episodios
// Temporada 4: 9 episodios
