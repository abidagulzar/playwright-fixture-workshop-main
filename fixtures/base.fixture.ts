import { test as baseTest, expect, Page } from '@playwright/test'
import { DepositPage } from "../pageObjects/deposit.page";
import { LoginPage } from "../pageObjects/login.page";
import { TransactionsPage } from "../pageObjects/transaction.page";
import { log } from 'console';
import { WithdrawPage } from '../pageObjects/withdraw.page';



interface TestFixtures{
    loginPage:LoginPage
    depositPage:DepositPage
    transactionPage:TransactionsPage
    withdrawPage:WithdrawPage
}


export const test = baseTest.extend<TestFixtures>({

    loginPage: async({page},use)=>{
        //setup
        const loginPage= new LoginPage(page)
        await use(loginPage)
    },
    depositPage:async({page},use)=>{
        //setup
        const depistPage=new DepositPage(page)
        await use(depistPage)
    },
    transactionPage:async({page},use)=>{
        //setup
        const transactionPage=new TransactionsPage(page)
        await use(transactionPage)
    },
    withdrawPage:async({page},use)=>{
        //setup 
        const withdrawPage= new WithdrawPage(page)
        await use(withdrawPage)
    }
  })

  export {expect} from '@playwright/test'