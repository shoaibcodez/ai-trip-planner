import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";

const MyTrips = () => {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    GetUserTrips();
  }, []);

  //   use to get all user trips

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }
    const tripsCollection = collection(db, "AITrips");

    // Create a query with a where clause
    const q = query(tripsCollection, where("userEmail", "==", user?.email));
    try {
      const querySnapshot = await getDocs(q);
      // first clear then add
      setUserTrips([]);
      querySnapshot.forEach((doc) => {
        // Use doc.data() to access document data
        console.log(doc.id, "=>", doc.data());
        setUserTrips((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      console.error("Error fetching user trips:", error);
    }
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">My Trips</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10 ">
        {/* added skeleton effect */}
        {userTrips?.length > 0
          ? userTrips?.map((trip, index) => (
              <UserTripCardItem key={index} trip={trip} />
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="
          h-[220px]
          w-full animate-pulse rounded-xl bg-slate-200
          "
              ></div>
            ))}
      </div>
    </div>
  );
};

export default MyTrips;
