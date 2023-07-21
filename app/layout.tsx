import React from 'react';
import './globals.css';
import { Roboto_Flex } from 'next/font/google';
import JournalLog from '@/components/journal-log';
import data from '@/data/journal.json'

const journalLength = data.journal.length

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
          <div className="w-64 h-full border-r border-gray-200">
            <div className="h-16 bg-white px-6 drop-shadow-md flex flex-col justify-center">
              <div className="text-md font-bold">Journal Log</div>
              <div className="text-sm">{journalLength} entries</div>
            </div>
            <div className="h-[calc(100dvh-4rem)] overflow-y-auto bg-white">
              <JournalLog />
            </div>
          </div>
          <main className="flex flex-1 flex-col overflow-y-hidden">
            <header className="h-16 bg-white px-6 drop-shadow-md flex items-center justify-center">
              <a className="text-xl font-extrabold">Daily Journal</a>
            </header>
            <div className="flex flex-1 items-center justify-center bg-[#F5F5F5]">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
