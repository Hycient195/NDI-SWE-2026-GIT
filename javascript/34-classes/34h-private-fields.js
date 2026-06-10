/*
    A private field prevents external access to an internal class field, used for internal
    implementations.

    A class field is marked private by prefixing it with the "#" sign
*/

class BankAccount {
    #_balance = 5000; // marking balance as private;

    withdraw(amount) {
        if (amount > this.#_balance) throw new Error("Cannot take more than you own")
        
        this.#_balance = this.#_balance - amount
        return this.#_balance;
    }

    get balance() {
        return this.#_balance;
    }
}

const account = new BankAccount();


account.withdraw(400) // User cannot withdraw more than they own

// account.balance = 20000 // Cannot assign arbitrary value to account balance because it it write-gated by "get" modifier

// account.balance = 5000000;

console.log(account.balance)