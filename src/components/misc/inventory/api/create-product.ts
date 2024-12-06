"use server";
import { db } from "@/db";
import { productsTable } from "@/db/schema";
import { revalidatePath } from "next/cache";

  
  type FormValues = {
    name: string,
    price: number,
    quantity: number
  };


export async function createProduct(data: FormValues) {
    
    await db.insert(productsTable).values({
        name: data.name,
        price: data.price,
        quantity: data.quantity,
    });

    revalidatePath("/miscellaneous/inventory"); // 👈 BOOM! Fresh data
}