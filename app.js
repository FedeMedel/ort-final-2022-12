const express = require('express')
const app = express()
require('dotenv').config()
const { where, Op } = require("sequelize");
// use json
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const { empleado } = require("./src/db/models/");

app.post("/empleados", async (req, res) => {
    const { nombre, apellido, dni } = req.body

    try {

        valido = validarEmpleado(req)

        if (valido) {
            nuevoEmpleado = await empleado.create({
                nombre,
                apellido,
                dni,
                fechaIngreso: new Date(),
            });
            res.status(201).json(nuevoEmpleado)
        } else {
            throw new Error("datos invalidos")
        }
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})


/*Hacer un endpoint que permita consultar únicamente 
con una búsqueda por query
string. Es decir, si el query string está
 vacío no habrá resultados. Si se busca algún
término deberá traer las coincidencias, ya
 sea en el nombre, el apellido o el DNI.*/

app.get("/empleados:stringBusqueda", async (req, res) => {
    const busqueda = req.params.stringBusqueda;

    try {
    if (busqueda != null && busqueda != "") {
        const empleadosBuscados = await empleados.findAll({
            where: {
                [Op.or]: [
                    {
                        nombre: {
                            [Op.like]: busqueda
                        }
                    },
                    {
                        apellido: {
                            [Op.like]: busqueda
                        }
                    }
                    ,
                    {
                        dni: {
                            [Op.like]: busqueda
                        }
                    }
                ]
            }
        })
    }
            res.status(200).json(empleadosBuscados)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})







const validarEmpleado = (req) => {
    valid = false

    const { nombre, apellido, dni } = req.body

    if (nombre != null && apellido != null && dni != null) {

        dniValido = dni >= 1000000 && dni <= 70000000
        nombreValido = nombre.length <= 50 && nombre.length >= 2
        apellidoValido = apellido.length <= 50 && apellido.length >= 2

        console.log(nombre.length)

        console.log(nombreValido)

        valid = dniValido && nombreValido && apellidoValido
    }


    return valid;
}















app.listen(process.env.PORT)