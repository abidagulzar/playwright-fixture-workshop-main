import {test, expect } from '../fixtures/base.fixture'
import { LoginPage } from '../pageObjects/login.page'
import { DepositPage } from '../pageObjects/deposit.page'
import { TransactionsPage } from '../pageObjects/transaction.page'
import { WithdrawPage } from '../pageObjects/withdraw.page'

test.describe('Money Deposit',()=>{

    test.beforeEach(async ({loginPage})=>{
        await loginPage.goto()
        await loginPage.loginAs('Harry Potter')

    })

    test('Deposit 500$ in Harry potter account', async({depositPage,transactionPage})=>{
        const amount='500'
        await depositPage.navigateTo()
        await depositPage.depositAmount(amount)
        await transactionPage.navigateTo()
        await transactionPage.revertSortingByDate()
        await expect(await transactionPage.getFirstTransactionAmountFiled()).toHaveText(amount)
        await expect(await transactionPage.getFirstTransactionTypeFIeld()).toHaveText('Credit')
    
    })

    test('Withday 50$ in Harry potter account', async({withdrawPage})=>{
        const amount='50'
        await withdrawPage.navigateTo()
        await withdrawPage.withdrawAmount(amount)
        console.log('withdraw')
    })
})