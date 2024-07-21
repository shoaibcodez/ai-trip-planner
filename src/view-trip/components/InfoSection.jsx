import { Button } from "@/components/ui/button";
import { GetPlaceDetails } from "@/service/GooglePhotoAPI";
import React, { useEffect } from "react";
import { FaShare } from "react-icons/fa";

const InfoSection = ({ tripData }) => {
  //will implement google photo api later

  //   useEffect(() => {
  //     tripData && GetPlacePhoto();
  //   }, [tripData]);

  //   const GetPlacePhoto = async () => {
  //     const data = {
  //       textQuery: tripData?.userSelection?.location?.label,
  //     };
  //     const result = await GetPlaceDetails().then((res) => {
  //       console.log(res.data);
  //     });
  //   };

  return (
    <div>
      <img
        src="/placeholder.jpg"
        className="h-[350px] w-full object-cover rounded-xl "
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2  ">
          <h2 className="font-bold text-xl">
            {tripData?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 text-xs md:text-lg bg-gray-200 rounded-full text-gray-500">
              📅 {tripData?.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-1 px-3 text-xs md:text-lg bg-gray-200 rounded-full text-gray-500">
              💰 {tripData?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 text-xs md:text-lg bg-gray-200 rounded-full text-gray-500">
              🥂 No. Of Travelers: {tripData?.userSelection?.noOfDays} People
            </h2>
          </div>
        </div>

        <Button>
          <FaShare />
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
