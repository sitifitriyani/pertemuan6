import { useState } from "react"
import ListProduct from "../components/ListProduct"


export default function Products() {
    const [products,setProducts] = useState ([
        {
            id : 1,
            name : "sandal",
            harga : 40000
        },
        {
            id : 2,
            name : "sepatu",
            harga : 400000
        },
        ]
    )
    return(
        <div>

            <div>
                {products.map((p)=>(
                    <ListProduct key={p.id} 
                    product={p}/>
                ))}
            </div>

            <input type="text" className=" border rounded-md"/>
            <label htmlFor="text"></label>
            <input type="number" />
            <button>Tambah</button>
        </div>
        )
}