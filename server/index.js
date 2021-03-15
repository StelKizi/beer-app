import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const PORT = process.env.PORT || 5000;

import favoritesRoutes from './routes/favorites.js';

const app = express();
app.use(express.json({ extended: true }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://stella-admin:bBZSCaR5ot5J7S8I@cluster0.wkvqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log('Server running on port: ', PORT))
  )
  .catch(err => console.log(err.message));

mongoose.set('useFindAndModify', false);

//require routes
app.use('/favorites', favoritesRoutes);
