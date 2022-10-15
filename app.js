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
        display('result', `สินค้าชิ้นที่ 1 : ${A.toFixed(2)} บาท/ปริมาตร <br>
        สินค้าชิ้นที่ 2 : ${B.toFixed(2)} บาท/ปริมาตร <br>
        **ดังนั้น สินค้าชิ้นที่ 2 คุ้มกว่านะ 🎉`)
    } else {
        display('result', `สินค้าชิ้นที่ 1 : ${A.toFixed(2)} บาท/ปริมาตร <br>
        สินค้าชิ้นที่ 2 : ${B.toFixed(2)} บาท/ปริมาตร <br>
        **ดังนั้น สินค้าชิ้นที่ 1 คุ้มกว่านะ 🎉`)
    }
};
