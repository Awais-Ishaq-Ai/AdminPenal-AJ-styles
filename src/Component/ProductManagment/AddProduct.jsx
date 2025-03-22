import { useState } from "react";
import { Button } from "@mui/material";
import { MdOutlineAddShoppingCart, MdOutlineDeleteForever } from "react-icons/md";
import { GrEdit } from "react-icons/gr";

import { useProduct } from "../../Context/ContextProvider";

export default function AddProduct() {
    const { products, addProduct, deleteProduct } = useProduct();
    const [product, setProduct] = useState({ name: "", price: "", category: "", image: null });

    // Handle Input Change
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // Handle Image Upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProduct({ ...product, image: file });
    };

    // Add Product to Context
    const handleAddProduct = () => {
        if (!product.name || !product.price || !product.category || !product.image) {
            alert("Please fill all fields!");
            return;
        }
        addProduct(product);
        setProduct({ name: "", price: "", category: "", image: null });
    };

    return (
        <div className="h-[92vh] bg-[#002022] overflow-auto p-5">
            {/* Input Fields */}
            <div className="mt-5 flex gap-3">
                <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} className="flex-1 bg-[#054e53] text-white placeholder-gray-300 px-2 py-1 rounded outline-none" />
                <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} className="flex-1 bg-[#054e53] text-white placeholder-gray-300 px-2 py-1 rounded outline-none" />
                <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} className="flex-1 bg-[#054e53] text-white placeholder-gray-300 px-2 py-1 rounded outline-none" />
                <label className="cursor-pointer bg-[#017374] text-white px-6 rounded-lg shadow-md hover:bg-[#005f5f] transition">
                    Choose Image
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>

                <Button sx={{ minWidth: "140px" }} variant="contained" color="success" onClick={handleAddProduct}>
                    <MdOutlineAddShoppingCart className="mr-2" />
                    <span className="text-xs text-center">Add Product</span>
                </Button>
            </div>

            {/* Product List */}

            <div className="flex text-white justify-between items-center mt-6 bg-[#013538] rounded shadow-md p-3 font-semibold">
                <div className="flex-1 text-center">Image</div>
                <div className="flex-1 text-center">Product Name</div>
                <div className="flex-1 text-center">Price</div>
                <div className="flex-1 text-center">Category</div>
                <div className="flex-1 text-center">Actions</div>
            </div>
            <div className="mt-4">
                {products.length > 0 ? (
                    products.map((p) => (
                        <div key={p.id} className="flex justify-between items-center bg-[#013538] p-2 rounded-lg shadow-lg my-2">
                            <div className="flex-1 flex justify-center">
                                <img src={p.image} alt="Product" className="w-12 h-12 rounded-full object-cover" />
                            </div>
                            <div className="flex-1 capitalize text-center text-white">{p.name}</div>
                            <div className="flex-1 text-center text-white">${p.price}</div>
                            <div className="flex-1 capitalize text-center text-white">{p.category}</div>
                            <div className="flex-1 flex justify-center">
                                <MdOutlineDeleteForever className="text-white text-2xl cursor-pointer hover:text-red-500 transition" onClick={() => deleteProduct(p.id)} />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-center mt-4">No products added yet.</p>
                )}
            </div>
        </div>
    );
}
