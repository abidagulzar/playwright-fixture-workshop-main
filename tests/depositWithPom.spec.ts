import {test, expect } from '@playwright/test'
import { LoginPage } from '../pageObjects/login.page'
import { DepositPage } from '../pageObjects/deposit.page'
import { TransactionsPage } from '../pageObjects/transaction.page'

test.describe('Money Deposit',()=>{

    test.beforeEach(async ({page})=>{
        const loginPage= new LoginPage(page)
        await loginPage.goto()
        await loginPage.loginAs('Harry Potter')

    })

    test('Deposit 500$ in Harry potter account', async({page})=>{
        const amount='500'
        const depositPage= new DepositPage(page)
        await depositPage.navigateTo()
        await depositPage.depositAmount(amount)
        

        const transactionPage= new TransactionsPage(page)
        await transactionPage.navigateTo()
        await transactionPage.revertSortingByDate()
        await expect(await transactionPage.getFirstTransactionAmountFiled()).toHaveText(amount)
        await expect(await transactionPage.getFirstTransactionTypeFIeld()).toHaveText('Credit')
        console.log('All done')
    
    })

})