import { Tajawal } from 'next/font/google'
import  './globals.css'


const tajawal = Tajawal({ subsets: ['latin'],weight:['300','500','700'] })

export const metadata = {
  title: 'ارامكس | الرئيسية  ',
  description: 'اكتشف كيف يمكننا مساعدتك على تنمية أعمالك وزيادة أرباحك من خلال حلولنا الاحترافية وشبكتنا اللوجستية العالمية',
  
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="ar" dir='rtl'>
      <link rel="icon" href="../../public/icon.svg" />
      <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70Jh0sMQHkDi5ZJbkGKLj9_xLFe6QRxiGOjF7_fMBv6Et51J0B_vGK65nLWz0RCR-8rs&usqp=CAU" />
      <body className={tajawal.className}>

      {/* <NumTrack.Provider value={{NTrack,SetNtrack}}> */}
          {children}
      {/* </NumTrack.Provider> */}

        
        
        </body>
    </html>
  )
}
