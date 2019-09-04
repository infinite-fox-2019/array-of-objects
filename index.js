//release 0
var arr = [];
function createObj (name, phase, gender) {
    let newObj = {
        name: name,
        phase: phase,
        gender: gender
    };
    arr.push(newObj);
};

createObj('Akbar', 1, 'male');
createObj('icha', 1, 'female');
createObj('edwin', 1, 'male');
//release 1
function getData (data) {
    let newData = arr;
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].name === data) {
            return newData[i];
        }
    }  
};

console.log(arr);
console.log('-----------------------------------------------')
console.log(getData('icha'));