const user=new Map();

function addUser(name,age,email){
    const userInfo={age,email}
    user.set(name,userInfo)
}

function updateUser(name,age,email){
    if(user.has(name)){
        const userInfo=user.get(name)
        userInfo.age=age
        userInfo.email=email        
    }
}

function deleteUser(name){
    user.delete(name)
}

addUser("alex","20","alex@yahoo.com")
addUser("sam","22","sam@yahoo.com")
console.log(user);

updateUser("alex","23","alex@google.com")
console.log(user);

addUser("kim","25","kim@yahoo.com")
console.log(user);
deleteUser("kim")
console.log(user);