console.log('Tarea 2/04/2025')

const productos = [
    {
      id: 1,
      name: "iPhone 14",
      category: "Smartphones",
      price: 4500,
      stock: 5,
      images: [
        "iphone14_front.jpg",
        "iphone14_back.jpg",
        "iphone14_side.jpg"
      ],
      specs: [
        "Pantalla Super Retina XDR",
        "Chip A15 Bionic",
        "Cámara dual de 12 MP"
      ],
      versions: [
        { color: "Negro", storage: "128GB" },
        { color: "Azul", storage: "256GB" }
      ]
    },
    {
      id: 2,
      name: "Laptop Lenovo ThinkPad",
      category: "Laptops",
      price: 3200,
      stock: 10,
      images: [
        "thinkpad_front.jpg",
        "thinkpad_keyboard.jpg"
      ],
      specs: [
        "Intel Core i7 11th Gen",
        "RAM 16GB DDR4",
        "SSD 512GB"
      ],
      versions: [
        { color: "Negro", os: "Windows 11" },
        { color: "Gris", os: "Ubuntu" }
      ]
    },
    {
      id: 3,
      name: "Audífonos Bluetooth Sony WH-1000XM4",
      category: "Accesorios",
      price: 450,
      stock: 15,
      images: [
        "sony_wh1000xm4.jpg",
        "sony_case.jpg"
      ],
      specs: [
        "Cancelación de ruido activa",
        "30 horas de batería",
        "Conexión multipunto"
      ],
      versions: [
        { color: "Negro" },
        { color: "Plateado" }
      ]
    }
  ];


  const evento = `{
    "arreglo": [
      {
        "id": 1,
        "name": "iPhone 14",
        "category": "Smartphones",
        "price": 4500,
        "stock": 5,
        "images": [
          "iphone14_front.jpg",
          "iphone14_back.jpg",
          "iphone14_side.jpg"
        ],
        "specs": [
          "Pantalla Super Retina XDR",
          "Chip A15 Bionic",
          "Cámara dual de 12 MP"
        ],
        "versions": [
          { "color": "Negro", "storage": "128GB" },
          { "color": "Azul", "storage": "256GB" }
        ]
      },
      {
        "id": 2,
        "name": "Laptop Lenovo ThinkPad",
        "category": "Laptops",
        "price": 3200,
        "stock": 10,
        "images": [
          "thinkpad_front.jpg",
          "thinkpad_keyboard.jpg"
        ],
        "specs": [
          "Intel Core i7 11th Gen",
          "RAM 16GB DDR4",
          "SSD 512GB"
        ],
        "versions": [
          { "color": "Negro", "os": "Windows 11" },
          { "color": "Gris", "os": "Ubuntu" }
        ]
      },
      {
        "id": 3,
        "name": "Audífonos Bluetooth Sony WH-1000XM4",
        "category": "Accesorios",
        "price": 450,
        "stock": 15,
        "images": [
          "sony_wh1000xm4.jpg",
          "sony_case.jpg"
        ],
        "specs": [
          "Cancelación de ruido activa",
          "30 horas de batería",
          "Conexión multipunto"
        ],
        "versions": [
          { "color": "Negro" },
          { "color": "Plateado" }
        ]
      }
    ]
  }`;
  



  function searchByName(query) {
    // se extrae el arreglo 
    const productos = JSON.parse(evento).arreglo; 
    const results = [];
  
    for (let i = 0; i < productos.length; i++) {
     // se busca los productos
      const producto = productos[i];
      if (producto.name.toLowerCase().includes(query.toLowerCase())) {
        results.push(producto);
      }
    }
  
    return results;
  }
  

  function listProducts(){
    const arrayProducto = JSON.parse(evento);
    for ( item of arrayProducto.arreglo){

        console.log(item);

    }


  }

  function start(){
    // se lista los  productos
    console.log('Listado de productos')
    listProducts();
    // se busca un producto por el nombre
    console.log('Busqueda ("lapto") ')
    const resultados = searchByName("laptop");
    console.log(resultados.length === 0 ? 'No se encontró un resultado': resultados);
      



  }

  start()

  
  