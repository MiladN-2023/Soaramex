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
      <meta property="og:image" content="https://media.licdn.com/dms/image/C4D22AQFLswQ_ncK8sA/feedshare-shrink_800/0/1675246356756?e=2147483647&v=beta&t=r9MnZ9POh1KxFkcdYFlsDBLdDRoIYYvLDOplQtjDIEw" />
      <body className={tajawal.className}>

      {/* <NumTrack.Provider value={{NTrack,SetNtrack}}> */}
          {children}
      {/* </NumTrack.Provider> */}

        
        
        </body>
    </html>
  )
}
