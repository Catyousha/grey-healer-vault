import {z} from 'zod'

export const MedicinePaginationSchema = z.object({
    data: z.array(z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
    })),
    pagination: z.object({
        totalPage: z.number(),
        currentPage: z.number(),
    }),
});

export type MedicinePagination = z.infer<typeof MedicinePaginationSchema>;