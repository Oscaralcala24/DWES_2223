let objeto = {};

objeto.validarDNI = function(dniUser,arrayUsers){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(recorrerUsuarios(arrayUsers,dniUser)){
                    resolve("DNI existente")
                }else{
                    reject("ERROR: DNI no existente");
                }
            },2000)
        })
}

function recorrerUsuarios(array,dni) {
    const arrayUsers = array;
    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i].dni === dni) {
            return true;
        }        
    }
}
module.exports = objeto;