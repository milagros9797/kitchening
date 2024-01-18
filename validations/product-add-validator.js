const {check,body} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('address')
        .notEmpty().withMessage('La dirección es requerida'),
    check('category')
        .notEmpty().withMessage('La categoria es obligatoria'),
    body('mainImage')
        .custom((value,{req})=> {
            if(!req.file){
                return false
            }
            return true
        }).withMessage('Se requiere una imagen'),
    check('description')
        .notEmpty().withMessage('La descripción es obligatoria'),
]