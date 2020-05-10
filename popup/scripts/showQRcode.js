browser.tabs.query({currentWindow: true, active: true})
.then((tabs) => {
    if(tabs && tabs[0]){
    new QRCode(document.getElementById("qrcode"), tabs[0].url);
}
})
