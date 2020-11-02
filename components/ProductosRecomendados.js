import React from 'react';

const ProductosRecomendados = ({ producto }) => {

    return ( 
        <div className="card">
        <div className="card-img">
          <img src={`${process.env.backend}/api/products/getImage/${producto.image}`} alt="lampara" />
        </div>
        <div className="card-info">
          <form>
            <p className="clasificacion text-center">
              <input id="radio1" type="radio" name="estrellas" value="5" />
              <label htmlFor="radio1">★</label>
              <input id="radio2" type="radio" name="estrellas" value="4" />
              <label htmlFor="radio2">★</label>
              <input id="radio3" type="radio" name="estrellas" value="3" />
              <label htmlFor="radio3">★</label>
              <input id="radio4" type="radio" name="estrellas" value="2" />
              <label htmlFor="radio4">★</label>
              <input id="radio5" type="radio" name="estrellas" value="1" />
              <label htmlFor="radio5">★</label>
            </p>
            <p className="text-center">Opiniones</p>
          </form>
          <h3 className="text-center">{producto.name}</h3>
          <p className="price text-center">$ {producto.price}</p>
          <p className="name text-center">
            Lámpara Tubular negra apropiada para escritorio o para una
            habitación.
          </p>
          <button type="button" className="btn-car">
            <img src="/static/img/carro.png" alt="" />
            Añadir
          </button>
        </div>
      </div>
     );
}
 
export default ProductosRecomendados;