import React from 'react';

const Hero = () => {
    return ( 
        <div className="hero">
        <div className="hero-img"></div>
        <div className="hero-title" id="">
          <h1 id="title" className="title text-center"></h1>
          <div className="hero-description">
            <p className="text-center">
            Muebles, Juguetes y Ropa
            </p>
          </div>
          <a href="#" id="btnMain" className="btn-main text-center translate-right"
            >Compra Ahora</a>
        </div>
      </div>
     );
}
 
export default Hero;