const Gallery = require('../models/Gallery.model')

module.exports.galleryController = {
    addPhoto: async (req, res) => {
        try {
          const data = await Gallery.create({
            image: req.file.path,
          });
    
         return res.json(data);
        } catch (err) {
          return res.json({ error: err.message });
        }
      },
    
      getImages: async (req, res) => {
        try {
          const data = await Gallery.find();
          return res.json(data);
        } catch (err) {
          return res.json({ error: err.message });
        }
      },

      deleteImage: async (req, res) => {
        try {
          const data = await Gallery.findById(req.params.id);
          await data.remove()
          return res.json(data);
        } catch (err) {
         return res.json({ error: err.message });
        }
      },
}