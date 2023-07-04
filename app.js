function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

window.addEventListener('load', async () => {

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let ds_160 = document.getElementById('ds_160');
        let nombre = document.getElementById('nombre').value;
        let fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
        let lugar_nacimiento = document.getElementById('lugar_nacimiento').value;
        let pasaporte = document.getElementById('pasaporte').value;
        let lugar_expedicion = document.getElementById('lugar_expedicion').value;
        let expedicion = document.getElementById('expedicion').value;
        let caducidad = document.getElementById('caducidad').value;
        let curp = document.getElementById('curp').value;
        let domicilio = document.getElementById('domicilio').value;
        let numero_casa = document.getElementById('numero_casa').value;
        let colonia = document.getElementById('colonia').value;
        let cp = document.getElementById('cp').value;
        let telefono = document.getElementById('telefono').value;
        let telefono_alt = document.getElementById('telefono_alt').value;
        let papa = document.getElementById('papa').value;
        let fecha_papa = document.getElementById('fecha_papa').value;
        let mama = document.getElementById('mama').value;
        let fecha_mama = document.getElementById('fecha_mama').value;
        let esposo = document.getElementById('esposo').value;
        let fecha_esposo = document.getElementById('fecha_esposo').value;
        let trabajo = document.getElementById('trabajo').value;
        let titulo = document.getElementById('titulo').value;
        let escuela = document.getElementById('escuela').value;
        let numero_escuela = document.getElementById('numero_escuela').value;
        let direccion_escuela = document.getElementById('direccion_escuela').value;
        let conocido = document.getElementById('conocido').value;
        let numero_conocido = document.getElementById('numero_conocido').value;
        let direccion_conocido = document.getElementById('direccion_conocido').value;

        generatePDF(ds_160, nombre, fecha_nacimiento, lugar_nacimiento, pasaporte, lugar_expedicion, expedicion, caducidad, curp, domicilio, numero_casa, colonia, cp, telefono, telefono_alt, papa, fecha_papa, mama, fecha_mama, esposo, fecha_esposo, trabajo, titulo, escuela, numero_escuela, direccion_escuela, conocido, numero_conocido, direccion_conocido);
    })

});

async function generatePDF(ds_160, nombre, fecha_nacimiento, lugar_nacimiento, pasaporte, lugar_expedicion, expedicion, caducidad, curp, domicilio, numero_casa, colonia, cp, telefono, telefono_alt, papa, fecha_papa, mama, fecha_mama, esposo, fecha_esposo, trabajo, titulo, escuela, numero_escuela, direccion_escuela, conocido, numero_conocido, direccion_conocido) {

    const image = await loadImage("formDS-160.jpg");

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 617, 790);

    /* 
        pdf.setFontSize(10);
    
        const date = new Date();
        pdf.text(date.getUTCDate().toString(), 235, 150);
        pdf.text((date.getUTCMonth() + 1).toString(), 275, 150);
        pdf.text(date.getUTCFullYear().toString(), 320, 150); 
        
    */

    pdf.setFontSize(14);

    pdf.text(nombre, 115, 129);
    pdf.text(fecha_nacimiento, 200, 154);
    pdf.text(lugar_nacimiento, 380, 154);
    pdf.text(pasaporte, 200, 180);
    pdf.text(lugar_expedicion, 455, 180);
    pdf.text(expedicion, 160, 204);
    pdf.text(caducidad, 415, 204);
    pdf.text(curp, 100, 229);
    pdf.text(domicilio, 98, 255);
    pdf.text(numero_casa, 470, 255);
    pdf.text(colonia, 175, 280);
    pdf.text(cp, 490, 280);
    pdf.text(telefono, 170, 305);
    pdf.text(telefono_alt, 430, 305);
    pdf.text(papa, 105, 330);
    pdf.text(fecha_papa, 474, 330);
    pdf.text(mama, 105, 355);
    pdf.text(fecha_mama, 474, 355);
    pdf.text(esposo, 125, 381);
    pdf.text(fecha_esposo, 474, 381);
    pdf.text(trabajo, 105, 405);
    pdf.text(titulo, 160, 457);
    pdf.text(escuela, 55, 507);
    pdf.text(numero_escuela, 455, 506);
    pdf.text(direccion_escuela, 120, 533);
    pdf.text(conocido, 55, 582);
    pdf.text(numero_conocido, 460, 582);
    pdf.text(direccion_conocido, 120, 609);

    pdf.setFillColor(0, 0, 0);

    pdf.save("Formulario DS-160 - " + nombre + ".pdf");

}