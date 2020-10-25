import React from "react";

const Categories = () => {
  return (
    <section className="section categories">
      <div className="div-categories">
        <a href="#" className="link-categories">
          <span className="text-categories">Ropa de damas y caballeros</span>
          <img src="/static/img/caballeros.jpg" alt="caballeros" />
        </a>
        <a href="" className="link-categories">
          <span className="text-categories">Muebles para tu hogar</span>
          <img src="/static/img/sala.jpg" alt="sala" />
        </a>
        <a href="" className="link-categories">
          <span className="text-categories">Juguetería para tus niños</span>
          <img src="/static/img/juguetes.jpg" alt="sala" />
        </a>
      </div>
    </section>
  );
};

export default Categories;
