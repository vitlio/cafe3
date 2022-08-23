const menuService = require("../services/menu.service.js")

class MenuControllers{
    async getEntireMenu(req, res){
        try{
            const entireMenu = await menuService.getAll()
            return res.status(200).json(entireMenu)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    }

    async getMenuItem(req, res){
        try{
            const { id } = req.params
            const item = await menuService.getOne(id)
            return res.status(200).json(item)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    }

    async createMenuItem(req, res){
        try{
            const newItem = await menuService.create(req.body)
            return res.status(200).json(newItem)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    }

    async updateMenuItem(req, res){
        try{
            const updatedItem = await menuService.update(req.body)
            return res.status(200).json(updatedItem)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    }

    async deleteMenuItem(req, res){
        try{
            const deletedItem = await menuService.delete(req.params.id)
            return res.status(200).json(deletedItem)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    }
}

module.exports = new MenuControllers()