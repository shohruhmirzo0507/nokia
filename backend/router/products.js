const express = require("express")
const router = express.Router()
const {Products, validateProduct} = require("../models/productSchema")

router.get("/", async(req, res)=>{
    try{
        const {category} = req.query
        const products = await Products.find(category ? {category} : null).sort({_id: -1})
        res.status(200).json({ 
            variant: "succes",
            msg: "all product were found", 
            innerData: products 
        })
    }
    catch{
        res.status(500).json({
            variant: "error",
            msg: "server error", 
            innerData: []
        })
    }
})

router.post("/", async(req, res)=>{
    try{
        const {error} = validateProduct(req.body)
        if(error){
            return res.status(400).json({
                variant: "error", 
                msg: error.details[0].message,
                innerData: null
            })
        }
        const newProducts = await Products.create(req.body)
        res.status(201).json({
            variant: "success",
            msg: "product vas created",
            innerData: newProducts
        })
    }
    catch{
        res.status(500).json({
            variant: "success",
            msg: "server error",
            innerData: null
        })
    }

    
})

module.exports = router