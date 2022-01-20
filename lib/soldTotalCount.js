function soldTotalCount(goodsInfo){
    let soldSum = 0;
    for(const item of goodsInfo){
        soldSum += item.sold;
    }
    return soldSum;
};



module.exports = soldTotalCount;