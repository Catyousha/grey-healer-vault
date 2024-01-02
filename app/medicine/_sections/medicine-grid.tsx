import { fetchAllMedicines } from 'data/src/lib/medicine';
import Pagination from './pagination';

interface MedicineGridProps {
  page: number;
}
export default async function MedicineGrid(props: MedicineGridProps) {
  const data = await fetchAllMedicines({
    page: props.page,
  });

  return (
    <section className="flex flex-col gap-3 p-5 h-full">
      <Pagination total={data.pagination.totalPage} />
      <ul className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {data.data.map((e) => (
          <MedicineItem
            key={e.id}
            title={e.title}
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
    <li className="flex flex-col gap-2 border border-slate-200 shadow-sm p-3 rounded-md cursor-pointer hover:bg-slate-100">
      <h1 className="font-semibold">{props.title}</h1>
      <p className="line-clamp-3 text-sm">{props.description}</p>
    </li>
  );
};
