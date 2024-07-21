import React, { useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

const Hero = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const login = useGoogleLogin({
    onSuccess: (res) => GetUserProfile(res),
    onError: (err) => console.log(err),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        // after login close dialog
        setOpenDialog(false);
        window.location.reload();
      });
  };

  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h2 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#3FA2F6]">
          Discover Your Next Adventure with AI:
        </span>{" "}
        Personalized Itineraries at Your Fingertips
      </h2>
      <p className="text-xl text-center text-gray-500">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>

      {!user ? (
        <Button className="cursor-pointer" onClick={() => setOpenDialog(true)}>
          Get Started
        </Button>
      ) : (
        <Link to={"/create-trip"}>
          <Button className="cursor-pointer">Get Started</Button>:
        </Link>
      )}
      {/* when open prop of Dialog Component changes ,we set it to setOpenDialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <DialogDescription></DialogDescription>

          <div>
            <div className="mb-7">
              <img src="/logo.svg" height={"40px"} width={"40px"} />
            </div>
            <div>
              <span className="font-bold text-2xl text-gray-500">
                Sign In With Google
              </span>
              <br></br>
              <span className="text-sm text-gray-400">
                Sign in to the App with Google authentication securely
              </span>
            </div>
            <Button
              className="w-full mt-12 flex gap-4 items-center"
              onClick={login}
            >
              <FcGoogle className="h-7 w-7" />
              Sign In With Google
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <img src="/landing.png" className="-mt-5" />
    </div>
  );
};

export default Hero;
