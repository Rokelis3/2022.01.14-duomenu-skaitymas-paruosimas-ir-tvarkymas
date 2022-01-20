function sumOfSoldItems(goodsInfo){
    let sum = 0;
    for(const item of goodsInfo){
        sum += item.price.value * item.sold;
    }
    return sum;
};

module.exports = sumOfSoldItems;