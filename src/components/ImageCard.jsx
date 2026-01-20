function ImageCard({src,alt,className}){
    return(
        <img src={src} alt={alt} loading="lazy" className={`w-full object-cover rounded-2xl block ${className}`}/>
  
    )
}
export default ImageCard