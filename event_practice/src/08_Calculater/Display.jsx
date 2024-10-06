const Display = ({Style, calVal}) => {
    return(
        <>
            <input type="text" className={Style.display} readOnly value={calVal || 0}></input>
        </>
    )
}

export default Display;