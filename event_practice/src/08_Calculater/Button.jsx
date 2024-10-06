const Button = ({Style, onButtonClick}) => {

    const buttons = [
        "C",
        "1",
        "2",
        "3",
        "+",
        "4",
        "5",
        "6",
        "*",
        "7",
        "8",
        "9",
        "-",
        "/",
        "=",
        "0",
        ".",
        
    ];


    return(
        <>
            {buttons.map((button, index) => (
                <button key={index} type="submit" className={Style.button} onClick={() => onButtonClick(button)}>{button}</button>
            ))}
            

        </>
    )
}

export default Button;