"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup"; 

const Register = () => {
    const [error, setError] = useState(null);

    const router = useRouter();


    const validationSchema = yup.object().shape({
        name: yup.string().required("Username is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const res = await fetch("/api/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });
                if (res.status === 201) {
                    router.push("/dashboard/login");
                } else {
                    const data = await res.json();
                    setError(data.error || "Something went wrong!");
                }
            } catch (err) {
                setError("Something went wrong!");
                console.log(err);
            }
        },
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Create an Account</h1>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Username"
                    required
                    className={styles.input}
                    {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
                <input
                    type="text"
                    placeholder="Email"
                    required
                    className={styles.input}
                    {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={styles.input}
                    {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
                <button className={styles.button} type="submit">
                    Register
                </button>
                {error && <div>{error}</div>}
            </form>
            <span className={styles.or}>- OR -</span>
            <Link className={styles.link} href="/dashboard/login">
                Login with an existing account
            </Link>
        </div>
    );
};

export default Register;
