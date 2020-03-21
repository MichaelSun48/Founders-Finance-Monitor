var express = require('express');
var models = require('../models/models');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Expense = models.Expense;
var Account = models.Account;
var Debt = models.Debt;
var Microgrants = models.Microgrants;

mongoose.connection.on('connected', function() {
  console.log('Success: connected to MongoDb!');
});

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI);

module.exports = (passport) => {

  router.get('/', (req, res) => {

  })

  router.get('/viewExpenses', (req, res) => {

  })

  router.get('/viewExpenses/:expenseID', (req, res) => {

  })

  router.get('/newExpense', (req, res) => {

  })

  router.get('/viewDebtRecords', (req, res) => {

  })

  router.get('viewDebtRecords/debtID', (req, res) => {

  })

  router.get('/viewAccounts', (req, res) => {

  })


  router.post('/newExpense/:expenseID', (req, res) => {

  })

  router.post('/updateExpense/:expenseID', (req, res) => {

  })

  router.post('/newDebtRecord/:expenseID', (req, res) => {

  })

  router.post('/updateDebtRecord/:debtID', (req, res) => {

  })

  router.post('/overrideAccountInformation', (req, res) => {
    
  })


}
