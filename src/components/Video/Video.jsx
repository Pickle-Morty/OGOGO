import React, { useCallback, useEffect } from "react";
import Styles from "./Video.module.css";

export const Video = ({ video, setVideo }) => {
  const escHandler = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        setVideo(false);
      }
    },
    [setVideo]
  );

  useEffect(() => {
    document.addEventListener("keydown", escHandler, false);
    return () => {
      document.removeEventListener("keydown", escHandler, false);
    };
  }, [escHandler]);

  console.log(
    video.link
      .replace("watch?v=", "embed/")
      .replace("&ab_channel=OGOGOAcademy", "")
  );

  return (
    <div className={Styles.video}>
      <div
        className={Styles.overlay}
        onClick={() => {
          setVideo(false);
        }}
      ></div>
      <div className={Styles.block}>
        <h3 className={Styles.heading}>
          {video.author}
          <button
            onClick={() => {
              setVideo(false);
            }}
          >
            <span className={`material-icons ${Styles.icon}`}>close</span>
          </button>
        </h3>
        {/* <iframe title="YouTube video player" src={ video.link.replace('watch?v=', 'emded/').replace('&ab_channel=OGOGOAcademy', '') } width="100%" height="315" frameBorder="0" allowFullScreen></iframe> */}
        <iframe
          width="100%"
          height="400"
          src={video.link
            .replace("watch?v=", "embed/")
            .replace("&ab_channel=OGOGOAcademy", "")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
