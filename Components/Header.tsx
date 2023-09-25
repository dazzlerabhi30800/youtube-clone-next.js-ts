import styles from '@/app/page.module.css';
import { BsSearch } from 'react-icons/bs';
import { BiBell } from 'react-icons/bi';
import { AiOutlineVideoCamera, AiOutlineMenu } from 'react-icons/ai';

import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div className={styles.logoDiv}>
                <button className={styles.hamburgerBtn}>
                    <AiOutlineMenu />
                </button>
                <Image
                    src="/youtube.png"
                    height={25}
                    width={40}
                    alt="youtube"
                />
            </div>
            <form>
                <input type="text" placeholder="Enter your search" />
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