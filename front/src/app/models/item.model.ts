import { Category } from "./category.model";
import { SizeQuantity } from "./sizeQuantity.models";

export class Item {
    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number[];
    //category: Category;
}