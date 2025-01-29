const Menu=require('../models/menu_model')

exports.createMenu = async (req, res) => {
    const { name, description } = req.body;
  
    try {
      const menu = new Menu({ name, description });
      await menu.save();
      res.status(200).json({ success: true, menu });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };


exports.getAllMenu = async (req, res) => {
    try {
        const menu = await Menu.find().populate({
            path: 'items', 
            select: 'name description price', 
        });

        res.status(200).json({ success: true, menu });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
