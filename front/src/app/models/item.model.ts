import { Category } from "./category.model";
import { SizeQuantity } from "./sizeQuantity.model";

export class Item {
    name: string;
    price: number;
    description: string;
    quantity: number[];
    collection: string;
}