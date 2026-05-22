/*Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
    */
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// Filter all transactions that are of type "credit"
let credit=transactions.filter(transobj=>transobj.type=="credit")
console.log(credit)

// Create a new array containing only the transaction amounts
let amt=transactions.map(transobj=>transobj.amount)
console.log(amt)

// Calculate the total balance by summing all transaction amounts
let finalbalance=transactions.reduce((acc,transobj)=>acc+transobj.amount,0)
console.log(finalbalance)

// Retrieve the first transaction that is of type "debit"
let finddebit=transactions.find(transobj=>transobj.type=='debit')
console.log(finddebit)

// Find the index of the transaction where amount equals 10000
let index=transactions.findIndex(transobj=>transobj.amount==10000)
console.log(index)