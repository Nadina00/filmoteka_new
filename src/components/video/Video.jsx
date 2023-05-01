import React from "react";
import css from "./Video.module.css"

export const Video = ({ video }) => {
  console.log(video);
  
  return (
    <div className={css.video}>
      <ul className={css.list}>
        {video &&
          video.slice(0,3).map((item) => (
            <li key={item.id}>
              <iframe
                title={item.name}
                width={280}
                height={280}
                src={`https://www.youtube.com/embed/${item.key}`}
                frameborder={0}
                allow={"autoplay; encrypted-media"}
                allowfullscreen
              ></iframe>
            </li>
          ))}
      </ul>
    </div>
  );
};
