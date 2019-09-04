var arr = []
function createObj(name,phase,gender) {
    let obj = {
        name : name,
        phase : phase,
        gender : gender
    }
    return arr.push(obj)
}
createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit',2,'male')
createObj('Tama',2,'male')
createObj('Rifky',3,'male')
console.log(arr)
console.log('==============================')
function getData(name) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i].name == name) return arr[i]
    }
    return 'Invalid Input'
}

console.log(getData('Icha'))
console.log(getData('Tama'))