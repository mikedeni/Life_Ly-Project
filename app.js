// ราคา / ปริมาตร
function toValue(price, earn) {
    let value = price / earn
    return value
}

function display(elementID, value) {
    document.getElementById(elementID).innerHTML = value
}

function toWorthinessPrograme() {
    let A = toValue(document.getElementById('priceA').value, document.getElementById('earnA').value);
    let B = toValue(document.getElementById('priceB').value, document.getElementById('earnB').value);

    if (A > B) {
        let value = A - B
        display('result', `ชุดที่ 2 คุ้มกว่าตั้ง ${value.toFixed(2)} บาท เลยนะ 🎉`)
    } else {
        let value = B - A
        display('result', `ชุดที่ 1 คุ้มกว่าตั้ง ${value.toFixed(2)} บาท เลยนะ 🎉`)
    }
};
