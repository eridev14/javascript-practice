function bonAppetit(bill, k, b) {
    const newBill = bill.filter((_, i) => i !== k).reduce((ac, val) => ac + val, 0);
    let bActaul = newBill / 2;
    let dif = b - bActaul;
    console.log(dif === 0 ? "Bon Appetit" : dif);
}


// refactorizado por chatGPT
function bonAppetitGPT(bill, k, b) {
    const totalCost = bill.reduce((acc, val) => acc + val, 0);
    const sharedCost = (totalCost - bill[k]) / 2;
    const refund = b - sharedCost;
    console.log(refund === 0 ? "Bon Appetit" : refund);
}


bonAppetit([3, 10, 2, 9], 1, 7)