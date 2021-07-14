// React

export const changeModalState = ( setState ) =>{
    try{
        setState( previous => !previous );
    }catch(err){
        return err;
    }
}