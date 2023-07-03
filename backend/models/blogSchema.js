const mongoose = require("mongoose")
const Joi = require("joi")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    }
})

const Blogs = mongoose.model("blogs", blogSchema)
const validateBlogs = (body) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        desc: Joi.string().required()
    })
    return schema.validate(body)
}

module.exports = { Blogs, validateBlogs }