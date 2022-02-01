import { SRLWrapper } from "simple-react-lightbox";


function GalleryBox() {
 return (
   <SRLWrapper>
     <div className="d-flex align-items-center">
     <figure className="figure m-5">
       <a className="img-fluid figure-img" href="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/ballet.jpg?raw=true/400x300">
         <img className="img-fluid figure-img" src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/ballet.jpg?raw=true/400x300" alt="lightbox" />
       </a>
       </figure>
       <figure className="figure m-5">
       <a className="img-fluid figure-img" href="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/ballet.jpg?raw=true">
         <img className="img-fluid figure-img" src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/ballet.jpg?raw=true" alt="lightbox" />
       </a>
       </figure>
       <figure className="figure m-5">
       <a className="img-fluid figure-img" href="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/ballet.jpg?raw=true">
         <img className="img-fluid figure-img" src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/ballet.jpg?raw=true" alt="lightbox" />
       </a>
       </figure>
       <figure className="figure m-5">
       <a className="img-fluid figure-img" href="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/ballet.jpg?raw=true">
         <img className="img-fluid figure-img" src="https://github.com/pbtrad/Freda-Art/blob/master/assets/images/ballet.jpg?raw=true" alt="lightbox" />
       </a>
       </figure>
       
     </div>
   </SRLWrapper>
 );
}

export default GalleryBox;