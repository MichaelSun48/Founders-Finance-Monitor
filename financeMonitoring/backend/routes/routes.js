let express = require('express');
let models = require('../models/models');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let router = require('express').Router();


let Expense = models.Expense;
let Account = models.Account;
let Debt = models.Debt;
let Microgrants = models.Microgrants;

mongoose.connection.on('connected', function() {
  console.log('Success: connected to MongoDb!');
});

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI);

module.exports = () => {

  router.get('/', (req, res) => {

  })

  router.get('/viewExpenses', (req, res) => {
    Expense.find({}, (err, expenses) => {
      if (err) {
        console.log("Error while finding all EXPENSES", err);
        res.status(500).json({success: false});
      } else {
        console.log("Successfully found all EXPENSES");
        res.json(expenses);
        res.status(200).json({success: true});
      }
    })
  })

  router.get('/viewExpenses/:expenseID', (req, res) => {
    let expenseID = req.params.expenseID;
    Expense.findById(expenseID, (err, expense) => {
      if (err) {
        console.log("Error while finding EXPENSE with id: " + expenseID, err);
        res.status(500).json({success: false});
      } else {
        console.log("Successfully found EXPENSE with id: " + expenseID);
        res.json(expense);
        res.status(200).json({success: true});
      }
    })
  })

  router.get('/viewDebtRecords', (req, res) => {
    Debt.find({}, (err, debts) => {
      if (err) {
        console.log("Error while finding all DEBT RECORDS", err);
        res.status(500).json({success: false});
      } else {
        console.log("Successfully found all DEBT RECORDS");
        res.json(debts);
        res.status(200).json({success: true});
      }
    })
  })

  router.get('/viewDebtRecords/:debtID', (req, res) => {
    let debtID = req.params.debtID;
    Debt.findById(debtID, (err, debt) => {
      if (err) {
        console.log("Error while finding DEBT RECORD with id: " + debtID, err);
        res.status(500).json({success: false})
      } else {
        console.log("Successfully found DEBT RECORD with id: " + debtID);
        res.json(debt);
        res.status(200).json({success: true});
      }
    })
  })

  router.get('/viewAccounts', (req, res) => {
    Account.find({}, (err, accounts) => {
      if (err) {
        console.log("Error while finding all ACCOUNTS", err);
        res.status(500).json({success: false});
      } else {
        console.log("Successfully found all ACCOUNTS");
        res.json(accounts);
        res.status(200).json({success: true});
      }
    })
  })

  router.post('/newExpense', (req, res) => {
    let newExpense = new Expense({
      expenseType: req.body.expenseType,
      recipient: req.body.recipient,
      totalCost: req.body.totalCost,
      paymentDate: req.body.paymentDate,
      accountWithdrawn: req.body.accountWithdrawn,
      accountCapitalBeforeExpense: accountCapitalBeforeExpense
    })

    newExpense.save()
    .then(() => console.log("New EXPENSE saved"))
    .catch((err) => console.log("Error while saving new EXPENSE",  err))
  })

  router.post('/updateExpense/:expenseID', (req, res) => {
    let expenseID = req.params.debtID;
    let updatedExpense = {
      expenseType: req.body.expenseType,
      recipient: req.body.recipient,
      totalCost: req.body.totalCost,
      paymentDate: req.body.paymentDate,
      accountWithdrawn: req.body.accountWithdrawn,
      accountCapitalBeforeExpense: accountCapitalBeforeExpense
    }
    Debt.findByIdAndUpdate(expenseID, updatedExpense, (err, result) => {
      if (err) {
        console.log("Failed while finding EXPENSE with id: " + expenseID, error);
        res.status(500).json({success: false});
      }
      else {
        console.log("Successfully updated EXPENSE with id: " + expenseID, result);
        res.status(200).json({sucess: true})
      }
    })
  })

  router.post('/newDebtRecord', (req, res) => {
    let newDebtRecord = new Debt({
      creditor: req.body.creditor,
      amountOwed: req.body.amountOwed,
      pendingPaid: req.body.pendingPaid,
      updates: req.body.updates
    })

    newDebtRecord.save()
    .then(() => console.log("New DEBT RECORD saved"))
    .catch((err) => console.log("Error while saving new DEBT RECORD: " + err))
  })

  router.post('/updateDebtRecord/:debtID', (req, res) => {
    let debtID = req.params.debtID;
    let updatedDebtRecord = {
      creditor: req.body.creditor,
      amountOwed: req.body.amountOwed,
      pendingPaid: req.body.pendingPaid,
      updates: req.body.updates
    }
    Debt.findByIdAndUpdate(debtID, updatedDebtRecord, (err, result) => {
      if (err) {
        console.log("Failed while finding DEBT RECORD with id: " + debtID, error);
        res.status(500).json({success: false});
      }
      else {
        console.log("Successfully updated DEBT RECORD with id: " + debtID);
        res.status(200).json({sucess: true})
      }
    })
  })

  router.post('/overrideAccountInformation', (req, res) => {

  })

  return router;
}
