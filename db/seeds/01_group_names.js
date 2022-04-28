/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('groups').del()
  await knex('groups').insert([
    {id: 1,  group_name: 'Big Bang'},
    {id: 2,  group_name: 'BTS'},
    {id: 3,  group_name: 'BlackPink'},
    {id: 4,  group_name: 'Itzy'}
  ]);
};
