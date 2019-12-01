export interface SavingTransactionList {
    id: number,
    date: any,
    description: string,
    type: string,
    amount: any,
    availableBalance: any,
    savingsAccount: {
        id: number
        accountNumber: number,
        accountBalance: any
    }

}