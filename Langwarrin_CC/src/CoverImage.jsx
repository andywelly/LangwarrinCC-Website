import Image from 'react-bootstrap/Image';
import Imagesrc from './assets/Background.jpg';
import './CoverImage.css'; // Make sure to import the CSS file

function CoverImage() {
  return (
    <div className="cover-image-container">
      <Image src={Imagesrc} fluid className="cover-image" />
      <div className="cover-text">
        Langwarrin Community Centre
      </div>
    </div>
  );
}

export default CoverImage;