function generateQR() {
let qrContainer = document.getElementById("qrcode"); let text = document.getElementById("qrText").value;
qrContainer.innerHTML = ""; if (text.trim() === "") {
alert("Please enter text");
return;
}

new QRCode(qrContainer, { text: text,
width: 200,
height: 200
});
}

// QR Scanner
function onScanSuccess(decodedText) { document.getElementById("result").innerText = decodedText;
}

let scanner = new Html5QrcodeScanner( "reader",
{
fps: 10,
qrbox: 250
}
);

scanner.render(onScanSuccess);
