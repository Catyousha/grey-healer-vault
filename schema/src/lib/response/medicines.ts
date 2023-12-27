import {z} from 'zod';

export const MedicineResponseSchema = z.object({
  significantLink: z.array(z.custom<MedicineItemResponse>()),
  relatedLink: z.array(z.custom<MedicinePaginationResponse>()),
});

const MedicineItemResponseSchema = z.object({
    url: z.string(),
    name: z.string(),
    description: z.string(),
});

type MedicineItemResponse = z.infer<typeof MedicineItemResponseSchema>

const MedicinePaginationResponseSchema = z.object({
    url: z.string(),
    name: z.string(),
    description: z.string(),
});

type MedicinePaginationResponse = z.infer<typeof MedicinePaginationResponseSchema>;