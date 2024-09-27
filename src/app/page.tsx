import Link  from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { getProducts } from "./products/products.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "dorce-dynamic"

async function HomePage() {

  const products = await getProducts()
  console.log(products)

  return (
    <>
      <div className="flex justify-between">
      <h1>
        NextNestApp
      </h1>
      <Link 
      href="/products/new"
      className={buttonVariants()}
      >CreateProduct
      </Link>  
    </div>

    <div className="grid grid-cols-4 gap-3">
    {products.map((product) =>(
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              {product.name}
              <span className="text-sm font-bold text-gray-500">
                ${product.price}
              </span>
            </CardTitle>
          <img src={product.image} alt=""/>
          </CardHeader>
          <CardContent>
            <p>
              {product.description}
            </p>
            <Button className="mt-5">
              Comprar
            </Button>
          </CardContent>
        </Card>
      ))
    }
  </div>
  </>
  
  );
}
export default HomePage;