import BeerSchema from '../models/favoriteBeer.js';
/* import favoriteBeerExpandedSchema from '../models/favoriteBeerExpandedSchema.js'; */

export const getFavorites = async (req, res) => {
  try {
    const favoriteBeers = await BeerSchema.find();

    res.status(200).json(favoriteBeers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createFavorite = async (req, res) => {
  const beerPost = req.body;
  const newBeerPost = new BeerSchema(beerPost);
  try {
    await newBeerPost.save();

    //Successfully created
    res.status(201).json(newBeerPost);
  } catch (error) {}
  //Conflict
  res.status(409).json({ message: error.message });

  //https://www.restapitutorial.com/httpstatuscodes.html
};
