const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function atualizarRelogio() {
    const agora = new Date();

    const horarioBrasilia = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).formatToParts(agora);

    const hora = horarioBrasilia.find(parte => parte.type === 'hour').value;
    const minuto = horarioBrasilia.find(parte => parte.type === 'minute').value;
    const segundo = horarioBrasilia.find(parte => parte.type === 'second').value;

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);