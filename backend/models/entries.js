const connection = require('./connection');

class Entries {
  async get(id) {
    let entries = {
      error: false,
      data: []
    };

    new Promise((resolve, reject) => {
      if (id) {
        connection.query(`select * from Entries where id = ${id}`, (err, res) => {
          if (err) reject(err);
          resolve(res);
        });
      } else {
        connection.query('select * from Entries', (err, res) => {
          if (err) reject(err);
          resolve(res);
        });
      }
    })
      .catch(err => entries = {
        error: true,
        data: err
      })
      .then(res => entries = {
        error: false,
        data: res[0].solution
      })
      .finally(() => {
        return entries;
      });
  }
}
module.exports = Entries;
