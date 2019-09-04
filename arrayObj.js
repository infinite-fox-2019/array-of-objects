
let arr = []
function createObj (name, phase, gender){
    let obj={}
    obj.name=name
    obj.phase=phase
    obj.gender=gender
    return obj

}

arr.push(createObj("Akbar", 1, "male"))
arr.push(createObj("Icha", 1, "female"))

console.log(arr)

function getData(name){
    for(let i = 0; i<arr.length; i++){
        if(name===arr[i].name){
            return arr[i]
        }
    }
    

}
console.log(getData("Akbar"))