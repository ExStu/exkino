// import './globals.css'
'use client'
import '@/assets/styles/globals.scss'
import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { initStore, useStore } from '@/store/store'
import Header from '@/components/header/Header'

const store = initStore()
store.getState()


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg'
  },
  title: 'ExKino - Online theatre',
  description: 'Online movie theatre, find and watch any movie or series',
}

export default function RootLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header/>
          {children}
        </Provider>
      </body>
    </html>
  )
}
