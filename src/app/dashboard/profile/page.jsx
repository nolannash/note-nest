"use client"
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import styles from './page.module.css';
import Link from 'next/link';

const Profile = () => {
    const { data: session } = useSession();
    const user = session?.user;

    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [password, setPassword] = useState('');

    const handleUpdateProfile = async () => {
        try {
            const response = await fetch('/api/auth/patchUser', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    name,
                    password,
                }),
            });

            const data = await response.json();
            console.log(data); 
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className={styles.container}>
            {user && (
                <div className={styles.form}>
                    <div>Welcome to your profile, {user.name}</div>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className={`${styles.button} ${styles.input}`}
                        onClick={handleUpdateProfile}
                    >
                        Update Profile
                    </button>
                    <Link href='/home'>
                    <button
                        className={`${styles.button}`}>
                        Back To HomePage
                    </button>
                    </Link>
                    <Link href='/'>
                    <button
                        className={`${styles.button}`}>
                        Delete Profile (not working)
                    </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Profile;