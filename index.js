var arr = []
function createObj (name,phase,gender){
    let result = {
        name : name,
        phase : phase,
        gender : gender
    };
    arr.push(result);
    console.log(result)
}


createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Eric',3,'male')

function getData(nama){
    for(let i=0; i<arr.length; i++){
        if(arr[i].name === nama){
            return arr[i];
        }
    }
    return 'data tidak ditemukan'
}

console.log(getData('Icham'))