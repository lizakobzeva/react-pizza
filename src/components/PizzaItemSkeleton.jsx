import React from "react";
import ContentLoader from "react-content-loader";

const PizzaItemSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="120" r="120" />
    <rect x="-1" y="251" rx="10" ry="10" width="280" height="27" />
    <rect x="1" y="285" rx="10" ry="10" width="280" height="84" />
    <rect x="0" y="377" rx="10" ry="10" width="113" height="38" />
    <rect x="136" y="378" rx="10" ry="10" width="149" height="35" />
  </ContentLoader>
);

export default PizzaItemSkeleton;
