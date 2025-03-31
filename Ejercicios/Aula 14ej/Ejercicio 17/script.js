function generarTabla() {
    // Obtener el número ingresado
    const numero = parseInt(document.getElementById('numero').value);
    
    
    if (isNaN(numero) || numero < 1) {
        alert("Por favor ingresa un número válido mayor a 0");
        return;
    }
    
    
    let tablaHTML = `<h2>Tabla del <span class="numero-tabla">${numero}</span> <span class="emoji">📋</span></h2>`;
    
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        
        const emoji = i % 2 === 0 ? '' : '';
        tablaHTML += `
            <div class="tabla-item">
                ${numero} × ${i} = ${resultado} <span class="emoji">${emoji}</span>
                ${i === 10 ? '<span class="emoji"></span>' : ''}
            </div>`;
    }
    
   
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = tablaHTML;
    divResultado.style.display = "block";
}