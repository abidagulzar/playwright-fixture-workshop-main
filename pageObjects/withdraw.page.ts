import { Page } from "@playwright/test";

export class WithdrawPage{
    constructor(public readonly page:Page){ 

    }


async navigateTo(){
    await this.page.getByText('Withdrawl').click()
}

async withdrawAmount(amount:string){
    await this.page.fill('[ng-model="amount"]',amount)
    await this.page.locator('[type="submit"]').click()
    await this.page.waitForTimeout(1000)
}

}