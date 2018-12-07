
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('snacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert([
        { name: 'Steakhouse Beef Jerky', description: 'This jerky is awesome. Made from 100% beefm the only downside are the farts.', price: 7.99, img: 'https://www.jacklinks.com/wp-content/uploads/2018/04/FLAME-GRILLED-STEAKHOUSE-BEEF-JERKY-main.jpg' },
        { name: 'Salt n Vinegar Chips', description: 'Salt and vinegar chips, seriously salty and vinegary.', price: 2.99, img: 'https://target.scene7.com/is/image/Target/GUEST_4f22154b-5b54-448f-8e53-26027dce9568?wid=488&hei=488&fmt=pjpeg' },
        { name: 'Apple', description: 'How bout eat something healthy for once you tubster.', price: .69, img: 'https://images-na.ssl-images-amazon.com/images/I/81xQBb5jRzL._SY355_.jpg' },
        { name: 'Oreos', description: 'Milks favorite cookie.', price: 2.99, img: 'https://media3.webcollage.net/62dfceca8e843a493cde3fb01306947a947f1cee?response-content-type=image%2Fjpeg&AWSAccessKeyId=AKIAIIE5CHZ4PRWSLYKQ&Expires=1893498716&Signature=f1aGceVGCxYZqkDzlCgfnyiHREE%3D' },
        { name: 'Fruity Pebbles', description: 'Get stoned and have a bowl.', price: 2.49, img: 'https://images-na.ssl-images-amazon.com/images/I/51WAos0EZAL.jpg' },
        { name: 'Reese\'s Pieces', description: 'These guys right here are good. like real good', price: 1.49, img: 'https://images-na.ssl-images-amazon.com/images/I/51CwgYIdVoL._SY355_.jpg' },
        { name: 'Twinkies', description: 'If the world ends, I\'m taking these guys with me', price: 1.99, img: 'https://target.scene7.com/is/image/Target/GUEST_1f09e5c1-fa6b-4c0d-835f-c419575d7f78?wid=488&hei=488&fmt=pjpeg' },
        { name: 'Funyuns', description: 'Whatever happened to these guys? Feel like i used to eat them all the time.', price: 1.99, img: 'https://target.scene7.com/is/image/Target/GUEST_3857f62c-73dd-452d-9383-c03f41908417?wid=488&hei=488&fmt=pjpeg' },
        { name: 'Honey Buns', description: 'So good', price: 2.99, img: 'https://www.littledebbie.com/images/social/1453151272.jpg' },
      ]);
    });
};
