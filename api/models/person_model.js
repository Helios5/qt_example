const db = require('../database');

const person = {
  getById: function(id, callback) {
    return db.query('select * from person where id_person=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from person', callback);
  },
  add: function(person, callback) {
    return db.query(
      'insert into person (f_name,l_name,money) values(?,?,?)',
      [person.f_name, person.author, person.money],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from person where id_person=?', [id], callback);
  },
  update: function(id, person, callback) {
    return db.query(
      'update person set f_name=?,author=?, money=? where id_person=?',
      [person.f_name, person.author, person.money, id],
      callback
    );
  }
};
module.exports = person;