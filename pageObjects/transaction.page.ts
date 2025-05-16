import { Page,Locator } from "@playwright/test";

export class TransactionsPage{
    constructor(public readonly page:Page){ 

    }

async navigateTo(){
    await this.page.getByText('Transactions').click()
}


async revertSortingByDate(){
        await this.page.locator('thead').locator('tr').locator('td:nth-of-type(1)').locator('a').click()
       
}

async getFirstTransactionAmountFiled(): Promise<Locator>{
    return this.page.locator('#anchor0').locator('td:nth-of-type(2)')
}

async getFirstTransactionTypeFIeld(): Promise<Locator>{
    return this.page.locator('#anchor0').locator('td:nth-of-type(3)')
}
}