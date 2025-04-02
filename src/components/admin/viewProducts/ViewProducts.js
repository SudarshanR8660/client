



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    imageURL: '',
    price: '',
    category: '',
    brand: '',
    desc: ''
  });

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:4242/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  const handleEdit = (productId) => {
    const productToEdit = products.find(product => product._id === productId);
    setProductData(productToEdit);
    setEditMode(true);
    setEditingProductId(productId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:4242/api/products/${editingProductId}`, productData);
      const response = await axios.get('http://localhost:4242/api/products');
      setProducts(response.data);
      setEditMode(false);
      setEditingProductId(null);
      setProductData({
        name: '',
        imageURL: '',
        price: '',
        category: '',
        brand: '',
        desc: ''
      });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:4242/api/products/${productId}`);
      const response = await axios.get('http://localhost:4242/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Products</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td>{editMode && editingProductId === product._id ? <input type="text" name="name" value={productData.name} onChange={handleChange} /> : product.name}</td>
              <td>{editMode && editingProductId === product._id ? <input type="text" name="imageURL" value={productData.imageURL} onChange={handleChange} /> : <img src={`/${product.imageURL}`} alt={product.name} style={styles.image} />}</td>
              <td>{editMode && editingProductId === product._id ? <input type="text" name="price" value={productData.price} onChange={handleChange} /> : product.price}</td>
              <td>{editMode && editingProductId === product._id ? <input type="text" name="category" value={productData.category} onChange={handleChange} /> : product.category}</td>
              <td>{editMode && editingProductId === product._id ? <input type="text" name="brand" value={productData.brand} onChange={handleChange} /> : product.brand}</td>
              <td>{editMode && editingProductId === product._id ? <textarea name="desc" value={productData.desc} onChange={handleChange} /> : product.desc}</td>
              <td>
                {editMode && editingProductId === product._id ? <button onClick={handleSave}>Save</button> : (
                  <>
                    <button onClick={() => handleEdit(product._id)}>Edit</button>
                    <button onClick={() => handleDelete(product._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    margin: '0 auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  headerRow: {
    backgroundColor: '#4CAF50',
    color: 'white'
  },
  evenRow: {
    backgroundColor: '#f2f2f2'
  },
  oddRow: {
    backgroundColor: '#ddd'
  },
  image: {
    maxWidth: '100px',
    height: 'auto'
  }
};

export default ProductForm;
