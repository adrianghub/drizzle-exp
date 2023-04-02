import Image from 'next/image'
import { db } from '@/db/db';
import { countries } from '@/db/schema';

export const dynamic = "force-dynamic";

export default async function  Home() {
  const data = await db.select().from(countries);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">{data[0]?.name}</h1>
    </main>
  )
}
