
const router = require('express').Router();
const { Comment, User } = require('../../models/');
const withAuth = require('../../utils/auth');

// TODO - create a POST route for creating a new comment
// This should be a protected route, so you'll need to use the withAuth middleware
router.post('/createComment/:id', withAuth, async (req, res) => {
  const body = req.body
  try{
    const comment = await Comment.create({...body, userId: req.user.id,});
    res.json(addComment); 
  }
  catch (err) {
    res.status(400).json(err);
  }
}); 

router.get('/', withAuth, async (req, res) => {
  try {
      const commentData = await Comment.findAll({
          include : [User],
      });
      const postComments = commentData.map((comment) => comment.get({ plain: true }));
      console.log(postComments)
      res.render('single-post', { postComments, loggedIn: req.session.loggedIn});
  } catch (err) {
      res.status(400).json(err);
      }
  });

module.exports = router;

