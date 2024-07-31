const connection = require('../config/db')
const { Sequelize } = require('@sequelize/core')


const Product = connection.define('products', {
    barcode: {type: Sequelize.STRING, allowNull: false},
    name: { type: Sequelize.TEXT, allowNull: false },
    price: { type: Sequelize.FLOAT, allowNull: false },
    description: { type: Sequelize.TEXT, allowNull: true },
    stock: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
});

Product.sync({ force: false })
    .then(() => {
        console.log('Tabela product sincronizada')
    }).catch((error) => {
        console.error('Erro ao sincronizar a tabela product')
    })

module.exports = Product;