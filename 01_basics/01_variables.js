const accountId = 145482
let accountName = 'John Doe'
var accountBalance = 1000.50

let accoutType

// accountId = 54321 // This will throw an error because accountId is a constant

accountName = 'Jane Smith' // This is allowed because accountName is declared with let
accountBalance = 2000.75 // This is allowed because accountBalance is declared with var

console.table([accountId,accountName,accountBalance,accoutType])