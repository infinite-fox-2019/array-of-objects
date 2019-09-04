let arr = []

function createObj(name, phase, gender) {
    arr.push({ name, phase, gender })
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')

console.log(arr);


function getData(name) {
    let result
    arr.forEach(el => {
        if (el.name === name) {
            result = el
        }
    })

    return result
}

console.log(getData('Icha'))