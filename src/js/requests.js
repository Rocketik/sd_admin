import { doRequest } from "./lib/front-libik";
import { host, imageUrl, requestRoutes } from './config';
import { inoToast } from './../components/toast/toast';


export const getGalleryData = async (callBack) => {
    try {
        const { data } = await doRequest({
            method: "get",
            url: host + requestRoutes.projects(),
            headers: {
                token: localStorage.token,
            }
        });
        data.items.forEach(el => {
            delete el["title-en"];
            delete el["project-type"];
        });
        const toState = {
            head: [
                "ID",
                "Շապիկ",
                "Հերթականություն",
                "Բաննեռ",
                "Վերնագիր",
                "Գործողություններ",
            ],
            data: data.items.map(el => Object.values(el))
        };
        return callBack(toState);
    }
    catch (err) {
        console.log(1);
        inoToast.error(err);
    }

};

export const getPartenrsData = async (callBack) => {
    try {
        const { data } = await doRequest({
            method: "get",
            url: host + requestRoutes.partners(),
            headers: {
                token: localStorage.token,
            }
        });
        const toState = data.items.map( el => {
            el.img = imageUrl + el.img ;
            return el
        } );
        
        return callBack(toState);
    }
    catch (err) {
        console.log(1);
        inoToast.error(err);
    }

};
export const getNotificationUsers = async (callBack) => {
    try {
        const { data } = await doRequest({
            method: "get",
            url: host + requestRoutes.notifications(),
            headers: {
                token: localStorage.token,
            }
        });
         
        return callBack( data );
    }
    catch (err) {
        console.log(1);
        inoToast.error(err);
    }

};