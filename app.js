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
        display('result', `${B} บาท/ปริมาตร ชุดที่ 2 คุ้มกว่านะ 🎉`)
    } else {
        display('result', `${A} บาท/ปริมาตร ชุดที่ 1 คุ้มกว่านะ 🎉`)
    }
};
