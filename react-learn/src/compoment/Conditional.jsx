function Conditional(){
    let element = null;

    let isLoggin = false;

    if(isLoggin){
        element = <h1> Welcome Admin </h1>
    }else{
        element = <h1> Welcome Guest </h1>
    }

    return(
        <>
            {element}
        </>

    );
}

export default Conditional