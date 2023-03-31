import Image from 'next/image'
import { Inter } from 'next/font/google'
import { db } from '@/db/db';
import { countries } from '@/db/schema';

const inter = Inter({ subsets: ['latin'] })

export default async function  Home() {
  const data = await db.select().from(countries);

  console.log(data);
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">{data[0]?.name}</h1>
    </main>
  )
}
