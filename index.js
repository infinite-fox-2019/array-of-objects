var arr = []
function createObj (name, phase, gender) {
    // YOUR CODE...
    arr.push({name: name, phase: phase, gender: gender})
    return arr
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

console.log(arr)



function getData (name) {
    // YOUR CODE HERE...
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name){
            return arr[i]
        }
    }

}

console.log(getData('Icha'))
console.log(getData('Tama'))