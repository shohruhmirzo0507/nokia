const express = require("express"),
    { Blogs, validateBlogs } = require("../models/blogSchema"),
    router = express.Router()

router.get("/", async (req, res) => {
    try {
        const blogs = await Blogs.find().sort({_id: -1})
        res.status(200).json({
            state: true,
            msg: "All blogs were founded",
            innerData: blogs
        })
    }
    catch {
        res.status(500).json({
            state: false,
            msg: "blogs were not founded",
            innerData: []
        })
    }
})

router.post("/", async (req, res) => {
    try {
        const { error } = validateBlogs(req.body)
        if (error) return res.status(500).json(error.details[0].message)
        const newBlogs = await Blogs.create(req.body)
        res.status(201).json({
            state: true,
            msg: "blog was created",
            innerData: newBlogs
        })
    }
    catch {
        res.status(500).json({
            state: false,
            msg: "blogs can not be created",
            innerData: null
        })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        await Blogs.findByIdAndRemove(id)
        res.status(200).json({
            state: true,
            msg: "Succesfully deleted",
            innerData: null
        })
    }
    catch {
        res.status(500).json({
            state: false,
            msg: "blogs can not be deleted",
            innerData: null
        })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        await Blogs.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            state: true,
            msg: "succesfully edited",
            innerData: req.body
        })
    }
    catch {
        res.status(500).json({
            state: false,
            msg: "Blog can not be edited",
            innerData: null
        })
    }
})

module.exports = router