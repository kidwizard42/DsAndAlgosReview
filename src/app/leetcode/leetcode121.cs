// link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

public int MaxProfit(int[] prices) {
        int lp = 0;
        int res = 0;
        if(prices.Length == 1) return 0;

        for(int rp = 1; rp<prices.Length; rp++)
        {
            var profit = prices[rp] - prices[lp];
            res = Math.Max(profit, res);

            if(prices[lp] > prices[rp]){
                lp = rp;
            }
        }
        
        return res;
    }