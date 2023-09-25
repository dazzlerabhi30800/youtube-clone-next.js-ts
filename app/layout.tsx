import Navbar from '@/Components/Navbar';
import './globals.css'
import styles from './page.module.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header';
import StoreProvider from '@/context/store';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Youtube Clone',
  description: 'Created by Abhishek Choudhary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          <main className={styles.main}>
            <Navbar />
            <div style={{ padding: "1rem" }}>
              {children}
            </div>
          </main>
        </StoreProvider>
      </body>
    </html>
  )
}
