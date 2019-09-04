let arr =[];
function createObj(name, phase, gender) {
    let newObj = {
        name: name,
        phase: phase,
        gender: gender
    }
    arr.push(newObj);
}
createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

function getData(name) {
    for(let i = 0; i < arr.length; i++) {
        if(name == arr[i].name) {
            return arr[i];
        }
    }
}

console.log(getData('Icha'));
console.log(getData('Akbar'));
console.log(getData('Adhit'));
console.log(getData('Tama'));
console.log(getData('Rifky'));