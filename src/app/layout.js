
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/footer/Footer'
import { AuthProvider } from '@/components/AuthProvider/AuthProvider'
import { NavProvider } from '@/context/NavContext/NavContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Note Nest',
  description: 'straight forward and simple, notes for visual minds',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavProvider>  
      <AuthProvider>
          <Nav/>
            {children}
          <Footer/>
        </AuthProvider>
        </NavProvider>
      </body>
    </html>
  )
}
