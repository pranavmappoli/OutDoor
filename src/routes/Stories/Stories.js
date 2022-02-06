import React from "react";
import "./stories.css";
import Story from "../../components/story/Story";
import marrysmithimg from "../../assets/img/nat-8.jpg";
import pranavmimg from "../../assets/img/nat-9.jpg";
import vdomp4 from "../../assets/video/video.mp4";
import vdowebm from "../../assets/video/video.webm";

function Stories() {
  return (
    <section>
      <div className="stories">
        <div className="stories__container--video">
          <video className="container--video" autoPlay muted loop>
            <source src={vdomp4} />
            <source src={vdowebm} />
          </video>
        </div>
        <div className="stories__main-cont">
          <h2>WE MAKE PEOPLE GENUINELY HAPPY</h2>
          <div className="stories__container">
            <Story
              story__author="marry Sm"
              story__img={marrysmithimg}
              story__heading="WOW! MY LIFE IS COMPLETELY DIFFERENT NOW"
              story__para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui."
            />
            <Story
              story__img={pranavmimg}
              story__author="Pranav m"
              story__heading="I HAD THE BEST WEEK EVER WITH MY FAMILY"
              story__para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
