/***
 *
 * Estados:
 * 1 - Pending: la promesa no se ha resuelto, estado inicial
 * 2 - Accepted: la promesa se resolvio
 * 3 - Rejected: la promesa fue rechazada
 *
 * - Declarar/Crear -
 * Al momento de nosotros hacer un promesa ->
 * - resolve -> vamos a indicar cuando una promesa es resulta
 * - reject -> vamos a indicar cuando una promesa es rechazada
 *
 * - Ejecutar
 * THEN -> la promesa ya esta resuelta
 * CATCH -> la promesa esta rechazada
 *
 * - Sintaxis
 * new Promise((resolve, reject)) ->
 */

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
// Promificacion
// const promesa = leerReceta(pastel);
// console.log("promesa ->>>>", promesa);

// Ejecucion
leerReceta(pastel)
  .then((pastelLeido) => {
    // La receta esta leida
    conseguirIngredientes(pastelLeido)
      .then((pastelConIngredientes) => {
        // Ya conseguimos los ingredientes
        console.log("pastelConIngredientes linea 79", pastelConIngredientes);
        prepararMasa(pastelConIngredientes) // -> pendiente
          .then((pastelConIngredientes) => {
            console.log("pastel", pastelConIngredientes);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        // Aquii no se conseguieron los ingredientes
        console.log(error);
      });
  })
  .catch((error) => {
    console.log("error", error);
  });
