import ProductCard from "./ProdctCard";
import Products from "./Products";

const ProductProfile = () =>{
    return(
        <>
            <h1>Prodct Profile</h1>
            <div className="d-flex justify-content-between flex-wrap">
                {Products.map((product) => 
                    <ProductCard key={product.pid} item = {product}/>
                    
                )}
                
            </div>
        </>
    );
}

export default ProductProfile;