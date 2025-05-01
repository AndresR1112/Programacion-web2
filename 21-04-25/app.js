function generarQR() {
    let var1 = document.getElementById('input1').value.trim();
    let var2 = document.getElementById('input2').value.trim();
    let var3 = document.getElementById('input3').value.trim();
    let var4 = document.getElementById('input4').value.trim();
    var textConcatenado = var1 + "," + var2 + "," + var3 + "," + var4;

    if (textConcatenado === ',,') {
        alert("Favor de ingresar datos");
    } else {
        let qrApi = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=%27' + encodeURIComponent(textConcatenado);
        let qrImg = document.createElement('img');
        qrApi.src=qrImg;
        qrImg.alt="Code de QR";
        console.log(qrImg.src);

        qrImg.classList.add('qr-code');
        document.getElementById('qr-code').appendChild(qrImg);

    }

}