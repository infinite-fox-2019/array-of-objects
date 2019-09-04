// RELEASE 0
let arr = []
function createObj(name,phase,gender){
    let obj = {
        name : name,
        phase : phase,
        gender : gender
    }
    return obj
}
arr.push(createObj('Akbar',1,'male'))
arr.push(createObj('Icha',1,'female'))
arr.push(createObj('Adhit',2,'male'))
arr.push(createObj('Tama',2,'male'))
arr.push(createObj('Rifky',3,'male'))
arr.push(createObj('Angga',1,'male'))
console.log(arr);

// RELEASE 1
let searchOne = 'Angga'
console.log(`\n Search : ${searchOne}`);
function getData(name){
    let result = ''
    arr.forEach(function(nameArr,phaseArr,genderArr){
        if(nameArr.name === name){
            result = nameArr
        }
    })
    return result
}
console.log(getData(searchOne));
