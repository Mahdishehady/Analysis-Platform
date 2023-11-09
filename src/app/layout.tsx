
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'portal',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='dark'>
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className+'h-[100vh]'}>
          {children}
        
        </body>
    </html>
  )
}
