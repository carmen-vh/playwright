const { test, expect } = require('@playwright/test')

const file = require('../json/squirtle-schema.json')
const ejs = require('easy-json-schema')

test('Pokemon Information', async ({ request }) => {
   const pokemon = await request.get('pokemon/squirtle')
   let pokeJson = await pokemon.json()

   console.log(await pokeJson.moves[5].move.name)
   expect(pokemon.ok()).toBeTruthy()
   //expect(JSON.stringify(pokeJson)).toMatchSnapshot();
   //let pokeForms = pokeJson.forms

   //const formSchema = ejs(pokeForms)

   //expect(file).toEqual(formSchema)
})

test('Pokemon Information: Snapshot Testing', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`)
    const pokeJson = await pokemon.json()
    expect(JSON.stringify(pokeJson)).toMatchSnapshot()
})

test('Pokemon Information: Schema Testing', async ({ request }) => {
   const pokemon = await request.get('pokemon/squirtle')
   // const pokemon = await request.get('pokemon/234')
   let pokeJson = await pokemon.json()
   let pokeForms = pokeJson.forms

   //console.log(pokeForms)
   const formSchema = ejs(pokeForms)
   expect(file).toEqual(formSchema)
})