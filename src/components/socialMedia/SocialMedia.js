import React from "react";
import FollowAt from "react-social-media-follow";

const links = [
  "https://www.instagram.com/lashchivskii/?hl=uk",
  "https://www.facebook.com/lashchivskyi",
  "https://github.com/lashchivskyi",
];

export default function socialMedia() {
  return (
    <div className="icon-button">
      <FollowAt links={links} />
    </div>
  );
}
