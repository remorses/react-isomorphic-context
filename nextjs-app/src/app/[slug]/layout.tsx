import { context } from '../../../context'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: any
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <context.Provider value={{ hello: 'slug ' + params.slug }}>
                    {children}
                </context.Provider>
            </body>
        </html>
    )
}