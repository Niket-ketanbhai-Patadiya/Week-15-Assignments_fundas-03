function countProperties(obj){
    return Object.keys(obj).length;
}

const exampleObj={a:'2',b:'3',c:'4'}
console.log(countProperties(exampleObj));