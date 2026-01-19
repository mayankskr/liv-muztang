function ImageCard({src,alt,className}){
    return(
        <div className="relative">
            <img src={src} alt={alt} className={className}/>
        </div>
    )
}
export default ImageCard