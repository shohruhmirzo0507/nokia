const { Schema, model } = require("mongoose")
const Joi = require("joi")

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
   

})

const Products = model("products", productSchema)

const validateProduct = (body) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        url: Joi.string().required(),
        desc: Joi.string().required(),
    })
    return schema.validate(body)
}

module.exports = { Products, validateProduct }