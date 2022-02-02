import { SRLWrapper } from "simple-react-lightbox";


function GalleryBox() {
 return (
   <SRLWrapper>
     <div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/ballet.jpg?raw=true"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Ballet"
    />

    <img
      src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/beluga.jpg?raw=true"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Beluga"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/cat-wth-pearl-earing.jpg?raw=true"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Cat with the pearl earing"
    />

    <img
      src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/donkey-cat.jpg?raw=true"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Donkey Cat"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/garden.jpg?raw=true"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Garden"
    />

    <img
      src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/horse-bike.jpg?raw=true"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Horse Bike"
    />
  </div>
</div>
   </SRLWrapper>
 );
}

export default GalleryBox;