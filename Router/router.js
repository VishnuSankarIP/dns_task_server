const express=require('express')
const router=express.Router()
const menuController=require('../controller/menu-controller')
const menuItemController=require('../controller/menu-item-controller')


router.post('/menu',menuController.createMenu)
router.get('/get-menu',menuController.getAllMenu)

router.post('/item',menuItemController.addMenuItem)
router.get('/get-items',menuItemController.getMenuItems)


module.exports=router