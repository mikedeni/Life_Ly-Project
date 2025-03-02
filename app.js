// ราคา / ปริมาตร
function toValue(price, earn) {
    let value = price / earn;
    return value.toFixed(2);
}

function display(elementID, value) {
    document.getElementById(elementID).innerHTML = value;
}

function toWorthinessPrograme() {
    let priceA = document.getElementById("priceA").value;
    let earnA = document.getElementById("earnA").value;
    let priceB = document.getElementById("priceB").value;
    let earnB = document.getElementById("earnB").value;

    if (!priceA || !earnA || !priceB || !earnB) {
        alert("❗ กรุณากรอกข้อมูลให้ครบถ้วนทั้งสองชุด");
        return;
    }

    let A = toValue(priceA, earnA);
    let B = toValue(priceB, earnB);

    alert(
        `✨ สินค้าชุดที่ ${
            A > B ? "2" : "1"
        } คุ้มกว่านะ 💵\n📜 สินค้าชิ้นที่ 1 : ${A} บาท/ปริมาตร\n📜 สินค้าชิ้นที่ 2 : ${B} บาท/ปริมาตร`
    );
}
