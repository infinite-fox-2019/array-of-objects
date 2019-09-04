let array = [];

function createObj(name, phase, gender) {
    let obj = {
        name: name,
        phase: phase,
        gender: gender
    };
    array.push(obj);
}

function getData(name) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) return array[i];
    }
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');

console.log(array);
console.log(getData('Icha'));
