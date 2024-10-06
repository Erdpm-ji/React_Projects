import Style from "./slide.module.css"

const Slide = () => {
    return (
        <>
            <div className={Style.slideshowcontainer}>

                <div className={[Style.mySlides, Style.fade]}>
                    <img src="./img/Java22.jpg"/>
                        <div className={Style.text}>Caption Text</div>
                </div><a className={Style.prev} >&#10094;</a>
                <a className={Style.next} >&#10095;</a>
            

        </div >
        </>     
    )
}

export default Slide;