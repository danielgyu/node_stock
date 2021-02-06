const yfd = require('yahoo-stock-prices');

async function getStockPrice(symbol) {
    let data;
    try {
        data = await yfd.getCurrentPrice(symbol);
    } catch (err) {
        console.log(err);
    }
    return data;
}

module.exports = getStockPrice;
