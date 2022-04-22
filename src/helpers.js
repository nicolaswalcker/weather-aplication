
export function removeDot(value) {
  return value.replace(/\./g, '');
}

export function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getDate(date) {
  const today = new Date(date * 1000);
  const actualDay = removeDot(capitalize(today.toLocaleDateString('pt-BR', { weekday: 'short' })));
  const actualDayNumber = today.toLocaleDateString('pt-BR', { day: 'numeric' });
  const actualMonth = removeDot(capitalize(today.toLocaleDateString('pt-BR', { month: 'short' })));

  return `${actualDay}, ${actualDayNumber} de ${actualMonth}`;
}

export function transformImage(image){

  const images = {
    '03n': '03d',
    '04n': '04d',
    '09n': '09d',
    '10n': '10d',
    '11n': '11d',
    '13n': '13d',
    '50n': '50d',
  };

  return images[image] || image;
}