import { MedicineResponse } from '@grey-healer-vault/schema';
import { request } from 'undici';

export default async function MedicineGrid() {
  const response = await request('https://api.nhs.uk/medicines', {
    headers: {
      'subscription-key': process.env['API_KEY'],
    },
  }).then(async (e) => MedicineResponse.parse(await e.body.json()));

  return (
    <section className="p-5 h-full">
      <ul className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {response.significantLink.map((e) => (
          <MedicineItem
            key={e.name}
            title={e.name}
            description={e.description}
          />
        ))}
      </ul>
    </section>
  );
}

interface MedicineItemProps {
  title: string;
  description: string;
}
const MedicineItem = (props: MedicineItemProps) => {
  return (
    <li className="flex flex-col gap-2 border border-slate-200 shadow-sm p-3 rounded-md">
      <h1 className="font-semibold">{props.title}</h1>
      <p className="line-clamp-3 text-sm">{props.description}</p>
    </li>
  );
};
