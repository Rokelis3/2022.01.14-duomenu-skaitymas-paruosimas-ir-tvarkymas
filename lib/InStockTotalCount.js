// funkcija kuri skaiciuoja visu likutiniu (neparduotu) prekiu keiki sandelyje

function InStockTotalCount(goodsInfo) {
    let amountInStock = 0;
    for(const item of goodsInfo){
        amountInStock += item.inStock;
    }

    return amountInStock;
}

module.exports = InStockTotalCount;