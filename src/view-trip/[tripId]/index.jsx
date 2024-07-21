import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import DailyPlan from "../components/DailyPlan";

const ViewTrip = () => {
  const { tripId } = useParams();
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  //fetching trip data from firebase db
  const GetTripData = async () => {
    //document reference
    const docRef = doc(db, "AITrips", tripId);
    //getting document
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document: ", docSnap.data());
      setTripData(docSnap.data());
    } else {
      console.log("No such document");
      toast("No Trip Found");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Information Section */}
      <InfoSection tripData={tripData} />

      {/* Recommended Hotels */}
      <Hotels tripData={tripData} />

      {/* Daily Plan */}
      <DailyPlan tripData={tripData} />
    </div>
  );
};

export default ViewTrip;
