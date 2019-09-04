let arr = []
function createObj (name,phase,gender){
    let object = {}
    object.name = name
    object.phase = phase
    object.gender = gender
    
    arr.push(object)
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')
createObj('Fitra',1,'male')
createObj('Kevin',1,'male')

console.log(arr)

function getData(name){
    for(let i = 0; i<arr.length;i++){
        if(name === arr[i].name){
            return arr[i]
        }
    }
}

console.log(getData('Icha'))