const Post = require('../models/post');

exports.createPost = async (req, res) => {
  try {
    const { postName, description, options } = req.body;
    const userId = req.user.id; // Suponiendo que el usuario está autenticado y su información está disponible en req.user

    const newPost = await Post.create({
      postName,
      description,
      options,
      userId,
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el posteo' });
  }
};

exports.addComment = async (req, res) => {
    try {
      const { postId, comment } = req.body;
  
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Posteo no encontrado' });
      }
  
      post.comments.push(comment);
      await post.save();
  
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al agregar el comentario' });
    }
  };

  exports.addOptions = async (req, res) => {
    try {
      const { postId, newOptions } = req.body;
  
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Posteo no encontrado' });
      }
  
      post.options = post.options.concat(newOptions);
      await post.save();
  
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al agregar las opciones' });
    }
  };
  
  
  exports.vote = async (req, res) => {
    try {
      const { postId, option } = req.body;
  
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Posteo no encontrado' });
      }
  
      // Verifica si la opción existe en las opciones del posteo antes de votar
      if (!post.options.includes(option)) {
        return res.status(400).json({ error: 'Opción no válida para votar' });
      }
  
      // Realiza el voto
      post.votes = post.votes || {};
      post.votes[option] = (post.votes[option] || 0) + 1;
  
      await post.save();
  
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al votar en el posteo' });
    }
  };
  
  exports.deletePost = async (req, res) => {
    try {
      const postId = req.params.postId;
      const userId = req.user.id; // Suponiendo que el usuario está autenticado y su información está disponible en req.user
  
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Posteo no encontrado' });
      }
  
      // Verifica si el usuario actual es el propietario del posteo
      if (post.userId !== userId) {
        return res.status(403).json({ error: 'No tienes permisos para borrar este posteo' });
      }
  
      await post.destroy();
  
      res.json({ message: 'Posteo borrado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al borrar el posteo' });
    }
  };
  