import React, { FC, useEffect } from "react";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionGridHasMap from "./SectionGridHasMap";
import { Helmet } from "react-helmet";
import SectionHero2ArchivePage from "components/SectionHero2ArchivePage/SectionHero2ArchivePage";

export interface ListingRealEstateMapPageProps {
  className?: string;
}

const ListingRealEstateMapPage: FC<ListingRealEstateMapPageProps> = ({
  className = "",
}) => {
  useEffect(() => {
    const $body = document.querySelector("body");
    if ($body) {
      $body.className = "theme-cyan-blueGrey";
    }
    return () => {
      if ($body) {
        $body.className = "";
      }
    };
  }, []);

  return (
    <div
      className={`nc-ListingRealEstateMapPage relative ${className}`}
      data-nc-id="ListingRealEstateMapPage"
    >
      <Helmet>
        <title>Chisfis || Booking React Template</title>
      </Helmet>

      {/* SECTION HERO */}
      <div className="container pb-24 lg:pb-32">
        <SectionHero2ArchivePage className="lg:mt-2" />
      </div>

      {/* SECTION */}
      <div className="container pb-24 lg:pb-32 2xl:pl-10 xl:pr-0 xl:max-w-none">
        <SectionGridHasMap />
      </div>

      <div className="container overflow-hidden">
        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
          />
        </div>

        {/* SECTION */}
        <SectionSubscribe2 className="py-24 lg:py-32" />

        {/* SECTION */}
        <div className="relative py-16 mb-24 lg:mb-32">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>
      </div>
    </div>
  );
};

export default ListingRealEstateMapPage;
