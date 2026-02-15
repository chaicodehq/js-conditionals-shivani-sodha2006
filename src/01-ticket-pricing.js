/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  var y;
  if(typeof age !== 'number' || age < 0 || isNaN(age)){
    return -1;
  }
  if(age>=0 && age<=12 ){
    y=8;
  }
  else if(age >=13 && age<=17)
  {
    y=12;
  }
  else if(age >=18 && age<=59)
  {
    y=15;
  }
  else{
    y=10;

  }

  if(typeof isWeekend !== 'boolean'){
  return -1; // return -1 for invalid input
}

return isWeekend ? y + 3 : y;

  // Your code here
}


