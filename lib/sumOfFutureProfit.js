function sumOfFutureProfit(goodsInfo){
    let sum = 0;
    for(const item of goodsInfo){
        sum += item.inStock * item.price.value;
    };

    return parseFloat(sum.toFixed(2));
}

module.exports = sumOfFutureProfit;