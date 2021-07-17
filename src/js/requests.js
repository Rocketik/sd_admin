import { doRequest } from "./lib/front-libik";
import { host, requestRoutes } from './config';
import { inoToast } from './../components/toast/toast';


export const getData = async (callBack) => {
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
                "Հերտականություն",
                "Բաննեռ",
                "Վերնագիր",
                "Գործողություններ",
            ],
            data: data.items.map(el => Object.values(el))

        }
        return callBack(toState)
    }
    catch (err) {
        console.log(1);
        inoToast.error(err)
    }

}
