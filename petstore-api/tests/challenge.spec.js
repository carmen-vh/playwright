import { test, expect } from '@playwright/test'
const petData = require('../data/pet.json')
const petUpdate = require('../data/pet-update.json')

test('post new data', async ({ request }) => {
    const response = await request.post('pet/',{
        data : petData
    })
    expect(response.status()).toBe(200)
})

test('check new data', async ({ request }) => {
    const response = await request.get(`pet/${petData.id}`)
    let json = await response.json()
    let petName = json.name 
    expect(petName).toBe(petData.name)
})

test('updating data', async ({ request }) => {
    const response = await request.put(`pet`,
        {
            data : petUpdate
        }
    )
    expect(response.status()).toBe(200)
})

test('check updated data', async ({ request }) => {
    const response = await request.get(`pet/${petUpdate.id}`)
    let json = await response.json()
    let petName = json.name
    expect(petName).toBe(petUpdate.name)
    expect(petName).toBe('Sponge Bob') 
})

test('delete data', async ({ request }) => {
    const response = await request.delete(`pet/${petUpdate.id}`)
    expect(response.status()).toBe(200)
})

test('check deleted data', async ({ request }) => {
    const response = await request.get(`pet/${petUpdate.id}`)
    expect(response.status()).toBe(404) 
})