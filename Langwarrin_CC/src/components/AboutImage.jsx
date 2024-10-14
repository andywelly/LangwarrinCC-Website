import './styles/AboutImage.css';
import communityImage from '../assets/About_Image.jpg'; // Replace with actual image path

function ImageWithTitle() {
    return (
        <div className="image-with-title">

            <img src={communityImage} alt="Community Centre" className="community-image" />
        </div>
    );
}

export default ImageWithTitle;