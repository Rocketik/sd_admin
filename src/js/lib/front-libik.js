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

export const isAuthTokenHasExpired = ( err, history ) => {
  const { data } = err.response;
        
  if(data.errCode === 430){
    delete localStorage.token;
    history.push("/");
  }
}
 

export const doRequest  = ( axiosInfo ) => { 
    return new Promise((rs, rj) => {
      try {
        axios(axiosInfo)
          .then((response) => {
            rs(response.data);
          })
          .catch((err) => {   
            console.log(err);
            rj(err);
          });
      } catch (err) { 
         rj({
            noBackend: true,
            err,
          });
      }
    });
  }
 

 