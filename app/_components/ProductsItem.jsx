import Image from "next/image";
import Link from "next/link";
// import { ListMinus } from "lucide-react";

const ProductsItem = ({ product }) => {
  return (
    <Link
      href={"/product/" + product.id}
      className="bg-gray-50 rounded-lg border border-transparent hover:border-primary hover:cursor-pointer hover:shadow-md "
    >
      <Image
        src={product.attributes?.banner?.data?.attributes?.url}
        width={400}
        height={350}
        alt="Image"
        className=" rounded-t-lg  "
      />
      <div className="flex justify-between items-center p-3  ">
        <div>
          <h2 className="text-[12px] md:text-[14px] font-medium line-clamp-2">
            {product?.attributes?.title}
          </h2>

          <h2 className="text-[10px]  text-gray-400">
            {/* <ListMinus /> */}
            {product?.attributes?.category}
          </h2>
        </div>
        <h2 className="text-[10px] md:text-[14px] text-red-700">{product?.attributes?.price} $</h2>
      </div>
    </Link>
  );
};
export default ProductsItem;
