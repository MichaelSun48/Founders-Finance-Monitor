require('dotenv').config('../env.sh');


console.log(process.env.MONGODB_URI)
var mongoose = require('mongoose')
var models = require('./models/models');

var Expense = models.Expense;
var Account = models.Account;
var Debt = models.Debt;
var Microgrants = models.Microgrants;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.on('connected', function() {
  console.log('Success: connected to MongoDb!');
});



var newExpense = new Expense({
  expenseType: "Test Expense",
  recipient: "Me",
  totalCost: 10000,
  paymentDate: new Date(),
  accountWithdrawn: "rso",
  accountCapitalBeforeExpense: 100000
})
newExpense.save(function(error, success){
  if (error){
    console.log("Failed to save new expense", error);
  } else {
    console.log("Sucessfully saved new expense");
  }
})
