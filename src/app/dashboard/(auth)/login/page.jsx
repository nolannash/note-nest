"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
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
    router?.push("/");
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
    <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
        <input
            type="text"
            placeholder="Email"
            required
            className={styles.input}
        />
        <input
            type="password"
            placeholder="Password"
            required
            className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {error && error}
        </form>
        <button
        onClick={() => {
            signIn("google");
        }}
        className={styles.button + " " + styles.google}
        >
        Login with Google
        </button>
        <span className={styles.or}>- OR -</span>
        <Link  href="/dashboard/register">
        <button className={`${styles.button} ${styles.register}`}> Create new account</button> 
        </Link>

    </div>
    );
};

export default Login;