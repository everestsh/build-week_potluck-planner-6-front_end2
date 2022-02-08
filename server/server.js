const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let products = [
    {
        food_name: 'Pretty, Yummy Fruit Salad',
        food_id: 0,
        imageUrl:
        'https://takethemameal.com/files_images/recipes/recipes/300/77.jpg',
        food_description:
          "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
     },
      {
        food_name: 'Baked Sweet Potatoes',
        food_id: 1,
        imageUrl:
        "https://takethemameal.com/files_images/recipes/recipes/300/10.jpg",
        food_description:
          "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
      },
      {
        food_name: 'Roasted Brussel Sprouts',
        food_id: 2,
        imageUrl:  "https://takethemameal.com/files_images/recipes/recipes/300/62.jpg",
        food_description:
          "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
     },
     {
        food_name: "Jamie Oliver's Best Pasta Salad",
        food_id: 3,
        imageUrl:
        "https://takethemameal.com/files_images/recipes/recipes/300/84.jpg",
        food_description:
          "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
     },
      {
        food_name: 'Honey Glazed Carrots',
        food_id: 4,
        imageUrl:
        "https://takethemameal.com/files_images/recipes/recipes/300/26.jpg",
        food_description:
          "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
      },
      {
        food_name: 'Fruit Salsa with Cinnamon Tortilla Chips',
        food_id: 5,
        imageUrl: "https://takethemameal.com/files_images/recipes/recipes/300/75.jpg",
        food_description:
          "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
     },
   {
    food_name: 'Fiesta Bean Salad',
    food_id: 6,
    imageUrl: "https://takethemameal.com/files_images/recipes/recipes/300/45.jpg",
    food_description:
    "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
 },
 {
  food_name: 'Green Beans Almondine',
  food_id: 7,
  imageUrl: "https://takethemameal.com/files_images/recipes/recipes/300/25.jpg",
  food_description:
  "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
},
{
  food_name: 'Traditional Southern Deviled Eggs',
  food_id: 8,
  imageUrl: "https://takethemameal.com/files_images/recipes/recipes/300/91.jpg",
  food_description:
  "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
},
{
  food_name: 'Fruit Salad for a Crowd',
  food_id: 9,
  imageUrl: "https://takethemameal.com/files_images/recipes/recipes/300/87.jpg",
  food_description:
  "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
},
{
  food_name: 'Old Fashioned Potato Salad',
  food_id: 10,
  imageUrl: "https://takethemameal.com/files_images/recipes/recipes/300/86.jpg",
  food_description:
  "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
},
{
  food_name: 'Apple Baked Bean Casserole',
  food_id: 11,
  imageUrl: "https://takethemameal.com/files_images/recipes/recipes/300/74.jpg",
  food_description:
  "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
},
];

app.use(bodyParser.json());

app.use(cors());

let nextId = 7;

function getNextId() {
  return nextId++;
}

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'lambda' && password === 'school') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.post('/api/logout', authenticator, (req, res) => {
  req.loggedIn = false;
  res.status(200).json({
    payload: token
  });
});

app.get('/api/products', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(products);
  }, 1000);
});

app.get('/api/products/:id', authenticator, (req, res) => {
  const product = products.find(f => f.food_id == req.params.id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/products', authenticator, (req, res) => {
  const product = { id: getNextId(), ...req.body };

  products = [...products, product];

  res.send(products);
});

app.get('/api/', (req, res) => {
  res.status(200).json({status: "served"});
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
