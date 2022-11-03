const masa = document.querySelector('#masa')
const planeta = document.querySelector('#planeta')
const submit = document.querySelector('.formulario__submit')
const resultado = document.getElementById('resultado')

submit.addEventListener('click', (e) => {
    e.preventDefault()

    if(planeta.value=='Mercurio') {
        peso = masa.value * 3.7;
    } if(planeta.value=='Venus') {
        peso = masa.value * 8.87;
    } if(planeta.value=='Tierra') {
        peso = masa.value * 9.81;
    } if(planeta.value=='Marte') {
        peso = masa.value * 3.72;
    } if(planeta.value=='Jupiter') {
        peso = masa.value * 24.79;
    } if(planeta.value=='Saturno') {
        peso = masa.value * 10.44;
    } if(planeta.value=='Urano') {
        peso = masa.value * 8.87;
    } if(planeta.value=='Neptuno') {
        peso = masa.value * 11.15;
    } if(planeta.value=='Plutón') {
        peso = masa.value * 0.62;
    }

    total = peso.toFixed(1)
    resultado.innerHTML = masa.value + ' kilogramos en ' + planeta.value + ' tienen un peso de: ' + total + ' N'

    if(masa.value<0 || masa.value=="undefined") {
        resultado.innerHTML = 'Ups! Hubo un error'
    }
})