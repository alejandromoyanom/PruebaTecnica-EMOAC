function convertirHora12hA24h(s) {
  const horasStr = s.substring(0, 2);
  const minutos = s.substring(3, 5);
  const segundos = s.substring(6, 8);
  const amPm = s.substring(8, 10);
  let horas24hStr;

  let horas = parseInt(horasStr, 10);

  if (amPm === "PM") {
    if (horas !== 12) {
      horas += 12;
    }
  } else if (amPm === "AM") {
    if (horas === 12) {
      horas = 0;
    }
  }

  if (horas < 10) {
    horas24hStr = "0" + horas;
  } else {
    horas24hStr = horas.toString();
  }

  return `${horas24hStr}:${minutos}:${segundos}`;
}
