
//release 0
let arr = []
function createObj(name, phase, gender) {
    arr.push({ name, phase, gender })
}

createObj('Uzai', '1', 'male')
createObj('Akbar', '1', 'male')
createObj('Icha', '1', 'female')
createObj('Adit', '2', 'male')
createObj('Tama', '2', 'male')
createObj('Rifky', '3', 'male')

console.log(arr);

//release 1

function getData(name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) return arr[i]
    }
    return `there is no ${name} in our list`
}
console.log(`\nget data`);
console.log(getData(`Icha`));
console.log(getData(`sumanto`));
