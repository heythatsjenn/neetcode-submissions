class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowest = +Infinity
        let highest = -Infinity
        let highestProfit = 0

        prices.forEach(price => {
            if(price < lowest){
                lowest = price
                highest = -Infinity
            } else if (price > highest){
                if(price - lowest > highestProfit){
                    highestProfit = price - lowest
                }
                highest = price
            }
        })

        return highestProfit
    }
}


