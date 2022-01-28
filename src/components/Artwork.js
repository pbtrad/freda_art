import { SRLWrapper } from "simple-react-lightbox";


function GalleryBox() {
 return (
   <SRLWrapper>
     <div>
       <a className="img-fluid img-thumbnail" href="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/ballet.jpg?raw=true">
         <img className="img-fluid img-thumbnail" src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/ballet.jpg?raw=true" alt="lightbox" />
       </a>
       <a className="img-fluid img-thumbnail" href="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/beluga.jpg?raw=true">
         <img className="img-fluid img-thumbnail" src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/beluga.jpg?raw=true" alt="lightbox1" />
       </a>
       <a className="img-fluid img-thumbnail" href="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/birdhouse.jpg?raw=true">
         <img className="img-fluid img-thumbnail" src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/birdhouse.jpg?raw=true" alt="lightbox2" />
       </a>
       <a className="img-fluid img-thumbnail" href="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/cat-wth-pearl-earing.jpg?raw=true">
         <img className="img-fluid img-thumbnail" src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/cat-wth-pearl-earing.jpg?raw=true" alt="lightbox3" />
       </a>
     </div>
   </SRLWrapper>
 );
}

export default GalleryBox;