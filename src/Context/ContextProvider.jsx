import { createContext, useContext, useState } from "react";

const Context = createContext();

export function useProduct() {
    return useContext(Context);
}

export function ContextProvider({ children }) {
    const [products, setProducts] = useState([]);

    // Add Product
    const addProduct = (product) => {
        const newProduct = { id: Date.now(), ...product, image: URL.createObjectURL(product.image) };
        setProducts([...products, newProduct]);
    };

    // Update Product
    const updateProduct = (updatedProduct) => {
        setProducts((prev) => prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
    };

    // Delete Product
    const deleteProduct = (id) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <Context.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
            {children}
        </Context.Provider>
    );
}
