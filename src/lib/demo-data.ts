export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  spicy?: boolean;
  details?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export interface Restaurant {
  id: string;
  name: string;
  tagline: string;
  phone: string;
  address: string;
  hours: string;
  heroImage: string;
  logo?: string;
  whatsapp?: string;
  categories: MenuCategory[];
}

export const demoRestaurant: Restaurant = {
  id: "taqueria-el-sol",
  name: "Taquería El Sol",
  tagline: "Sabor auténtico desde 1998",
  phone: "(512) 555-0142",
  address: "1234 S Congress Ave, Austin, TX 78704",
  hours: "Lun a Sáb: 7am a 10pm • Dom: 8am a 9pm",
  heroImage: "",
  whatsapp: "15125550142",
  categories: [
    {
      id: "tacos",
      name: "Tacos",
      icon: "🌮",
      items: [
        {
          id: "t1",
          name: "Taco al Pastor",
          description: "Cerdo marinado con piña, cilantro, cebolla y salsa verde",
          details: "Nuestro taco más popular. Cerdo marinado en achiote y chiles, cocinado al trompo con piña fresca. Servido en tortilla de maíz hecha a mano con cilantro, cebolla y nuestra salsa verde casera.",
          price: 3.50,
          image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80",
          popular: true,
        },
        {
          id: "t2",
          name: "Taco de Barbacoa",
          description: "Res cocida lentamente, cilantro, cebolla y salsa roja",
          details: "Res cocinada por 8 horas hasta quedar suave y jugosa. Servida con cilantro fresco, cebolla picada y nuestra salsa roja de chile de árbol.",
          price: 4.00,
          image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800&q=80",
          popular: true,
        },
        {
          id: "t3",
          name: "Taco de Carnitas",
          description: "Cerdo frito con guacamole y salsa de tomatillo",
          details: "Cerdo frito en su propia grasa hasta quedar crujiente por fuera y tierno por dentro. Acompañado de guacamole fresco y salsa de tomatillo.",
          price: 3.75,
          image: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=800&q=80",
        },
        {
          id: "t4",
          name: "Taco de Birria",
          description: "Res en consomé, queso fundido, cebolla y cilantro",
          details: "Taco de birria estilo Jalisco. Tortilla bañada en consomé de chile y dorada en el comal con queso Oaxaca fundido. Se sirve con consomé caliente para remojar.",
          price: 4.50,
          image: "https://images.unsplash.com/photo-1628260412297-a3377e45006f?w=800&q=80",
          popular: true,
          spicy: true,
        },
        {
          id: "t5",
          name: "Taco de Lengua",
          description: "Lengua de res cocida suave, cilantro y cebolla",
          details: "Lengua de res cocida lentamente con especias hasta quedar perfectamente suave. Picada y servida con cilantro, cebolla y salsa verde.",
          price: 4.25,
          image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
        },
        {
          id: "t6",
          name: "Taco de Pollo",
          description: "Pollo asado con lechuga, crema y salsa verde",
          details: "Pechuga de pollo asada con especias mexicanas, servida con lechuga fresca, crema ácida y salsa verde de tomatillo.",
          price: 3.25,
          image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=800&q=80",
        },
      ],
    },
    {
      id: "burritos",
      name: "Burritos",
      icon: "🌯",
      items: [
        {
          id: "b1",
          name: "Burrito de Carne Asada",
          description: "Carne asada, arroz, frijoles, crema, guacamole y pico de gallo",
          details: "Tortilla de harina grande rellena de carne asada a las brasas, arroz mexicano, frijoles refritos, crema, guacamole fresco y pico de gallo.",
          price: 10.99,
          image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
          popular: true,
        },
        {
          id: "b2",
          name: "Burrito al Pastor",
          description: "Al pastor con arroz, frijoles, piña, cilantro y salsa",
          details: "Burrito generoso relleno de carne al pastor, arroz, frijoles, trozos de piña fresca, cilantro y salsa roja.",
          price: 9.99,
          image: "https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?w=800&q=80",
        },
        {
          id: "b3",
          name: "Burrito Vegetariano",
          description: "Frijoles, arroz, lechuga, guacamole, crema y pico de gallo",
          details: "Opción vegetariana llena de sabor. Frijoles negros, arroz, lechuga, guacamole cremoso, crema y pico de gallo fresco.",
          price: 8.99,
          image: "https://images.unsplash.com/photo-1574343635612-8c3691eb4e2c?w=800&q=80",
        },
      ],
    },
    {
      id: "platos",
      name: "Platos Fuertes",
      icon: "🍽️",
      items: [
        {
          id: "p1",
          name: "Enchiladas Rojas",
          description: "3 enchiladas de pollo bañadas en salsa roja con crema y queso",
          details: "Tres tortillas de maíz rellenas de pollo desmenuzado, bañadas en nuestra salsa roja de guajillo, cubiertas con crema, queso fresco y cebolla. Servidas con arroz y frijoles.",
          price: 12.99,
          image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=800&q=80",
          popular: true,
        },
        {
          id: "p2",
          name: "Torta Cubana",
          description: "Jamón, milanesa, salchicha, queso, aguacate, frijoles y jalapeño",
          details: "La torta más completa. Pan telera tostado con jamón, milanesa de res, salchicha, queso Oaxaca, aguacate, frijoles refritos y jalapeños en escabeche.",
          price: 11.99,
          image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=800&q=80",
          spicy: true,
        },
        {
          id: "p3",
          name: "Quesadilla Grande",
          description: "Tortilla de harina con queso, carne al gusto y guacamole",
          details: "Tortilla de harina de 12 pulgadas con queso Oaxaca derretido, tu elección de carne, guacamole y crema. Servida con salsa y limones.",
          price: 9.99,
          image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=800&q=80",
        },
        {
          id: "p4",
          name: "Chilaquiles Verdes",
          description: "Totopos en salsa verde, crema, queso, cebolla y huevo",
          details: "Totopos crujientes bañados en salsa verde de tomatillo, cubiertos con crema, queso fresco, cebolla y dos huevos estrellados. El desayuno perfecto.",
          price: 10.99,
          image: "https://images.unsplash.com/photo-1653543693229-4b29269a4e5a?w=800&q=80",
        },
      ],
    },
    {
      id: "bebidas",
      name: "Bebidas",
      icon: "🥤",
      items: [
        {
          id: "d1",
          name: "Agua de Horchata",
          description: "Agua de arroz con canela y vainilla",
          details: "Bebida refrescante hecha con arroz molido, canela y un toque de vainilla. Preparada fresca todos los días. Vaso de 20oz.",
          price: 3.50,
          image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=800&q=80",
          popular: true,
        },
        {
          id: "d2",
          name: "Agua de Jamaica",
          description: "Agua de flor de jamaica natural",
          details: "Infusión natural de flor de jamaica con un toque de azúcar. Refrescante y llena de antioxidantes. Vaso de 20oz.",
          price: 3.50,
          image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
        },
        {
          id: "d3",
          name: "Agua de Tamarindo",
          description: "Agua de tamarindo natural",
          details: "Agua fresca preparada con pulpa de tamarindo natural. El balance perfecto entre dulce y ácido. Vaso de 20oz.",
          price: 3.50,
          image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80",
        },
        {
          id: "d4",
          name: "Jarritos",
          description: "Refresco mexicano: mandarina, tamarindo, o toronja",
          details: "Refresco mexicano de botella. Disponible en sabores mandarina, tamarindo y toronja. Botella de 370ml.",
          price: 2.50,
          image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80",
        },
        {
          id: "d5",
          name: "Café de Olla",
          description: "Café tradicional con piloncillo y canela",
          details: "Café preparado al estilo tradicional mexicano en olla de barro con piloncillo y canela. Caliente y reconfortante.",
          price: 3.00,
          image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=800&q=80",
        },
      ],
    },
    {
      id: "postres",
      name: "Postres",
      icon: "🍮",
      items: [
        {
          id: "ps1",
          name: "Flan Napolitano",
          description: "Flan casero de vainilla con caramelo",
          details: "Flan cremoso de vainilla horneado al baño maría con caramelo dorado. Receta familiar preparada todos los días.",
          price: 5.99,
          image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=800&q=80",
          popular: true,
        },
        {
          id: "ps2",
          name: "Churros con Chocolate",
          description: "4 churros con canela y chocolate caliente",
          details: "Cuatro churros recién hechos, espolvoreados con azúcar y canela. Servidos con chocolate caliente espeso para remojar.",
          price: 6.99,
          image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
        },
        {
          id: "ps3",
          name: "Tres Leches",
          description: "Pastel de tres leches con crema batida y canela",
          details: "Bizcocho esponjoso empapado en una mezcla de leche condensada, leche evaporada y crema. Cubierto con crema batida y un toque de canela.",
          price: 6.99,
          image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80",
        },
      ],
    },
  ],
};
