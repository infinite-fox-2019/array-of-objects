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