const boom  = require('@hapi/boom');

function validatorHandler(schema, property){
  return (req, res, next) =>{
    const data = req[property];//Para obtener la información de forma dinámica
    const { error } = schema.validate(data,{ abortEarly:false });
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}


module.exports = validatorHandler;
