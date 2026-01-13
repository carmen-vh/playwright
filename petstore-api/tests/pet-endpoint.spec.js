import { test, expect  } from '@playwright/test'
const petData = require('../data/pet.json')

// Query Parameters:
test('available pets', async ({request}) => {
    const response = await request.get('pet/findByStatus', { // endpoint found on the URL GET
        params: {
            'status' : 'available', // query parameter
        }
    })
    
    // console.log(await response.json())
    console.log(await response.url())
})

test('invalid query parameters', async ({request}) => {
    const response = await request.get('pet/findByStatus', {
        params: {
            'cheese' : 'burger', // query parameter
        }
    })
    
    // console.log(await response.json())
    console.log(await response.url())
    expect(response.status()).toBe(400) // found bug !
})

// Post and Put:
// ( UGLY way ):
test('adding a pet (ugly)', async ({ request }) => {
    const response = await request.post('pet/', {
        data : {
            "id": 8754,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "mickey",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                "id": 0,
                "name": "mouse"
                }
            ],
            "status": "available"
        }
    }) 
    
    expect(response.status()).toBe(200)
    // console.log(await response.url()); //compare url results
})

test('checking if pet was added (ugly)', async ({ request }) => {
    const response = await request.get(`pet/8754`)
    let json = await response.json()
    console.log(json)
})

// ( Not so UGLY way ):
test('adding a pet', async ({ request }) => {
    const response = await request.post(`pet/`, {
        data : petData
    }) 
    console.log(await response.json())
    expect(response.status()).toBe(200)
    // console.log(await response.url()); //compare url results
})

test('update pet', async ({ request }) => {
    const response = await request.put(`pet`, {
        data : petData
    }) 
    console.log(await response.json())
    expect(response.status()).toBe(200)
    // console.log(await response.url()); //compare url results
})

test('check that pet was added', async ({ request }) => {
    const response = await request.get(`pet/${petData.id}`)
    let json = await response.json()
    let petName = petData.name //.category.name
    let petNameJson = json.name //.category.name
    
    console.log(petName)
    console.log(petNameJson)

    expect(petName).toBe(petNameJson)
})