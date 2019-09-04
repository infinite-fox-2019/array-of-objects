let arr = [];

function createObj (name, phase, gender) {
    let obj = {
        name: name,
        phase: phase,
        gender: gender
    }
    return arr.push(obj)
}

let obj_1 = createObj('Akbar', 1, 'male')
let obj_2 = createObj('Icha', 1, 'female')
let obj_3 = createObj('Adhit', 2, 'male')
let obj_4 = createObj('Tama', 2, 'male')
let obj_5 = createObj('Rifky', 3, 'male')
console.log(arr);

function getData(name) {

    for (let i = 0; i < arr.length; i++) {
        if (name === arr[i].name) {
            return arr[i]
        }
    }
}

console.log(getData('Icha'));


