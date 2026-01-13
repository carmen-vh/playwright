import { test, expect  } from '@playwright/test';
const petData = require('../data/pet.json')

test('adding new available pet', async ({ request }) => {
    const response = await request.put('pet/', { // endpoint found on the URL GET
        data : petData
    }) 
    console.log(await response.json());
    expect(response.status()).toBe(200)
    // console.log(await response.url()); //compare url results
})

test('checking if pet was added successfully', async ({ request }) => {
    // const response = await request.get('pet/findByStatus', { // endpoint found on the URL GET
    //     params: {
    //         'status' : 'available', // query parameter
    //     }
    // }) 
    const response = await request.get('pet/${petData.id}');
    // console.log(await response.json());
    // console.log(await response.url()); //compare url results
    let json = await response.json();
    let petName = petData.name.category.name
    let petNameJson = json.name.category.name
    
    console.log(petName);
    console.log(petNameJson);

    expect(petName).toBe(petName.name);
})