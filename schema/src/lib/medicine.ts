import {z} from 'zod';

export const MedicineResponse = z.object({
  significantLink: z.array(z.custom<MedicineItemResponseType>()),
  relatedLink: z.array(z.custom<MedicinePaginationResponseType>()),
});

const MedicineItemResponse = z.object({
    url: z.string(),
    name: z.string(),
    description: z.string(),
});

type MedicineItemResponseType = z.infer<typeof MedicineItemResponse>

const MedicinePaginationResponse = z.object({
    url: z.string(),
    name: z.string(),
    description: z.string(),
});

type MedicinePaginationResponseType = z.infer<typeof MedicinePaginationResponse>;