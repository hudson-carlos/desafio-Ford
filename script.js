const criptografarCesar = (vin) => {
  const arrVin = vin.split('');

  const meioArr = parseInt(arrVin.length / 2);

  newVin = arrVin.splice(0, meioArr);


  return [...arrVin, ...newVin].join('');

};

const descripitografarCesar = (vin) => {
  const arrVin = vin.split('');

  const meioArr = parseInt(arrVin.length / 2);

  newVin = arrVin.splice(0, meioArr);


  return [...arrVin, ...newVin].join('');
}

const criptografarHex = (vin) => {
  newVin = '';

  const arrVin = vin.split('');

  arrVin.forEach(element => {
    if(typeof element === 'number') newVin += element.toString(16);
    else newVin += element;
  });
  console.log(newVin);
}

criptografarHex('hud50n');

