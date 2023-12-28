const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const {username} = req.body;

    const existingUser = await User.findOne({where:{username}});

    if (existingUser){
      return res.status(400).json({error: 'Username is already in use'})
    }

    const newUser = await User.create({username});

    res.status(201).json(newUser)
  } catch (error) {
      console.error('Error creating a user:', error);
      res.status(500).json({error: 'Internal Server Error'})
  }
};