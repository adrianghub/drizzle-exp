import { eq }  from 'drizzle-orm/expressions'
import { db } from '@/db/db';
import { citizens, countries } from '@/db/schema';

export const dynamic = "force-dynamic";

export default async function  Home() {
  const data = await db.select({
    id: citizens.id,
    name: citizens.fullName,
    country: {
      id: countries.id,
      name: countries.name,
    }
  })
  .from(citizens)
  .leftJoin(countries, eq(citizens.id, countries.id));
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {data.map((citizen) => (
          <p className="text-6xl font-bold" key={citizen.id}>
            {citizen.country?.name && (
              <>
              {`${citizen.name} - ${citizen.country?.name}`}
              </>
              )
            }
          </p>
        ))}
      </div>
    </main>
  )
}
