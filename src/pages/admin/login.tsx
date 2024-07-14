import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import recslogo from "../../../public/recshomelogo.svg";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Admin from "@/components/layouts/adminlayout";

// Define types for form data
interface FormData {
  userId: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {

    console.log("User ID:", data.userId);
    console.log("Password:", data.password);
    reset();
  };


  const [isUserIdFocused, setIsUserIdFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleUserIdFocus = () => {
    setIsUserIdFocused(true);
  };

  const handleUserIdBlur = () => {
    setIsUserIdFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  return (
<Admin>
    
    <div
      className="flex flex-col gap-10 justify-center items-center h-screen"
      style={{
        backgroundImage: "url('./img/project/adminpagecover.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        {/* logo */}
        <Link href="./" className="flex items-center">
          <Image src={recslogo} alt={""} className="h-[90px] w-[150px]" />
        </Link>
      </div>
      <div className=" border border-gray-300 rounded-sm shadow-lg bg-white py-5 w-[300px] flex flex-col gap-7 justify-center items-center">
        <div className="space-y-2">
          <h1 className="border-b border-gray-300 py-2 text-[16px] w-[150px] text-center">
            Admin Panel
          </h1>
          <h1 className="text-[18px] font-bold uppercase text-center">login</h1>
        </div>
        <form
          className="flex flex-col gap-3 justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="userId"
            control={control}
            defaultValue=""
            rules={{ required: "User ID is required" }}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="text"
                  placeholder="User ID"
                  className={`h-[40px] w-[250px] outline-none pl-2 border-b ${
                    isUserIdFocused ? "border-black" : "border-gray-300"
                  }`}
                  onFocus={handleUserIdFocus}
                  onBlur={handleUserIdBlur}
                />
                {errors.userId && (
                  <p className="text-red-500 text-[12px]">{errors.userId.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className={`h-[40px] w-[250px] outline-none pl-2 border-b ${
                    isPasswordFocused ? "border-black" : "border-gray-300"
                  }`}
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                />
                {errors.password && (
                  <p className="text-red-500 text-[12px]">{errors.password.message}</p>
                )}
              </div>
            )}
          />
          <Link
            href="./"
            className="w-[250px] flex justify-end text-[12px] text-gray-400"
          >
            forgot password?
          </Link>
          <button className="h-[38px] w-[250px] text-white bg-gray-500" type="submit">
            Log In
          </button>
        </form>
      </div>
      </div>
      </Admin>
 
  );
};

export default Login;
