import type { Metadata } from 'next'
import { Inter ,Prompt, Sriracha, K2D } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
})
const prompt = Prompt({ 
  subsets: ['latin','thai'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-promt',
})
const sriracha = Sriracha({ 
  subsets: ['latin','thai'],
  weight: '400',
  variable: '--font-sriracha',
})
const ktd = K2D({ 
  subsets: ['latin','thai'],
  weight: ['100','200','300','400','500','600','700','800'],
  variable: '--font-ktd',
})

export const metadata: Metadata = {
  title: 'Body Dough',
  description: 'Body Dough app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${prompt.variable} ${inter.variable} ${sriracha.variable} ${ktd.variable} w-screen h-screen flex items-center justify-center`}>
      <div className="bg-[#e09b68] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#fbe2e7] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        {children}
      </body>
    </html>
  )
}
