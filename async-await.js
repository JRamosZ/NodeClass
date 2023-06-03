const pastel = {
  leerReceta: false,
  conseguirIngredientes: false,
  masaPreparada: false,
};

const leerReceta = (pastel) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      pastel.leerReceta = true;
      if (!pastel.leerReceta) {
        // No se resuelve -> CATCH recibe esto
        reject("Tienes que leer la receta primero");
      }

      // Si si se resuelve -> THEN recibe esto
      resolve(pastel);
    }, 3000);
  });
};

// Declarar
const conseguirIngredientes = (pastelLeido) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      pastelLeido.conseguirIngredientes = true;
      if (!pastelLeido.conseguirIngredientes) {
        reject("No conseguimos los ingredientes del paste;");
      }

      resolve(pastelLeido);
    }, 3000);
  });
};

const prepararMasa = (pastelConIngredientes) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      pastelConIngredientes.masaPreparada = true;
      if (!pastelConIngredientes.masaPreparada) {
        reject("No se preparo la masa");
      }

      resolve(pastelConIngredientes);
    }, 2000);
  });
};

// Async/Await
// Async es una palabra reservada -> que indica cuando una FUNCION va a ser asíncrona
// Await es una palabra reservada -> que se utiliza dentro de una FUNCION ASINCRONA, indicaque tenemos que esperar a que la promesa se finalice
//

const terminarPastel = async (pastel) => {
  try {
    const pastelConRecetaLeida = await leerReceta(pastel);
    const pastelConIngredientes = await conseguirIngredientes(
      pastelConRecetaLeida
    );
    const pastelConMasaPreparada = await prepararMasa(pastelConIngredientes);
    console.log(pastelConMasaPreparada);
  } catch (error) {
    console.log(error);
  }
};

// const resultado = terminarPastel(pastel).then((pastel) => {
//   console.log(pastel);
// });

const fs = require("fs/promises");
const filePath = "./directory/archivo.txt";

const readFileAsync = async () => {
  try {
    const contents = await fs.readFile(filePath, { encoding: "utf8" });
    console.log(contents);
  } catch (err) {
    console.error(err);
  }
};

readFileAsync();
