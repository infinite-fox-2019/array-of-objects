var arr = []
function createObj(name, phase, gender){
    var obj = {}
    obj.name = name
    obj.phase = phase
    obj.gender = gender
    arr.push(obj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

console.log(arr);

function getData(name){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name == name){
            return arr[i]
        }
    }
}

console.log(getData('Icha'));
console.log(getData('Tama'));