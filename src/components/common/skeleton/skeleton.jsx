import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={4}
    width={280}
    height={440}
    viewBox="0 0 280 440"
    backgroundColor="#a77d35"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="4" y="0" rx="0" ry="0" width="300" height="400" />
  </ContentLoader>
)

export default MyLoader