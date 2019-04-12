import express from 'express';
import bodyParser from 'body-parser';
import { User, Comment, Emoji } from './models';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/api/user', (req, res) => {
  User.create(req.body)
    .then(user => res.json({ user }))
  .catch(e => console.error(e))
});

app.post('/api/comment', (req, res) => {
  Comment.create(req.body)
    .then(comment => res.json({ comment }))
    .catch(e => res.json({error: e}))
});

app.get('/api/comment/:id', (req, res) => {
  // attributes is used to limit the coumn names to return
  // include is used for join
  // make sure your foreign key to be the name of your model name plus Id e.g UserID
  Comment.findById(   req.params.id,
    {
    attributes: ['post', 'reaction'],
    include: [{
      model: User,
      attributes: ['username', 'password'],
  }]  
  })
    .then(comment => res.json({ comment }))
    .catch(e => console.log(e))
});

//Get emojois and posts from a particu;ar user
app.get('/api/user/:id', (req, res) => {
  User.findAll({
    attributes: ['username'],
    where: { id: req.params.id },
    include: [{
      model: Comment,
      attributes: ['post', 'reaction'],
    },
      {
        model: Emoji,
        attributes: ['emoji']
    }]
  })
    .then(result => res.json({ result }))
    .catch(e => console.log(e))
});

app.post('/api/emoji', (req, res) => {
  Emoji.create(req.body)
    .then(emoji => res.json({ emoji }))
    .catch(e => res.json({error: e}))
});

// app.get('/api/emoji', (req, res) => {

// })

app.listen(3002, () => {
    console.log('Working');
  });