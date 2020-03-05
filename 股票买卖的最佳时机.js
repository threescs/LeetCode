// 贪心算法

// 策略1 从最低点买入, 从最高点卖出(追起单次利益)
// 策略2 从最低点买入, 只要赚钱就卖出, 不断买卖(追求多次的利益 单次利益不够)
// 策略3 从低点买入, 到价格高点卖出, 不断买卖 (在保证多次利益基础上, 实现多次利益)

export default (prices) => {
    let count = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j<prices.length-1; j++) {
            if(prices[j] < prices[j+1]) {
                count += prices[j+1] - prices[j];
                i = j;
            }else {
                i = j;
                break;
            }
        }
    }
    return count
}