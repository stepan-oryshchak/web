const pool = require('./db')

const projectorController = {
  async getAllProjectors(req, res) {
    try {
      const [rows, fields] = await pool.query('SELECT * FROM projectors');
      res.json(rows);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  },

  async addProjector(req, res) {
    const { model, resolution, input_type, price } = req.body;
    try {
      await pool.query(
        'INSERT INTO projectors (model, resolution, input_type, price) VALUES (?, ?, ?, ?)',
        [model, resolution, input_type, price]
      );
      res.send('Projector added successfully');
    } catch (err) {
      res.status(500).send('Server Error');
    }
  },

  async updateProjector(req, res) {
    const id = req.params.id;
    const { model, resolution, input_type, price } = req.body;
    try {
      await pool.query(
        'UPDATE projectors SET model = ?, resolution = ?, input_type = ?, price = ? WHERE id = ?',
        [model, resolution, input_type, price, id]
      );
      res.send('Projector updated successfully');
    } catch (err) {
      res.status(500).send('Server Error');
    }
  },

  async deleteProjector(req, res) {
    const id = req.params.id;
    try {
      await pool.query('DELETE FROM projectors WHERE id = ?', [id]);
      res.send('Projector deleted successfully');
    } catch (err) {
      res.status(500).send('Server Error');
    }
  }
};

module.exports = projectorController;