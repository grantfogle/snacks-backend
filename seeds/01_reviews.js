
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, title: 'Funyuns more like yumyums', text: 'I haven\'t had funyuns since i was like 8. Seriously, what happened to these dudes', rating: 4, snack_id: 8 },
        { id: 2, title: 'Milks favorite cookie? Mine too!', text: 'Honestly, oreos are the shit. fuck the haters and chips ahoy fan boys. Oreos are number one!', rating: 5, snack_id: 4 },
        { id: 3, title: 'Haha no thank you', text: 'An apple? People still eat those? My apple arrive in poor shape, I tried eating it but could barely stomache it. Do not buy, you\'re better off buying a twinkie.', rating: 1, snack_id: 3 },
        { id: 4, title: 'Steakhouse Beef Jerky is Awewsome', text: 'Seriously good stuff. I got turned onto these guys by that dank samsquath commercial of theres. but they do not mess around. good stuff.', rating: 5, snack_id: 1 },
      ]);
    });
};

