import { Product } from "../products-service/products.service";
import { Auction } from "./auction";
import { Offer } from "./offer";
import { UserDTO } from "./user";

export type ProductDetails = {
  owner: UserDTO,
  product: Product,
  auctions: Auction[],
  offers: Offer[]
}
