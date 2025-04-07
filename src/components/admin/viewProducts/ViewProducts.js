



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductForm = () => {
//   const [products, setProducts] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editingProductId, setEditingProductId] = useState(null);
//   const [productData, setProductData] = useState({
//     name: '',
//     imageURL: '',
//     price: '',
//     category: '',
//     brand: '',
//     desc: ''
//   });

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await axios.get('http://localhost:4242/api/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   const handleEdit = (productId) => {
//     const productToEdit = products.find(product => product._id === productId);
//     setProductData(productToEdit);
//     setEditMode(true);
//     setEditingProductId(productId);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({ ...productData, [name]: value });
//   };

//   const handleSave = async () => {
//     try {
//       await axios.put(`http://localhost:4242/api/products/${editingProductId}`, productData);
//       const response = await axios.get('http://localhost:4242/api/products');
//       setProducts(response.data);
//       setEditMode(false);
//       setEditingProductId(null);
//       setProductData({
//         name: '',
//         imageURL: '',
//         price: '',
//         category: '',
//         brand: '',
//         desc: ''
//       });
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:4242/api/products/${productId}`);
//       const response = await axios.get('http://localhost:4242/api/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Products</h2>
//       <table style={styles.table}>
//         <thead>
//           <tr style={styles.headerRow}>
//             <th>Name</th>
//             <th>Image</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>Brand</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={product._id} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
//               <td>{editMode && editingProductId === product._id ? <input type="text" name="name" value={productData.name} onChange={handleChange} /> : product.name}</td>
//               <td>{editMode && editingProductId === product._id ? <input type="text" name="imageURL" value={productData.imageURL} onChange={handleChange} /> : <img src={`/${product.imageURL}`} alt={product.name} style={styles.image} />}</td>
//               <td>{editMode && editingProductId === product._id ? <input type="text" name="price" value={productData.price} onChange={handleChange} /> : product.price}</td>
//               <td>{editMode && editingProductId === product._id ? <input type="text" name="category" value={productData.category} onChange={handleChange} /> : product.category}</td>
//               <td>{editMode && editingProductId === product._id ? <input type="text" name="brand" value={productData.brand} onChange={handleChange} /> : product.brand}</td>
//               <td>{editMode && editingProductId === product._id ? <textarea name="desc" value={productData.desc} onChange={handleChange} /> : product.desc}</td>
//               <td>
//                 {editMode && editingProductId === product._id ? <button onClick={handleSave}>Save</button> : (
//                   <>
//                     <button onClick={() => handleEdit(product._id)}>Edit</button>
//                     <button onClick={() => handleDelete(product._id)}>Delete</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: '80%',
//     margin: '0 auto'
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse'
//   },
//   headerRow: {
//     backgroundColor: '#4CAF50',
//     color: 'white'
//   },
//   evenRow: {
//     backgroundColor: '#f2f2f2'
//   },
//   oddRow: {
//     backgroundColor: '#ddd'
//   },
//   image: {
//     maxWidth: '100px',
//     height: 'auto'
//   }
// };

// export default ProductForm;
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

  // Modern UI styles
  const styles = {
    container: {
      width: '90%',
      margin: '2rem auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem',
      paddingBottom: '0.75rem',
      borderBottom: '1px solid #eaeaea'
    },
    title: {
      fontSize: '1.75rem',
      fontWeight: '600',
      color: '#2c3e50',
      margin: '0'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: '0',
      fontSize: '0.95rem'
    },
    thead: {
      backgroundColor: '#f8fafc'
    },
    th: {
      padding: '1rem',
      textAlign: 'left',
      fontWeight: '600',
      color: '#4a5568',
      borderBottom: '2px solid #e2e8f0',
      position: 'sticky',
      top: '0',
      backgroundColor: '#f8fafc'
    },
    tr: {
      borderBottom: '1px solid #edf2f7',
      transition: 'all 0.2s'
    },
    trHover: {
      ':hover': {
        backgroundColor: '#f7fafc'
      }
    },
    td: {
      padding: '1rem',
      verticalAlign: 'middle',
      borderBottom: '1px solid #edf2f7'
    },
    image: {
      width: '80px',
      height: '80px',
      objectFit: 'cover',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    inputField: {
      width: '100%',
      padding: '0.5rem',
      border: '1px solid #cbd5e0',
      borderRadius: '4px',
      fontSize: '0.9rem',
      transition: 'border 0.2s',
      outline: 'none'
    },
    textArea: {
      width: '100%',
      padding: '0.5rem',
      border: '1px solid #cbd5e0',
      borderRadius: '4px',
      fontSize: '0.9rem',
      minHeight: '80px',
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    actionCell: {
      display: 'flex',
      gap: '0.5rem'
    },
    button: {
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    editButton: {
      backgroundColor: '#3182ce',
      color: 'white',
    },
    deleteButton: {
      backgroundColor: '#e53e3e',
      color: 'white',
    },
    saveButton: {
      backgroundColor: '#38a169',
      color: 'white',
      width: '100%'
    },
    price: {
      fontWeight: '600',
      color: '#2d3748'
    },
    category: {
      display: 'inline-block',
      padding: '0.25rem 0.5rem',
      backgroundColor: '#ebf4ff',
      color: '#4299e1',
      borderRadius: '4px',
      fontSize: '0.8rem'
    },
    brand: {
      color: '#718096',
      fontStyle: 'italic'
    },
    description: {
      maxWidth: '300px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Product Management</h2>
      </div>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Image</th>
              <th style={styles.th}>Price</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Brand</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} style={styles.tr}>
                <td style={styles.td}>
                  {editMode && editingProductId === product._id ? 
                    <input 
                      type="text" 
                      name="name" 
                      value={productData.name} 
                      onChange={handleChange} 
                      style={styles.inputField}
                    /> : 
                    product.name
                  }
                </td>
                <td style={styles.td}>
                  {editMode && editingProductId === product._id ? 
                    <input 
                      type="text" 
                      name="imageURL" 
                      value={productData.imageURL} 
                      onChange={handleChange} 
                      style={styles.inputField}
                    /> : 
                    <img src={`http://localhost:4242/${product.imageURL}`} alt={product.name} style={styles.image} />
                  }
                </td>
                <td style={styles.td}>
                  {editMode && editingProductId === product._id ? 
                    <input 
                      type="text" 
                      name="price" 
                      value={productData.price} 
                      onChange={handleChange} 
                      style={styles.inputField}
                    /> : 
                    <span style={styles.price}>₹{product.price}</span>
                  }
                </td>
                <td style={styles.td}>
                  {editMode && editingProductId === product._id ? 
                    <input 
                      type="text" 
                      name="category" 
                      value={productData.category} 
                      onChange={handleChange} 
                      style={styles.inputField}
                    /> : 
                    <span style={styles.category}>{product.category}</span>
                  }
                </td>
                <td style={styles.td}>
                  {editMode && editingProductId === product._id ? 
                    <input 
                      type="text" 
                      name="brand" 
                      value={productData.brand} 
                      onChange={handleChange} 
                      style={styles.inputField}
                    /> : 
                    <span style={styles.brand}>{product.brand}</span>
                  }
                </td>
                <td style={styles.td}>
                  {editMode && editingProductId === product._id ? 
                    <textarea 
                      name="desc" 
                      value={productData.desc} 
                      onChange={handleChange} 
                      style={styles.textArea}
                    /> : 
                    <div style={styles.description} title={product.desc}>{product.desc}</div>
                  }
                </td>
                <td style={styles.td}>
                  <div style={styles.actionCell}>
                    {editMode && editingProductId === product._id ? 
                      <button 
                        onClick={handleSave} 
                        style={{...styles.button, ...styles.saveButton}}
                      >
                        Save
                      </button> : 
                      <>
                        <button 
                          onClick={() => handleEdit(product._id)} 
                          style={{...styles.button, ...styles.editButton}}
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(product._id)} 
                          style={{...styles.button, ...styles.deleteButton}}
                        >
                          Delete
                        </button>
                      </>
                    }
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductForm;