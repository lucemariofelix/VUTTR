module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'vuttr',
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
};
