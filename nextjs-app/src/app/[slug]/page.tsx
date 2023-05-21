import Server from '@/components/server'
import Client from '@/components/client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className='flex min-h-[400px] gap-4 flex-col items-center justify-between p-24'>
            <Server />
            <div className='flex flex-col gap-1'>
                <Link className='underline' href='/slug2'>
                    slug2
                </Link>
                <Link className='underline' href='/slug3'>
                    slug3
                </Link>
            </div>
            <Client />
        </main>
    )
}
