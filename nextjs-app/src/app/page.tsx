import Server from '@/components/server'
import Client from '@/components/client'
import Image from 'next/image'

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <Server />
            <Client />
        </main>
    )
}
