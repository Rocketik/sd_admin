export let host = "http://192.168.0.214:3007";

export const requestRoutes = {
    login: (id)=>routesFunc(id,"login","auth"),
    resetPasswordFirst: (id)=>routesFunc(id,"start-reset-password","auth"),
    resetPasswordSecond: (id)=>routesFunc(id,"verify-reset-password","auth"),
    resetPasswordThird: (id)=>routesFunc(id,"reset-password","auth"),
    projects: (type,id)=>routesFunc(id,"projects","crud",type),
    // courses: (id)=>routesFunc(id,"courses","crud"),
    // comments: (id)=>routesFunc(id,"comments","crud"),
    // galleryimages: (id)=>routesFunc(id,"galleryimages","crud")
}
const routesType = {
    crud : "api/data",
    auth : "api/auth",
}

function routesFunc(id,rout,method,type){
    if(!id){
        // debugger
        return `/${routesType[method]}/${type ? type+"/" : "/"}${rout}`
    }else{
        if(Array.isArray(id)){            
            return `/`+routesType[method] + `/${type ? type : ""}`+ id.map( item => `/${item}`).join(``);
        }else{
            return `/${routesType[method]}/${type ? type : "/"}${rout}/${id}`
        }
    }
}

export function buildGetQuery(object) {
    let query = "";
    for (let key in object) {
        query += key + "=" + object[key] + "&";
    }

    let res = "?" + query.substring(0, query.length - 1);
    return res.length === 1 ? "" : res;
}
 


