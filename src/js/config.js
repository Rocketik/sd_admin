export const host = "http://91.199.38.161:3007";


export const imageUrl = host + "/public/";

export const requestRoutes = {
    login: (id)=>routesFunc(id,"login","auth"),
    resetPasswordFirst: (id)=>routesFunc(id,"start-reset-password","auth"),
    resetPasswordSecond: (id)=>routesFunc(id,"verify-reset-password","auth"),
    resetPasswordThird: (id)=>routesFunc(id,"reset-password","auth"),
    projects: (type,id)=>routesFunc(id,"projects","crud",type),
    partners: (type,id)=>routesFunc(id,"partners","crud",type),
    notifications: (type,id)=>routesFunc(id,"notifications","crud",type),
    sendMessage: (type,id)=>routesFunc(id,"send-msg","mail",type),
    // courses: (id)=>routesFunc(id,"courses","crud"),
    // comments: (id)=>routesFunc(id,"comments","crud"),
    // galleryimages: (id)=>routesFunc(id,"galleryimages","crud")
}
const routesType = {
    crud : "api/data",
    auth : "api/auth",
    mail : "api"
}

function routesFunc(id,rout,method,type){
    if(!id){
        // debugger
        return `/${routesType[method]}/${type ? type+"/" : ""}${rout}`
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
 


