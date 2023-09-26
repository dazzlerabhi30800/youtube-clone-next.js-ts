"use client";
import styles from '@/app/page.module.css';
import { BsSearch } from 'react-icons/bs';
import { BiBell } from 'react-icons/bi';
import { AiOutlineVideoCamera, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import Image from "next/image";
import { useStore } from '@/context/store';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
    const { showMenu, handleMenu } = useStore();
    const [searchString, setSearchString] = useState('');
    const router = useRouter();



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchString === '') return;
        router.push(`/${searchString}`);
        setSearchString('');
    }

    return (
        <header>
            <div className={styles.logoDiv}>
                <button onClick={handleMenu} className={styles.hamburgerBtn}>
                    {showMenu ?
                        <AiOutlineClose />
                        :
                        <AiOutlineMenu />
                    }
                </button>
                <Image
                    src="/youtube.png"
                    height={25}
                    width={40}
                    alt="youtube"
                />
            </div>
            <form onSubmit={handleSubmit}>
                <input value={searchString} onChange={(e) => setSearchString(e.target.value)} type="text" placeholder="Enter your search" />
                <button className={styles.searchBtn}>
                    <BsSearch />
                </button>
            </form>
            <div className={styles.profileInfo}>
                <Image
                    width={45}
                    height={45}
                    className={styles.profileImg}
                    src="https://randomuser.me/api/portraits/men/51.jpg"
                    alt="zelensky"
                />
                <BiBell className={styles.icon} />
                <AiOutlineVideoCamera className={styles.icon} />
            </div>
        </header>
    )
}