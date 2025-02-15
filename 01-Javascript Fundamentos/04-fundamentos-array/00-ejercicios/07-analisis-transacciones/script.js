// Exercise: transaction analysis

const transactions = [
  { id: 1, description: 'Supermercado', amount: -300 },
  { id: 2, description: 'Salario', amount: 3250 },
  { id: 3, description: 'Netflix', amount: -42 },
  { id: 4, description: 'Alquiler', amount: -1100 }
]

// 1. Calculete Total Balance
const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount)
console.log('Total Balance:', totalBalance)

// 2.Find the Largest Transaction (Income or Expense)
const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
  return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])
console.log('Largest Transaction:', largestTransaction);

// 3.Filter Purchase Transction

const purchaseTransction = transactions.filter(transaction => transaction.amount < 0)
console.log('Purchase Transction:', purchaseTransction)

// 4. Find a transaction by description
const specificTransaction = transactions.find(transaction => transaction.description === 'Supermercado')
console.log('Specific Transaction: ', specificTransaction)

// 5. Find the index of a transaction by amount
const indexTransactionWithAmount = transactions.findIndex(transaction => transaction.amount === -30)
console.log('Index Transaction With Amount:', indexTransactionWithAmount)

// 6. Update transction Descriptions
transactions.forEach(transaction => {
  if (transaction.amount < 0) {
    transaction.description = `Expense -> ${transaction.description}`
  } else {
    transaction.description = `Income -> ${transaction.description}`
  }
})

console.log('Updated Transaction:', transactions);