import React from "react";

const Menucard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--container ">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;
          return (
            <>
              <div className="card-container " key={id}>
                <div className="card ">
                  <div className="card-body ">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category} </span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {" "}
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                    <img
                      src={image}
                      alt=""
                      className="card-media rounded-3xl"
                    />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Menucard;
