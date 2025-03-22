import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import { useProduct } from "../../Context/ContextProvider";
import { ImCancelCircle } from "react-icons/im";
import { GrEdit } from "react-icons/gr";

export default function EditProduct() {
    const { products, updateProduct } = useProduct();
    const [selectedProduct, setSelectedProduct] = useState();

    const handleEditClick = (product) => {
        setSelectedProduct({ ...product });
    };

    const handleChange = (e) => {
        setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setSelectedProduct({ ...selectedProduct, image: URL.createObjectURL(e.target.files[0]) });
    };

    const handleSave = () => {
        updateProduct(selectedProduct);
        setSelectedProduct(null);
    };

    return (
        <div className="h-[92vh] bg-[#002022] overflow-auto p-5">
            <h2 className="text-white text-center text-3xl ">Edit your Products </h2>


            <div className="flex text-white justify-between items-center mt-4 bg-[#013538] rounded shadow-md p-3 font-semibold">
                <div className="flex-1 text-center">Image</div>
                <div className="flex-1 text-center">Product Name</div>
                <div className="flex-1 text-center">Price</div>
                <div className="flex-1 text-center">Category</div>
                <div className="flex-1 text-center">Action</div>
            </div>


            {selectedProduct && (
                <Modal open={open} sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px" }} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={{ width: "400px", height: "400px" }}>
                        <div className="bg-[#054e53] p-7 rounded-lg  relative">

                            {/* Cancel Icon to Close Form */}
                            <ImCancelCircle
                                className="absolute top-1 right-1 text-white text-xl cursor-pointer bg-[#017374]  rounded-lg shadow-md hover:bg-[#005f5f] transition "
                                onClick={() => setSelectedProduct(null)} // Close edit form
                            />

                            <input
                                type="text"
                                name="name"
                                value={selectedProduct.name}
                                onChange={handleChange}
                                className="w-full bg-[#017374] text-white px-2 py-1 rounded mb-2"
                            />
                            <input
                                type="number"
                                name="price"
                                value={selectedProduct.price}
                                onChange={handleChange}
                                className="w-full bg-[#017374] text-white px-2 py-1 rounded mb-2"
                            />
                            <input
                                type="text"
                                name="category"
                                value={selectedProduct.category}
                                onChange={handleChange}
                                className="w-full bg-[#017374] text-white px-2 py-1 rounded mb-2"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                className="w-full bg-[#017374] text-white px-2 py-1 rounded mb-2"
                                onChange={handleImageChange}
                            />
                            <Button sx={{ width: "100%", backgroundColor: "#038c9e", ":hover": { backgroundColor: "#06b3c9" } }} variant="contained" color="primary" onClick={handleSave}>Save</Button>
                        </div>
                    </Box>
                </Modal>
            )}
            <div className="mt-4">
                {
                    products.length > 0 ? (
                        products.map((p) => (
                            <div key={p.id} className="flex justify-between items-center bg-[#013538] p-2  rounded-lg shadow-lg my-2">
                                <div className="flex-1 flex justify-center">
                                    <img src={p.image} alt="Product" className="w-12 h-12 rounded-full object-cover" />
                                </div>
                                <div className="flex-1 flex justify-center font-bold items-center text-white capitalize">{p.name}</div>
                                <div className="flex-1 flex justify-center font-bold items-center text-white">$:{p.price}</div>
                                <div className="flex-1  flex justify-center items-center font-bold text-white capitalize">{p.category}</div>
                                <div className="flex-1  flex justify-center items-center font-bold text-white capitalize">
                                    <Button sx={{backgroundColor:"transparent"}} variant="contained" color="secondary" onClick={() => handleEditClick(p)}><GrEdit /></Button>
                                    {/* <Button onClick={handleOpen}></Button> */}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white text-center mt-4">No products added yet.</p>

                    )
                }
            </div>

            {/* <div className="mt-4">
                {products.length > 0 ? (
                    products.map((p) => (
                        <div key={p.id} className="flex justify-between items-center bg-[#013538] p-2 rounded-lg shadow-lg my-2">
                            <div className="flex-1 flex justify-center">
                                <img src={p.image} alt="Product" className="w-12 h-12 rounded-full object-cover" />
                            </div>
                            <div className="flex-1 text-center text-white">{p.name}</div>
                            <div className="flex-1 text-center text-white">${p.price}</div>
                            <div className="flex-1 text-center text-white">{p.category}</div>
                           
                        </div>
                    ))
                ) : (
                    <p className="text-white text-center mt-4">No products added yet.</p>
                )}
            </div> */}
        </div>
    );
}
