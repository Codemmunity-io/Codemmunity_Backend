require('dotenv').config();
const express = require('express');
const db = require('./models');

const app = express();
const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);
app.get('/', (req, res) => {
  res.send('Hello world!').status(200);
});

const init = async () => {
  await db.sequelize.sync().catch((err) => {
      console.error(err);
  });
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
};

init();
