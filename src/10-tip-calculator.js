/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
var tipPercentage;
var  tipAmount;
var totalAmount;

if(billAmount>0 && (serviceRating>=1 && serviceRating<=5) && (Number.isInteger(serviceRating)))
{
   if(serviceRating==1)
    {
      tipPercentage=5;
      tipAmount=Math.round((tipPercentage * billAmount / 100) * 100) / 100;
      totalAmount=billAmount+tipAmount ;
      return { tipPercentage: tipPercentage, tipAmount: tipAmount, totalAmount: totalAmount};
    }
    else if(serviceRating==2)
    {
       tipPercentage=10;
      tipAmount=Math.round((tipPercentage * billAmount / 100) * 100) / 100;
      totalAmount=billAmount+tipAmount ;
        return { tipPercentage: tipPercentage, tipAmount: tipAmount, totalAmount: totalAmount};
    }
    else if(serviceRating==3)
    {
       tipPercentage=15;
      tipAmount=Math.round((tipPercentage * billAmount / 100) * 100) / 100;
      totalAmount=billAmount+tipAmount ;
        return { tipPercentage: tipPercentage, tipAmount: tipAmount, totalAmount: totalAmount};
    }
    else if(serviceRating==4)
    {
       tipPercentage=20;
      tipAmount=Math.round((tipPercentage * billAmount / 100) * 100) / 100;
      totalAmount=billAmount+tipAmount ;
        return { tipPercentage: tipPercentage, tipAmount: tipAmount, totalAmount: totalAmount};
    }else if(serviceRating==5)
    {
       tipPercentage=25;
      tipAmount=Math.round((tipPercentage * billAmount / 100) * 100) / 100;
      totalAmount=billAmount+tipAmount ;
        return { tipPercentage: tipPercentage, tipAmount: tipAmount, totalAmount: totalAmount};
    }
}else{
  return null;
}




 /* if(billAmount<=0 && !(serviceRating>=1 && serviceRating<=5) && !(Number.isInteger(serviceRating)))
  {
    return {tipPercentage: null, tipAmount: null, totalAmount: null};
  }
   else{
    if(serviceRating==1)
    {
      return { tipPercentage: 5, tipAmount: (tipPercentage*billAmount)/100, totalAmount: billAmount+tipAmount };
    }
    else if(serviceRating==2)
    {
      return { tipPercentage: 10, tipAmount: (tipPercentage*billAmount)/100, totalAmount: billAmount+tipAmount };
    }
    else if(serviceRating==3)
    {
      return { tipPercentage: 15, tipAmount: (tipPercentage*billAmount)/100, totalAmount: billAmount+tipAmount };
    }
    else if(serviceRating==4)
    {
      return { tipPercentage: 20, tipAmount: (tipPercentage*billAmount)/100, totalAmount: billAmount+tipAmount };
    }else if(serviceRating==5)
    {
      return { tipPercentage: 5, tipAmount: (tipPercentage*billAmount)/100, totalAmount: billAmount+tipAmount };
    }
   }*/
}
