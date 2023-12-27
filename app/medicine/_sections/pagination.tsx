'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  total: number;
}
export default function Pagination(props: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="join">
      {Array.from(Array(props.total).keys()).map((e) => (
        <Link
          replace={true}
          href={createPageURL(e + 1)}
          className={clsx(
            'join-item btn',
            e + 1 === currentPage ? 'btn-active' : ''
          )}
          key={e + 1}
        >
          {e + 1}
        </Link>
      ))}
    </div>
  );
}
