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
            if(!req.files.mainImage){
                return false
            }
            return true
        }).withMessage('Se requiere una imagen'),
    check('description')
        .notEmpty().withMessage('La descripción es obligatoria').bail()
        .isLength({
            min: 20,
            max: 500

        }).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
]