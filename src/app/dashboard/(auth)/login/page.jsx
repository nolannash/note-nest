"use client";
import React, { useEffect, useState } from "react";

import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

    return (
    <div className="flex inline-grid  flex-wrap justify-items items-center w-full h-full mt-4">
        <form className="flex flex-grid inline-grid justify-self-center text-black">
            <input type='email' placeholder='email' required></input>
            <input type='password' placeholder='password' required></input>

            <button className='rounded-lg bg-red-200 text-black' onClick={()=>handleSubmit()}>Login</button>

        </form>

        <div className='rounded-lg bg-white text-black w-full text-center justify-self-center mt-4 mb-4'> OR SIGN IN WITH GOOGLE</div>

        <button className='rounded-lg bg-white text-black w-1/8 justify-self-center' onClick={()=> signIn("google")}>Login with Google</button>
    </div>
    )
}

export default Login