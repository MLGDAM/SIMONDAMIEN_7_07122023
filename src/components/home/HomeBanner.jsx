import React from "react";
import Banner from "../../layout/banner";
import homeBanner from "../../images/banner.png";

const HomeBanner = () => {
    return(
        <Banner
            title='Chez vous, partout et ailleurs'
            src={homeBanner}
        />
    )
}

export default HomeBanner;
  
