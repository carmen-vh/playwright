import { test, expect } from '@playwright/test'
const storeData = require('../data/store-order.json')

test('adding order', async ({ request }) => {
    const response = await request.post('store/order', {
        data: storeData
    } )
    let resJson = await response.json()
    let statusJson = resJson.status

    expect(response.status()).toBe(200)
    expect(statusJson).toBe(storeData.status)
})

test('check inventory order', async ({ request }) => {
    const response = await request.get(`store/order/${storeData.id}`)
    let resJson = await response.json()
    let id = resJson.id
    expect(response.status()).toBe(200)
    expect(id).toBe(storeData.id)
})

test('delete inventory', async ({ request }) => {
    const response = await request.delete(`store/order/${storeData.id}`)
    let resJson = await response.json()
    let id = resJson.message
    expect(response.status()).toBe(200)
    expect(id).toBe(storeData.id.toString()) // message comes up as string (check API)
    
})

test('check inventory order after deletion', async ({ request }) => {
    const response = await request.get(`store/order/${storeData.id}`)
    expect(response.status()).toBe(404) // shouldn't be found after being deleted
})
