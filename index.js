const data = []

const createObj = (name, phase, gender) => {
  data.push({ name, phase, gender })
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

const getData = name => {
  for (let value of data) {
    if (value.name == name) return value
  }
}

console.log(getData('Icha'))
console.log(getData('Adhit'))
