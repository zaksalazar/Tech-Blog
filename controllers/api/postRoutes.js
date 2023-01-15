
const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// TODO - create a POST route for creating a new post
// This should be a protected route, so you'll need to use the withAuth middleware
router.post('/', withAuth, async (req, res) => {
  const body = req.body
  try {
    const post = await Post.create({ body, userid: req.session.userid }); 
    console.log ('My post' , post)
    res.json(post); 
  } 
  catch (err) {
    res.status(400).json(err); 
  }
}); 


// TODO - create a PUT route for updating a post's title or body
// This should be a protected route, so you'll need to use the withAuth middleware
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatePost = await Post.update({ body: req.body,},
      {
      where: {
        id: req.params.id
      }
    });
    if(!updatePost) {
      res.status(404).json({
        message: 'No post found with this id'  + req.params.id});
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
  const deletePost = await Post.destroy ({
    where: {
    id: req.params.id
  }
  });

    if (!deletePost) {
      res.status(404).json({
        message: 'No post found with this id' });
        return;
    }

    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }

}); 
module.exports = router;
