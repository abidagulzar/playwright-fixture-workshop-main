import { Page } from "@playwright/test";

export class LoginPage{
    constructor(public readonly page:Page){ // public readonly mean we can not overwrite but can access this page and use

    }

    async goto(){
        await this.page.goto('')

    }

    async loginAs(name:string){
        await this.page.getByText('Customer Login').click()
        await this.page.selectOption('#userSelect', name)
        await this.page.getByText('Login').click()
    }
}