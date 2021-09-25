import { Category } from "./category.model";
import { SizeQuantity } from "./sizeQuantity.models";

export class Item {
    name: string;
    price: number;
    description: string;
    quantity: number[];
    collection: string;
}