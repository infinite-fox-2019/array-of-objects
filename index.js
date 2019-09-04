const arr = []
const createObj = (name, phase, gender) => {
  const obj = {
    name,
    phase,
    gender
  }
  arr.push(obj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Rizky', 2, 'male')
createObj('Dwi', 0, 'female')
console.log(arr)
console.log(`\n========\n`)

const getData = (name) => {
  for(let i = 0; i < arr.length; i++) {
    let person = arr[i]
    if(person.name === name) return person
  }
}

console.log(getData('Icha'))
