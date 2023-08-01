function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let tip = meal_cost * (tip_percent / 100);
    let tax = meal_cost * (tax_percent / 100)
    console.log(Math.round(meal_cost + tip + tax));
}

solve(12.00, 20, 8)