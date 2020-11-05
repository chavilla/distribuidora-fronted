import React from 'react';
import { motion } from "framer-motion";

const Hero = () => {
    return ( 
        <div className="hero">
        <div className="hero-img"></div>
        <div className="hero-title" id="">
        <motion.main
        className="main"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.99,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1,
            },
          },
        }}
      >
        <h1 id="title" className="title text-center">Innovación Y Precios Bajos</h1>
      </motion.main>
          <div className="hero-description">
            <p className="text-center">
            Muebles, Juguetes y Ropa
            </p>
          </div>
          <a href="#" id="btnMain" className="btn-main text-center"
            >Compra Ahora</a>
        </div>
      </div>
     );
}
 
export default Hero;