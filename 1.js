let temperatureC = +prompt('Введите температуру в градусах цельсия')
let temperatureF = (9/5) * temperatureC + 32
alert(`Цельсий: ${temperatureC}, Фаренгейт: ${temperatureF.toFixed(2)}`)