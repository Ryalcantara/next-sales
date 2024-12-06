import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Misc from "../page";
import { db } from "@/db";
import AddProduct from "@/components/misc/inventory/add-product";

export default async function InventoryMain() {
  const products = await db.query.productsTable.findMany();
  return (
    <Misc>
      <div className="border w-full p-3">
        <div className="flex justify-end w-full ">
          <AddProduct/>
        </div>
        <Table>
          <TableCaption>Product Inventory.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Misc>
  );
}
