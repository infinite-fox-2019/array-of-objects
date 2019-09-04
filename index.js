var arr =[];
function createObj(name,phase,gender){
    let obj = {
        name:name,
        phase:phase,
        gender:gender
    }
    arr.push(obj);
    return arr;
}
createObj("Akbar",1,"male");
createObj("Icha",1,"female");
createObj("Adhit",2,"male");
createObj("Tama",2,"male");
createObj("Rifky",3,"male");
console.log(arr);

function getData (str){
    let bool = false;
    for (let i = 0;i<arr.length;i++){
        if(arr[i].name == str){
            return arr[i];
        }
    }
    if(!bool){
        return "Nama tidak terdapat dalam daftar";
    }
}
console.log(getData("Icha"));
console.log(getData("Akbar"));
console.log(getData("Budi"));