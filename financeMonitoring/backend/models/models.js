var mongoose = require('mongoose');


var expenseSchema = new mongoose.Schema({
  expenseType: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  recipient: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  totalCost: {
    type: Number,
    required: true
  },
  paymentDate: {
    type: Date,
    required: true
  },
  accountWithdrawn: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  accountCapitalBeforeExpense: {
    type: Number,
    required: true,
  }
}, {timestamps: true})

var accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  capital: {
    type: Number,
    required: true,
  }
}, {timestamps: true})

var debtSchema = new mongoose.Schema({
  creditor: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  amountOwed: {
    type: Number,
    requried: true
  },
  pendingPaid: {
    type: Number,
    required: true
  },
  updates: {
    type: String,
    trim: true,
    required: false
  }
}, {timestamps: true})

var micrograntsSchema = mongoose.Schema({
  orgName: {
    type: String,
    trim: true,
    required: true
  },
  totalMicrogrant: {
    type: Number,
    required: true
  },
  amountPaid: {
    type: Number,
    required: true
  }
}, {timestamps: true})

var Expense = mongoose.model('Expense', expenseSchema)
var Account = mongoose.model('Account', accountSchema)
var Debt = mongoose.model('Debt', debtSchema)
var Microgrants = mongoose.model('Microgrant', micrograntsSchema)

module.exports = {
  Expense: Expense,
  Account: Account,
  Debt: Debt,
  Microgrants: Microgrants
}
