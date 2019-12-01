export interface PrimaryTransactionList {
id: number,
date: any,
description: string,
type: string,
amount: any,
availableBalance: any,
primaryAccount: {
    id: number
    accountNumber: number,
    accountBalance: any
}

}

