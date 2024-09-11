import React, { useState } from "react";
import "../components/FreeBook.jsx";

function Cards({ items }) {
  console.log(items);
  return (
    <>
      <div className="mt-5 my-4 p-3 ">
        <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="w-4/2 object-fill">
            <img src={items.image} alt="Movie" />
          </figure>
          <div className="card-body w-full">
            <h2 className="card-title">
              {items.name}
              <div className="badge p-2 badge-warning">{items.category}</div>
            </h2>

            <div className="d flex">
              <p className="text-sm">{items.title}</p>
              <span className="badge badge-outline">Rs. {items.price}</span>
            </div>
            <button className="btn bg-blue-600 mt-2 text-white px-4 rounded hover:bg-red-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
