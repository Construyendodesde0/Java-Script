function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    
    var valorAno = Number(fano.value);
    
    if (fano.value.length == 0 || valorAno > ano) {
        window.alert('[ERROR] Verifique los datos e intente nuevamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var edad = ano - Number(fano.value);
        res.innerHTML = `Edad calculada: ${edad}`;
        var género = '';
        
        if (fsex[0].checked) {
            género = 'Hombre';
        } else if (fsex[1].checked) {
            género = 'Mujer';
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${género} con ${edad} años.`;
    }
}