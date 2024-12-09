import { z } from "zod";

export const schema = z.object({
  from: z.object({
    streetAdress: z.string().min(1),
    city: z.string().min(3),
    postCode: z.coerce.number().positive(),
    country: z.string().min(3),
  }),

  to: z.object({
    name: z.string().min(3),
    email: z.string().email(),
    streetAdress: z.string().min(3),
    city: z.string().min(3),
    postCode: z.coerce.number().min(3),
    country: z.string().min(3),
  }),

  invoiceData: z.object({
    invoiceDate: z.coerce.date(),
    projectDescription: z.string().min(3),
    paymentTerms: z.enum(["1", "7", "14", "30"]),
  }),

  itemList: z
    .array(
      z.object({
        itemName: z
          .string()
          .min(3, "Item name must have at least 3 characters"),
        quantity: z.coerce
          .number()
          .min(1, "Quantity must be at least 1")
          .positive(),
        price: z.coerce.number().positive("Price must be a positive number"),
      })
    )
    .min(1, "At least one item is required"),
});
