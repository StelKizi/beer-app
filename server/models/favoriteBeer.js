import mongoose from 'mongoose';

const beerSchema = mongoose.Schema({
  name: String,
  description: String,
  tagline: String,
  image: String /* url */,
  isfavorite: {
    type: Boolean,
    default: true,
  },
});

const BeerSchema = mongoose.model('BeerSchema', beerSchema);

export default BeerSchema;
