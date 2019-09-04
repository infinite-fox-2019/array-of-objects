let result = []
function createObj (name, phase, gender) {
    let obj = {}
    obj.name = name
    obj.phase = phase
    obj.gender = gender

    result.push(obj)
    return result
}

function getData (name) {
    for(let i=0; i<result.length; i++){
        if(result[i].name===name){
            return result[i]
        }
    }
    return 'Tidak Ditemukan'
}
console.log(createObj('Akbar',1,'Male'))
console.log(createObj('Icha',1,'Female'))
console.log(getData('Icha'))
