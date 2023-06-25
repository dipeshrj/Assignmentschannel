const laptops = [
    {
      name: "Inspiron 3511",
      price: 55000,
      brand: "dell",
    },
    {
      name: "Acer Nitro",
      price: 109000,
      brand: "acer",
    },
    {
      name: "TUF F15",
      price: 205000,
      brand: "asus",
    },
    {
      name: "Vivobook",
      price: 76000,
      brand: "asus",
    },
    {
      name: "Aspire 5",
      price: 87500,
      brand: "acer",
    },
    {
      name: "Modern 14",
      price: 92000,
      brand: "msi",
    },
    {
      name: "Thinkpad X13",
      price: 149000,
      brand: "lenovo",
    },
    {
      name: "Legion 5 PRO",
      price: 188000,
      brand: "lenovo",
    },
    {
      name: "Predator Helios 300",
      price: 169000,
      brand: "acer",
    },
    {
      name: "GP66 Leopard",
      price: 199000,
      brand: "msi",
    },
  ];
  // find
  const found= laptops.find((item,index,array)=> item.brand==="lenovo")
  console.log(found)
    

// filter
  const filtered = laptops.filter((item,index,array)=> item.brand==="lenovo")
  console.log(filtered);

  
  
