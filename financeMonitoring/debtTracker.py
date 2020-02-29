import xlsxwriter as xw

f = open("debtDataset.txt", "a");


print("Please input the first and last name of the person we owe money to: ");
name = str(raw_input()).title()
print("Please input how much we owe them: ")
debt = raw_input()
print("Please input how much we have already paid them: ")
paid = raw_input()
print("If a disbursement has been filed for them, please input the amount: ")
disbursed = raw_input()
print("How urgently do they need to be repaid?")
urgency = str(raw_input()).title()
print("Any other notes: ")
notes = raw_input()

f.write(name + "," + debt + "," + urgency + "," + notes + "\n")

f = open("debtDataset.txt", "r");
lbl = f.readlines()
for x in lbl:
    x.split(',');



wb = xw.Workbook("FoundersDebt.xlsx")
wsHello = wb.add_worksheet(name="Hello")
ws2 = wb.add_worksheet()

wsHello.write('A1', "Hello World")
wsHello.write(1, 0, "Goodbye")

# Name, Amount Owed, Debt Paid Currently, Percentage Paid Currently, Debt Being Processed, Percentage Paid Including Processed, Timeline, Notes



wb.close()
