//release 0
var arr = []
function createObj (name, phase, gender) {
    let obj = {}
    if (!obj.name) {
        obj.name = name
    } 
    if (!obj.phase) {
        obj.phase = phase
    } 
    if (!obj.gender) {
        obj.gender = gender
    }
   
    arr.push(obj)
}
createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')

console.log(arr);

//release 1
