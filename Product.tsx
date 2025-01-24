import React from "react";

const ProductApp = () => {

    type product = {
        id:number,
        name:string,
        price:number,
        category:string,
        image:string,
    }

    useEffect(() =>{
        products()
    },[])

    const products = async () => {
        try {
            const response = await fetch('./public/products.json')

            if(!response.ok){ throw new Error}
            const data = await response.json()
        } 
        catch (error) 
        {
            console.error(error)
        }   
    }

    const findName = () =>{
        const found = products?.find(x =>
            x.productName.toLowerCase().includes(search.toLowerCase())
        )

    }

    return (
        <div id="container">
            <div>
                <input type="text" value={search} onChange={handleSearch}></input>
                <button onClick={findName}>Search</button>
            </div>
        </div>
      )

}

export default ProductApp