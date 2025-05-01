function enviarWhatsApp(){
    const numero = document.getElementById("input1").value.trim();
    const mensaje = document.getElementById("input2").value.trim();

    if(!numero || ! mensaje){
        alert ("Faltan campos por llenar.");
        return
    }
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}