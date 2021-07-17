import axios from "axios"; 

// React


export const changeModalState = ( setState ) =>{
    try{
        setState( previous => !previous );
    }catch(err){
        return err;
    }
}

export const isAuthificationPassed = () => {
    let token = localStorage.token;
    return token || false; 
}

 

export const doRequest  = ( axiosInfo ) => {
  console.log(1);
    return new Promise((rs, rj) => {
      try {
        axios(axiosInfo)
          .then((response) => {
            rs(response.data);
          })
          .catch((err) => {  
            rj(err);
          });
      } catch (err) { 
         rj(err);
      }
    });
  }
 

 