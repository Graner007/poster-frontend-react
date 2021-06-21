const ImageContainer = ({ images }) => {
  const imageCount = images.length;
  const imageUrl = "/media/";
  return (
    <div className="post-image-container">
      {imageCount <= 2 && (
        <div className="single-image-container">
          {images.map((image) => (
            <img src={imageUrl + image.id} alt="" />
          ))}
        </div>
      )}
      {imageCount === 3 && (
        <div className="double-image-container">
          <div className="double-image-first">
            <img src={imageUrl + images[0].id} alt="" />
          </div>
          <div className="double-image-second">
            <div className="double-image-top-right">
              <img src={imageUrl + images[1].id} alt="" />
            </div>
            <div className="double-image-bottom-right">
              <img src={imageUrl + images[2].id} alt="" />
            </div>
          </div>
        </div>
      )}
      {imageCount === 4 && (
        <div className="double-image-container">
          <div className="double-image-first">
            <div className="double-image-top-left">
              <img src={imageUrl + images[0].id} alt="" />
            </div>
            <div className="double-image-top-left">
              <img src={imageUrl + images[1].id} alt="" />
            </div>
          </div>
          <div className="double-image-second">
            <div className="double-image-top-right">
              <img src={imageUrl + images[2].id} alt="" />
            </div>
            <div className="double-image-bottom-right">
              <img src={imageUrl + images[3].id} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
