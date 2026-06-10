
class Person {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

class BankAccount {
    #_balance;
    #_owner;

    constructor(owner, balance = 0) {
        this.#_owner = owner;
        this.#_balance = balance;        
    }

    deposit(amount) {
        if (amount < 0) throw new Error("Cannot deposit negative amount")
        this.#_balance += amount
        console.log(`Amount ${amount} deposited`);
    }

    withdraw(owner, amount) {
        if (owner.email !== this.#_owner.email) throw new Error("Cannot withdraw from non-owned account")
        if (amount > this.#_balance) throw new Error("Cannot withraw more than you have")
        this.#_balance -= amount
        console.log(`Amount ${amount} withdrawn`)
    }

    get getBalance() {
        return this.#_balance;;
    }

    get getAccountUser() {
        return this.#_owner;
    }
}

const john = new Person("John", "Dolene", "john@email.com");
const james = new Person("James", "Marlone", "james@email.com");


const johnAccount = new BankAccount(john, 1000);

johnAccount.deposit(2345);
console.log(johnAccount.getBalance);

johnAccount.withdraw(john, 1500)
console.log(johnAccount.getBalance);

console.log(johnAccount.getAccountUser)
