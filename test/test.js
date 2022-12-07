const axios = require("axios");
const chai = require("chai");

const { empleado } = require("../src/db/models");

const { assert } = chai;


describe("Empleados ABM", async () => {


    it("crea un empleado", function (done) {
        axios({
            method: "post",
            url: "http://localhost:5555/empleados",
            data: {
                nombre: "Roberto",
                apellido: "Sanchez",
                dni: "12340320"
            }
        })
            .then((res) => {
                assert.equal(res.status, 201);
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    after(function (done) {
        empleado.destroy({
            where: {
                dni: "120340320",
            },
        }).then(() => {
            done();
        });
    });

});