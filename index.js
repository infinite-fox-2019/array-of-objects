// Release 0
let arr = [];
function arrayToObject(name,phase,gender){
    let obj = {};
    obj.name = name;
    obj.phase = phase;
    obj.gender = gender;
    arr.push(obj);
}

arrayToObject('Akbar', 1, 'male');
arrayToObject('Icha', 1, 'female');

console.log(arr);

// Release 1

function getData(name){
    for(let i = 0; i<arr.length; i++){
        if(arr[i].name == name){
            return arr[i];
        }
    }
}

console.log(getData('Icha'));
