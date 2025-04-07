




import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    brand: '',
    desc: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const categories = ['Men','Women','Kids'];

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('price', product.price);
      formData.append('category', product.category);
      formData.append('brand', product.brand);
      formData.append('desc', product.desc);
      formData.append('image', product.image);

      const response = await axios.post('http://localhost:4242/api/products/create-product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success("Product added successfully");
      console.log('Product created successfully:', response.data);

      // Reset form fields
      setProduct({
        name: '',
        price: '',
        category: '',
        brand: '',
        desc: '',
        image: null,
      });
    } catch (error) {
      toast.error("Error while adding product");
      console.error('Error creating product:', error);
    }
  };

  const inputStyle = {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Add New Product</h2>
      <label style={styles.label}>Name:</label>
      <input type="text" name="name" value={product.name} onChange={handleInputChange} style={inputStyle} />
      <label style={styles.label}>Price:</label>
      <input type="text" name="price" value={product.price} onChange={handleInputChange} style={inputStyle} />
      <label style={styles.label}>Category:</label>
      <select name="category" value={product.category} onChange={handleInputChange} style={inputStyle}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <label style={styles.label}>Brand:</label>
      <input type="text" name="brand" value={product.brand} onChange={handleInputChange} style={inputStyle} />
      <label style={styles.label}>Description:</label>
      <input type="text" name="desc" value={product.desc} onChange={handleInputChange} style={inputStyle} />
      <label style={styles.label}>Image:</label>
      <input type="file" name="image" onChange={handleImageChange} style={inputStyle} />
      <button type="submit" style={buttonStyle}>Create Product</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  label: {
    marginBottom: '5px',
    color: '#333',
  },
};

export default ProductForm;

