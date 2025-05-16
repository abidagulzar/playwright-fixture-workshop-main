import {test, expect } from '@playwright/test'

test.describe('Money Deposit',()=>{

    test.beforeEach(async ({page})=>{

        await page.goto('')
        await page.getByText('Customer Login').click()
        await page.selectOption('#userSelect', 'Harry Potter') // by default css selector selectOption
        await page.getByText('Login').click()
        console.log('test')

    })

    test('Deposit 500$ in Harry potter account', async({page})=>{
        await page.getByText('Deposit').click()
        await page.fill('[ng-model="amount"]','500')
        await page.locator('[type="submit"]').click()
        await page.waitForTimeout(1000)
        await page.getByText('Transactions').click()
        await page.locator('thead').locator('tr').locator('td:nth-of-type(1)').locator('a').click()
        await expect(page.locator('#anchor0').locator('td:nth-of-type(2)')).toHaveText('500')
        await expect(page.locator('#anchor0').locator('td:nth-of-type(3)')).toHaveText('Credit')
        console.log('test deposit')

    })
})