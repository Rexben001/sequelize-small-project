import express from 'express';
import bodyParser from 'body-parser';
import { User, Comment } from './models';
import { read } from 'fs';

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
  Comment.findAll({
    attributes: ['post', 'reaction'],
    where: {UserId: req.params.id},
    include: [{
      model: User,
      attributes: ['username', 'password'],
  }]  
  })
    .then(comment => res.json({ comment }))
    .catch(e => console.log(e))
});

app.get('/api/user/:id', (req, res) => {
  User.findAll({
    where: {id: req.params.id},
    include: [{
      model: Comment
    }]
  })
  .then(result => res.json({result  }))
})

app.listen(3002, () => {
    console.log('Working');
  });