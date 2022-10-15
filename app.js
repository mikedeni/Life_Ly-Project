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
        display('result', `ชุดที่ 1 : ${A.toFixed(2)} บาท/ปริมาตร <br>
        ชุดที่ 2 : ${B.toFixed(2)}บาท/ปริมาตร <br>
        **ดังนั้นชุดที่ 2 คุ้มกว่านะ 🎉`)
    } else {
        display('result', `ชุดที่ 1 : ${A.toFixed(2)} บาท/ปริมาตร <br>
        ชุดที่ 2 : ${B.toFixed(2)}บาท/ปริมาตร <br>
        **ดังนั้น ชุดที่ 1 คุ้มกว่านะ 🎉`)
    }
};
