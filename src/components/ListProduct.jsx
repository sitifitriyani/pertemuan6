export default function ListProduct({product}) {
    return(
        <div>
            <h1>{product.name}</h1>
            <p>{product.harga}</p>
        </div>
    )
}