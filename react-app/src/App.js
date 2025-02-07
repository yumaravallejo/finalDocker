import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [productos, setProductos] = useState([]);
  const [productoId, setProductoId] = useState(null);
  const [producto, setProducto] = useState(null);

  // Función para manejar el login
  const login = async () => {
    try {
      const response = await axios.post('https://www.aplicacionweb.com/login', {
        usuario: usuario,
        clave: clave
      });
      alert(response.data.message); // Muestra el mensaje devuelto por el microservicio PHP
    } catch (error) {
      console.error("Error en el login", error);
      alert('Error al intentar iniciar sesión');
    }
  };

  // Función para cargar todos los productos
  const cargarProductos = async () => {
    try {
      const response = await axios.get('https://www.aplicacionweb.com/productos');
      setProductos(response.data); // Actualiza el estado con los productos
    } catch (error) {
      console.error("Error al cargar los productos", error);
      alert('Error al cargar productos');
    }
  };

  // Función para cargar un producto específico por su ID
  const cargarProductoPorId = async (id) => {
    try {
      const response = await axios.get(`https://www.aplicacionweb.com/productos?id_producto=${id}`);
      setProducto(response.data); // Actualiza el estado con el producto
    } catch (error) {
      console.error("Error al cargar el producto por ID", error);
      alert('Error al cargar el producto');
    }
  };

  return (
    <div className="App">
      <h1>Aplicación Web con React y Microservicios</h1>

      {/* Formulario de Login */}
      <div>
        <h2>Iniciar sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>

      {/* Botones para cargar productos */}
      <div>
        <h2>Productos</h2>
        <button onClick={cargarProductos}>Cargar todos los productos</button>
        <input
          type="text"
          placeholder="ID del Producto"
          onChange={(e) => setProductoId(e.target.value)}
        />
        <button onClick={() => cargarProductoPorId(productoId)}>Cargar Producto por ID</button>
      </div>

      {/* Mostrar productos */}
      <div>
        <h3>Lista de Productos:</h3>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>{producto.nombre}</li>
          ))}
        </ul>
      </div>

      {/* Mostrar un solo producto */}
      {producto && (
        <div>
          <h3>Producto seleccionado:</h3>
          <p>{producto.nombre}</p>
        </div>
      )}
    </div>
  );
};

export default App;
