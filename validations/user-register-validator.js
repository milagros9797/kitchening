const {check,body} = require("express-validator");
const { leerJSON } = require("../src/data");

module.exports = [
    check("name")
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({
            min: 2
        }).withMessage("Mínimo dos caracteres").bail()
        .isAlpha('es-ES',{ignore: ' '}).withMessage('Solo caracteres alfabéticos'),
    check("surname")
        .notEmpty().withMessage('El apellido es obligatorio').bail()
        .isLength({
            min: 2
        }).withMessage("Mínimo dos caracteres").bail()
        .isAlpha('es-ES',{ignore: ' '}).withMessage('Solo caracteres alfabéticos'),
    check("email")
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('El email tiene un formato inválido').bail()
        .custom((value, {req}) => { 
            const users = leerJSON('users');
            const user = users.find(user => user.email === value.trim())

            if(user) {
                return false
            }
            return true
        }).withMessage("El email ya se encuentra registrado"),
    check("password")
        .notEmpty().withMessage('La contraseña es obligatoria')
        .isLength({
            min: 6,
            max: 12
        }).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
    body("password2")
        .notEmpty().withMessage("Debe verificar la contraseña")
        .custom((value, {req}) => {
            if(value != req.body.password){
                return false 
            }
            return true 

        }).withMessage("Las contraseñas no coinciden"),
    check("remember")
        .notEmpty().withMessage("Debes aceptar los términos y condiciones")
]