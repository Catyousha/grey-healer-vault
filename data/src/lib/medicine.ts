import {
  MedicinePagination,
  MedicineResponseSchema,
} from '@grey-healer-vault/schema';
import axios from 'axios';
interface FetchAllMedicinesProps {
  page?: number;
}
export async function fetchAllMedicines(
  props: FetchAllMedicinesProps
): Promise<MedicinePagination> {
  return await axios('https://api.nhs.uk/medicines', {
    method: 'GET',
    headers: {
      'subscription-key': process.env['API_KEY'],
      'Content-Type': 'application/json',
    },
    params: {
      page: props.page ?? 1,
    },
  })
    .then(async (e) => {
      const resp = MedicineResponseSchema.parse(e.data);
      const parsed: MedicinePagination = {
        data: resp.significantLink.map((e) => ({
          id: getId(e.url),
          title: e.name,
          description: e.description,
        })),
        pagination: {
          totalPage: getPage(
            resp.relatedLink.filter((e) => e.name === 'Last Page')[0]?.url ?? ''
          ),
          currentPage: getPage(
            resp.relatedLink.filter((e) => e.name === 'Self')[0]?.url ?? ''
          ),
        },
      };
      return parsed;
    })
    .catch((e) => {
      console.log(e);
      return {
        data: [],
        pagination: {
          totalPage: 11,
          currentPage: props.page ?? 1,
        },
      };
    });
}

function getPage(url: string) {
  const regex = /page=(\d+)/;
  const match = url.match(regex);

  if (match) {
    const pageNumber = match[1];
    return Number(pageNumber);
  } else {
    return 1;
  }
}

function getId(url: string) {
  const regex = /\/medicines\/([^/]+)\/$/;
  const match = url.match(regex);

  if (match) {
    const medicineName = match[1];
    return medicineName;
  } else {
    return '';
  }
}
