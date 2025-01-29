const MenuItem=require('../models/menuitem_model')
const Menu=require('../models/menu_model')
exports.addMenuItem = async (req, res) => {
    const { name, description, price, menuId } = req.body;
  
    try {
      const menu = await Menu.findById(menuId);
      if (!menu) return res.status(404).json({ success: false, message: 'Menu not found' });
  
      const menuItem = new MenuItem({ name, description, price, menu: menuId });
      await menuItem.save();
  
      menu.items.push(menuItem._id);
      await menu.save();
  
      res.status(200).json({ success: true, menuItem });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  // Get all items for a specific menu
  exports.getMenuItems = async (req, res) => {
    try {
      const menuItems = await MenuItem.find().populate('menu', 'name description'); 
  
      if (menuItems.length === 0) {
        return res.status(404).json({ success: false, message: 'No menu items found' });
      }
  
      res.status(200).json({ success: true, menuItems });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  

