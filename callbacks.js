const koder = {
    seDieronInformes: false,
    seEntrevisto: false,
    sePago: false,
    seInscribio: false
}
  
const darInformes = (koder, entrevistar) => {
    // Tardo 2 segundos en darle informes al Koder
    let error = null;
    setTimeout(() => {
      koder.seDieronInformes = true;
      // ! -> null, undefined, false
      if(!koder.seDieronInformes) {
        error = "El koder necesita ser informado primero";
      }
      // Solucion
      // callback -> entrevistamelo porque ya se le dieron informes
      entrevistar(error, koder);
    }, 2000)
}

const seEntrevisto = (koderInformado, pagar) => {
    let error = null
    setTimeout(() => {
        koderInformado.seEntrevisto = true;
        if(!koderInformado.seEntrevisto) {
        error = "El koder necesita ser entrevistado"
        }
        console.log("al koder ya se le entrevisto", koderInformado)
        pagar(error, koderInformado);
    }, 1000)
}
  
const sePago = (koderEntrevistado, inscribir) => {
let error = null;
setTimeout(() => {
    koderEntrevistado.sePago = true;
    if(!koderEntrevistado.sePago) {
    error = "El koder necesita pagar"
    }
    console.log("El koder ya pago", koderEntrevistado);
    inscribir(error, koderEntrevistado)
}, 2000)
}
  
const inscribir = (koderPagado) => {
setTimeout(() => {
    koderPagado.seInscribio = true
    console.log("El koder ya se inscribio!!!!", koderPagado);
}, 4000)
}
  // Callbacks anonimas
darInformes(koder, (error, koderInformado) => {
    if(error) {
        console.log(error)
        return;
    }
// Koder ya esta informado
    seEntrevisto(koderInformado, (error, koderEntrevistado) => {
        if(error) {
        console.log(error)
        return;
        }
        // Koder ya esta entrevistado
        sePago(koderEntrevistado, (error, koderPagado) => {
        if(error) {
            console.log(error)
            return;
        }
        // Koder ya pago
        inscribir(koderPagado);
        })
    })
});
  
  /**
   * Ejercicio:
   * Pastel
   * 1 - Leer la receta
   * 2 - Conseguir los ingredientes
   * 3 - Preparacion de la masa
   * 4 - Hornear el pastel
   * 5 - Decorar el pastel
   */
  