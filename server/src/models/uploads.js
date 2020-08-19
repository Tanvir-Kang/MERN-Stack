/* eslint linebreak-style: ["error", "windows"] */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = {
  require: true,
  type: String,
};

const optionalString = {
  require: false,
  type: String,
};

const optionalNumber = {
  required: false,
  type: Number,
};

const uploadSchema = new Schema({
  make: requiredString,
  model: requiredString,
  year: optionalNumber,
  service: optionalString,
  images: [{
    type: String,
  }],
  created_at: { type: Date, default: Date.now },
});

const UploadEntry = mongoose.model('uploadEntry', uploadSchema);

module.exports = {
  UploadEntry,
};

/*
MONGOOSE NOTES:
By default mongoose adds an _ID property to schemas
to create a model from our schema we are converting our schema to
models by calling mongoose.model
*/
