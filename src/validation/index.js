import Joi from "@hapi/joi";

export const userValidation = (data,params=[])  => {  
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    if(!params.length){ 
        for (let i = 0; i < params.length; i++) {
            const forDelete = params[i];
            delete schema[forDelete];
        }
    }
   
    
    return schema.validate(data)
}
