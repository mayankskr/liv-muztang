function ImageCard({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`block rounded-2xl object-cover ${className}`}
    />
  );
}
export default ImageCard;
