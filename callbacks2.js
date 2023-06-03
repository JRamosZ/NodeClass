const pastel = {
    seLeyoReceta: false,
    seConseguieronIngredientes: false,
    sePreparoMasa: false,
    seHorneoPastel: false,
    seDecoroPastel: false
}

const leerReceta = (pastel, conseguirIngredientes) => {
    let error = null;
    setTimeout(() => {
        pastel.seLeyoReceta = true;
        if (!pastel.seLeyoReceta) {
            error = 'Se necesita leer la receta'
        }
        conseguirIngredientes(error, pastel)
    }, 2000)
}

const conseguirIngredientes = (pastel, prepararMasa) => {
    console.log('Receta leida')
    let error = null;
    setTimeout(() => {
        pastel.seConseguieronIngredientes = true;
        if(!pastel.seConseguieronIngredientes){
            error = 'Se necesitan conseguir los ingredientes'
        }
        prepararMasa(error, pastel)
    }, 1000)
}

const prepararMasa = (pastel, hornearPastel) => {
    console.log('Ingredientes conseguidos')
    let error = null;
    setTimeout(() => {
        pastel.sePreparoMasa = true;
        if (!pastel.sePreparoMasa){
            error = 'Se necesita preparar la masa'
        }
        hornearPastel(error, pastel)
    }, 2000)
}

const hornearPastel = (pastel, decorarPastel) => {
    console.log('Masa preparada')
    let error = null
    setTimeout(()=> {
        pastel.seHorneoPastel = true
        if (!pastel.seHorneoPastel){
            error = 'Se necesita hornear el pastel'
        }
        decorarPastel(error, pastel)
    }, 4000)
}

const decorarPastel = (pastel) => {
    console.log('Pastel horneado')
    setTimeout(() => {
        pastel.seDecoroPastel = true;
    }, 5000)
    console.log('Pastel decorado')
}

leerReceta(pastel, (error, recetaLeida) => {
    if (error) {
        console.log(error);
        return;
    }
    conseguirIngredientes (recetaLeida, (error, ingredienteConseguidos) => {
        if (error) {
            console.log(error);
            return;
        }
        prepararMasa(ingredienteConseguidos, (error, masaPreparada) => {
            if (error) {
                console.log(error);
                return
            }
            hornearPastel(masaPreparada, (error, pastelHorneado) => {
                if(error) {
                    console.log(error)
                }
                decorarPastel(pastelHorneado)
            })
        })
    })
})