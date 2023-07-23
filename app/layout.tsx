import React from 'react';
import './globals.css';
import { Roboto_Flex } from 'next/font/google';
import SideBar from '@/components/sidebar';


const roboto_flex = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Daily Journal',
  description: 'An easy way to journal everyday!',
  themeColor: 'white',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto_flex.className}>
        <div className="relative flex h-[calc(100dvh)] text-gray-900">
          <SideBar />
          <main className="flex flex-1 flex-col overflow-y-hidden">
            <header className="h-16 bg-white px-6 drop-shadow-md flex items-center justify-center">
              <a className="text-xl font-extrabold">Daily Journal</a>
            </header>
            <div className="flex flex-1 items-center justify-center bg-[#F5F5F5]">
              <div className='card-wrapper flex justify-center max-w-2xl'>
                <div className={'card border p-4 drop-shadow-md rounded mb-4 bg-white flex flex-col'}>
                  {children}
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
