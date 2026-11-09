class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowest = +Infinity
        let highestProfit = 0

        prices.forEach(price => {
            if(price < lowest){
                lowest = price
            } else if(price - lowest > highestProfit){
                    highestProfit = price - lowest
            }
        })

        return highestProfit
    }
}


