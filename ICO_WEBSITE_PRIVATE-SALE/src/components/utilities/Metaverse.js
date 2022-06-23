import React from "react";
import "./metaverse.scss";
import metaverse from "./../../images/metaverse1.jpg";

const Metaverse = () => {
  return (
    <article className="postcard ">
      <span className="postcard__img_link">
        <img className="postcard__img" src={metaverse} alt="Image Title" />
      </span>{" "}
      <div className="postcard__text">
        <h1 className="postcard__title blue"> ROG METAVERSE </h1>{" "}
        <div className="postcard__bar"> </div>{" "}
        <div className="postcard__preview-txt">
          <p className="text-white">
            {" "}
            The ROG metaverse will be developed and designed with the City and
            Jungle environment.{" "}
          </p>{" "}
          <p className="text-white">
            {" "}
            We will be using Unity 3 D to develop the metaverse.Agora audio chat
            plugin will be used to handle high quality audio chat.Photon server
            will be used to manage all the roaming.AWS server will be used to
            handle all other aspects.{" "}
          </p>{" "}
        </div>
      </div>{" "}
    </article>
  );
};

export default Metaverse;
