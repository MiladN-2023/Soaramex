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
      <meta property="og:image" content="https://wamda-prod.s3-eu-west-1.amazonaws.com/content/1b71e3a950284be.jpg" />
      <body className={tajawal.className}>

      {/* <NumTrack.Provider value={{NTrack,SetNtrack}}> */}
          {children}
      {/* </NumTrack.Provider> */}

        
        
        </body>
    </html>
  )
}
