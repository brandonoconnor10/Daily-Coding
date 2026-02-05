// 1. Define the BankAccount class
class BankAccount {
  constructor() {
    this.balance = 0;              // Default balance
    this.transactions = [];        // Empty array for transactions
  }

  // 2. Deposit method
  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  // 3. Withdraw method
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  // 4. Check balance method
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  // 5. List all deposits
  listAllDeposits() {
    const deposits = this.transactions
      .filter(tx => tx.type === "deposit")
      .map(tx => tx.amount);
    return `Deposits: ${deposits.join(",")}`;
  }

  // 6. List all withdrawals
  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(tx => tx.type === "withdraw")
      .map(tx => tx.amount);
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// 7. Create an instance named myAccount
const myAccount = new BankAccount();

// Perform at least five transactions (≥2 deposits, ≥2 withdrawals, balance > 100)
console.log(myAccount.deposit(200));   // Deposit #1
console.log(myAccount.deposit(50));    // Deposit #2
console.log(myAccount.withdraw(30));   // Withdrawal #1
console.log(myAccount.withdraw(40));   // Withdrawal #2
console.log(myAccount.deposit(100));   // Deposit #3

// Check balance
console.log(myAccount.checkBalance());

// List deposits
console.log(myAccount.listAllDeposits());

// List withdrawals
console.log(myAccount.listAllWithdrawals());
