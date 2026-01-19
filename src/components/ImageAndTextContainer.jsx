import ImageCard from "./ImageCard";
function ImageAndTextContainer(){
    return(
        <div className="ImageAndTextContainer backdrop-blur-2xl">
            <div className="ImageContainer 
            grid grid-cols-2
            p-5 gap-2" >
                <ImageCard src="https://www.anmolherb.in/assets/img/livmuztang-1.webp" alt="Product Image"
                className=""
                ></ImageCard>
                <ImageCard src="https://www.anmolherb.in/assets/img/livmuztang-2.webp" alt="Product Image"
                className=""
                ></ImageCard>
                <ImageCard src="https://www.anmolherb.in/assets/img/livmuztang-3.webp" alt="Product Image"
                className=""
                ></ImageCard>
            </div>
            <div className="TextContainer">

            </div>
        </div>
    )
}

export default ImageAndTextContainer;