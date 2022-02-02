//next component return the actual date in natural language
function Availability(date) {
  const day = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const month = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  if (date) {
    let actualDate = new Date(date);
    return `el ${day[actualDate.getDay()]}, ${actualDate.getDate()} de ${
      month[actualDate.getMonth()]
    } de ${actualDate.getFullYear()}`;
  } else {
    return "Cualquier Fecha";
  }
}

export default Availability;
