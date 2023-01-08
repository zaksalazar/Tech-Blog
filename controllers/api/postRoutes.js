
const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// TODO - create a POST route for creating a new post
// This should be a protected route, so you'll need to use the withAuth middleware
router.post('/', withAuth, async (req, res) => {
  try {
    const post = await Post.create(req.body); 
    res.status(201).json(post);
  }
  catch (err) {
    res.status(400).json(err); 
  }
}); 


// TODO - create a PUT route for updating a post's title or body
// This should be a protected route, so you'll need to use the withAuth middleware
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatePost = await POST.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if(!updatePost) {
      res.status(404).json({
        message: 'No post found with this id' });
        return; 
      }
    res.status(200).json(updatePost); 
      } catch (err) {
        res.status(500).json(err);
      }
  }); 
  


// TODO - create a DELETE route for deleting a post with a specific id
// This should be a protected route, so you'll need to use the withAuth middleware
router.delete('/:id', withAuth, async (req, res) => {
  // delete a category by its `id` value
  try {
  const post = await Post.destroy ({
    where: {
    id: req.params.id
  }
  });

    if (!post) {
      res.status(404).json({
        message: 'No post found with this id' });
        return;
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }

}); 
module.exports = router;
