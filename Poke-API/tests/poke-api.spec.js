const { test, expect } = require('@playwright/test')

const file = require('../json/bulbasaur-schema.json')

const ejs = require('easy-json-schema')

test('Pokemon Information', async ({ request }) => {
   const pokemon = await request.get('pokemon/bulbasaur');
   let pokejson = await pokemon.json();
   //console.log(await pokejson.moves[5].move.name);
   //expect(pokemon.ok()).toBeTruthy();
   //expect(JSON.stringify(pokejson)).toMatchSnapshot();
   let pokeForms = pokejson.forms;

   const formSchema = ejs(pokeForms);

   expect(file).toEqual(formSchema)
})