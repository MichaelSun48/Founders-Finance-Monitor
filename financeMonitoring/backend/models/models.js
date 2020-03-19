var mongoose = require('mongoose');
var connect = process.env.MONGODB_URI;

mongoose.connect(connect);


var expenseSchema = new mongoose.Schema({
  expenseType: {
    type: String,
    required: true,
    convert
  },
  recipient: {
    type: String,
    required: true
  },
  totalCost: {
    type: String,
    required: true
  },
  paymentDate: {
    type: Date,
    required: true
  },
  accountWithdrawn: {
    type: String,
    required: true
  }
})
