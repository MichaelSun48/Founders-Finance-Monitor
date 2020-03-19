import xlsxwriter as xw
import datetime as dt
import os.path
from os import path
import csv



def initializeFiles():
    today = dt.datetime.now();
    expenseFilepath = ""
    quarter = ""
    if (today.month < 9):
        quarter = "SP" + str(today.year)[2:]
    else:
        quarter = "FA" + str(today.year)[2:]
    expenseFilepath = "FoundersExpenses" + quarter + ".csv"
    debtFilepath = "FoundersDebt" + quarter + ".csv"

    return expenseFilepath, debtFilepath

def addDebtRecord():
    print("Input the first and last name of the person we owe money to: ");
    name = str(raw_input()).title()
    print("Input how much we owe them: ")
    debt = float(raw_input())
    print("Input how much we have already paid them: ")
    paid = float(raw_input())
    print("Input how much money is pending paid to " + name + ": ")
    disbursed = float(raw_input())
    print("How urgently do they need to be repaid?")
    urgency = str(raw_input()).title()
    print("Any other notes: ")
    notes = str(raw_input())
    return name + "," + str(debt) + "," + str(paid) + "," + str(paid/debt) + "," + str(disbursed) + "," + str((paid + disbursed)/debt) + "," + urgency + ",," + notes + "\n"

def addExpenseRecord():
    print("Input the expense type: ")
    type = upper(str(raw_input()))
    print("Input the recipient of the expense, if applicable: ")
    recipient = str(raw_input()).title()
    print("Input the total cost of the expense: ")
    cost = float(raw_input())
    print("Input the account the expense was withdrawn from: ")
    account = str(raw_input())
    print("Input the reason for the reimbursement")

def getExistingAccounts():
    with open("ExistingAccounts.csv") as f:
        reader = csv.reader(f)
        data = list(reader)
    return data
    # while (existingAccounts.nextLine() != null):
    #     print(existingAccounts.nextLine())

expenseFilepath, debtFilepath = initializeFiles()
expenseFile = open(expenseFilepath, "w+")
debtFile = open(debtFilepath, "w+")
getExistingAccounts()
command = upper(str(raw_input()))

while (command != "EXIT" or command != "QUIT"):
    print("Input a command: (Add ) ")


# f.write(name + "," + debt + "," + urgency + "," + notes + "\n")
#
# f = open("debtDataset.txt", "r");
# lbl = f.readlines()
# for x in lbl:
#     x.split(',');
#
#
#
# wb = xw.Workbook("FoundersDebt.xlsx")
# wsHello = wb.add_worksheet(name="Hello")
# ws2 = wb.add_worksheet()
#
# wsHello.write('A1', "Hello World")
# wsHello.write(1, 0, "Goodbye")
#
# # Name, Amount Owed, Debt Paid Currently, Percentage Paid Currently, Debt Being Processed, Percentage Paid Including Processed, Timeline, Notes
#
#
#
# wb.close()
