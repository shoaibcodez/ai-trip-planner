// import React from 'react'

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { IoIosLogOut } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";

const Header = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log(user);
  }, []);

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
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <a href="/" className="cursor-pointer">
        <div>
          <img src="/logo.svg" height={"40px"} width={"40px"} />
        </div>
      </a>
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <a href="/create-trip">
              <Button variant="outline" className="rounded-full">
                + Create Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button variant="outline" className="rounded-full">
                My Trips
              </Button>
            </a>
            <Popover>
              <PopoverTrigger>
                {" "}
                <img
                  src={user.picture}
                  className="h-[35px] w-[35px] rounded-full "
                />
              </PopoverTrigger>
              <PopoverContent className="w-25">
                <h2
                  className="text-red-500 cursor-pointer font-medium flex items-center gap-1"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                    window.location.href = "/";
                  }}
                >
                  <IoIosLogOut color="red" size={30} />
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>

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
    </div>
  );
};

export default Header;
