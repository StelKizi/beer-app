import mongoose from 'mongoose';

const favoriteBeerExpandedSchema = mongoose.Schema({
  name: String,
  description: String,
  tagline: String,
  image: String /* url */,
  first_brewed: String,
  food_pairing: [String],
  isfavorite: {
    type: Boolean,
    default: true,
  },
});

const FavoriteBeerExpandedSchema = mongoose.model(
  'FavoriteBeerExpandedSchema',
  favoriteBeerExpandedSchema
);

export default FavoriteBeerExpandedSchema;
