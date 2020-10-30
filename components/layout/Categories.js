import React from "react";
import Link from 'next/link';

const Categories = () => {
  return (
    <section className="section categories">
      <div className="div-categories">
        <Link href="/tienda">
          <a className="link-categories">
          <span className="text-categories">Ropa de damas y caballeros</span>
          <img src="/static/img/caballeros.jpg" alt="caballeros" />
          </a>
        </Link>
        <Link href="/tienda">
          <a className="link-categories">
          <span className="text-categories">Muebles para tu hogar</span>
          <img src="/static/img/sala.jpg" alt="sala" />
          </a>
        </Link>
        <Link href="/tienda">
          <a className="link-categories">
          <span className="text-categories">Juguetería para tus niños</span>
          <img src="/static/img/juguetes.jpg" alt="sala" />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
