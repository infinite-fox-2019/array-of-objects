let arr = []
function createObj(name, phase, gender){
    let obj = {
        name: name,
        phase: phase,
        gender: gender
    }
    arr.push(obj)
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')
console.log(arr)

function getData(name){
    for(let i = 0; i < arr.length; i++){
        if(name === arr[i].name)return arr[i]
    }
}

console.log(getData('Icha'))