const fs = require("fs");
const filePath = './hola.txt'

// Function to read a file
const readFile = (fileRoute) => {
    fs.readFile(fileRoute, "utf8", (err, data) => {
        // Si hay error
        if(err) {
            console.log(err);
            return
        }

        // Si leyó bien el contenido
        console.log("Data", data);
    })
}

// readFile()


// Function to Write a File
const writeFile = () => {
    const data = 'Este texto será insertado en el archivo hola.txt x2'; 
    fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err){
            console.log(err);
            return
        } 
        console.log('The file has been saved!');
    });
}

// writeFile()


// Function to delete a file
const unlinkFile = () => {
    fs.unlink(filePath, (err) => {
        if (err){
            console.log(err)
            return
        }
        console.log(`${filePath} was deleted`)
    })
}

// unlinkFile()


// Function to copy a file

const copyFyle = () => {
    fs.copyFile(filePath, './archivoDeCopia.txt', 0, (err) => {
        if (err){
            console.log(err)
            return
        }
        console.log('El Archivo fue copiado')
    })
}

// copyFyle()



// Functio to create a directory

const makeDirectory = () => {
    // fs.mkdir(path[, options], callback)
}


// Function to append
const appendFile = () => {
    // fs.appendFile(path, data[, options], callback)
}



// Function to read a directory
const readDirectory = () => {
    fs.readdir('./directory', 'utf8', (err, files) => {
        if(err){
            console.log(err)
            return
        }
        console.log(files)
        files.forEach(element => {  
            let newRoute = `./directory/${element}`
            console.log(`Esta es la ruta que se leerá: ${newRoute}`)
            readFile(newRoute)
        });
    })
}


readDirectory()