function ImageCard({src,alt,className}){
    return(
        <img src={src} alt={alt} loading="lazy" className={`object-cover rounded-2xl block ${className}`}/>
  
    )
}
export default ImageCard