const Boxes = [
    {
      id: 1,
      name: "Emerald Blaze",
      price: 144.69,
      image: "/images/case225.webp",
      status: "New",
      color: "from-emerald-400 to-green-600",
    },
    {
      id: 2,
      name: "Crimson Fury",
      price: 276.17,
      image: "/images/case226.webp",
      status: "New",
      color: "from-red-500 to-rose-700",
    },
    {
      id: 3,
      name: "Sapphire Dream",
      price: 189.99,
      image: "/images/case227.webp",
      status: "New",
      color: "from-blue-400 to-indigo-600",
    },
    {
      id: 4,
      name: "Golden Glory",
      price: 256.5,
      image: "/images/case228.webp",
      status: "Available",
      color: "from-yellow-400 to-amber-600",
    },
    {
      id: 5,
      name: "Amethyst Aura",
      price: 199.99,
      image: "/images/case229.webp",
      status: "Available",
      color: "from-purple-400 to-indigo-600",
    },
    {
      id: 6,
      name: "Neon Striker",
      price: 299.99,
      image: "/images/case230.webp",
      status: "Risky",
      color: "from-green-400 to-blue-500",
    },
    {
      id: 7,
      name: "Inferno Blaze",
      price: 178.5,
      image: "/images/case231.webp",
      status: "Available",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 8,
      name: "Arctic Frost",
      price: 145.0,
      image: "/images/case232.webp",
      status: "Available",
      color: "from-cyan-400 to-blue-600",
    },
    {
      id: 9,
      name: "Nebula Nexus",
      price: 289.99,
      image: "/images/case233.webp",
      status: "Available",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 10,
      name: "Toxic Hazard",
      price: 167.99,
      image: "/images/case234.webp",
      status: "New",
      color: "from-green-500 to-yellow-400",
    },
    {
      id: 11,
      name: "Phantom Ops",
      price: 234.5,
      image: "/images/case235.webp",
      status: "Risky",
      color: "from-gray-600 to-gray-900",
    },
    {
      id: 12,
      name: "Cyber Punk",
      price: 189.99,
      image: "/images/case236.webp",
      status: "Available",
      color: "from-pink-500 to-purple-600",
    },
    {
      id: 13,
      name: "Dragon's Hoard",
      price: 399.99,
      image: "/images/case237.webp",
      status: "New",
      color: "from-red-600 to-yellow-500",
    },
    {
      id: 14,
      name: "Stealth Ops",
      price: 299.99,
      image: "/images/case238.webp",
      status: "Available",
      color: "from-gray-700 to-gray-900",
    },
    {
      id: 15,
      name: "Quantum Flux",
      price: 349.99,
      image: "/images/case239.webp",
      status: "New",
      color: "from-blue-400 to-purple-600",
    },
    {
      id: 16,
      name: "Solar Flare",
      price: 179.99,
      image: "/images/case240.webp",
      status: "Available",
      color: "from-yellow-500 to-orange-600",
    },
    {
      id: 17,
      name: "Cosmic Surge",
      price: 199.99,
      image: "/images/case241.webp",
      status: "Available",
      color: "from-blue-500 to-teal-600",
    },
    {
      id: 18,
      name: "Mystic Shadow",
      price: 149.99,
      image: "/images/case242.webp",
      status: "Available",
      color: "from-gray-500 to-black",
    },
    {
      id: 19,
      name: "Vortex Spin",
      price: 229.99,
      image: "/images/case243.webp",
      status: "Available",
      color: "from-purple-500 to-indigo-700",
    },
    {
      id: 20,
      name: "Glacier Peak",
      price: 199.99,
      image: "/images/case244.webp",
      status: "Available",
      color: "from-cyan-400 to-blue-700",
    },
    {
      id: 21,
      name: "Phoenix Rise",
      price: 289.99,
      image: "/images/case245.webp",
      status: "New",
      color: "from-orange-500 to-red-700",
    },
    {
      id: 22,
      name: "Void Walker",
      price: 199.50,
      image: "/images/case246.webp",
      status: "Available",
      color: "from-violet-600 to-purple-900",
    },
    {
      id: 23,
      name: "Thunder Strike",
      price: 245.99,
      image: "/images/case247.webp",
      status: "Risky",
      color: "from-yellow-300 to-amber-500",
    },
    {
      id: 24,
      name: "Frost Bite",
      price: 169.99,
      image: "/images/case248.webp",
      status: "New",
      color: "from-blue-300 to-cyan-600",
    },
    {
      id: 25,
      name: "Dark Matter",
      price: 329.99,
      image: "/images/case249.webp",
      status: "Available",
      color: "from-gray-800 to-purple-900",
    },
    {
      id: 26,
      name: "Plasma Pulse",
      price: 219.99,
      image: "/images/case250.webp",
      status: "Available",
      color: "from-pink-400 to-blue-600",
    },
    {
      id: 27,
      name: "Forest Spirit",
      price: 189.50,
      image: "/images/case251.webp",
      status: "New",
      color: "from-green-300 to-emerald-600",
    },
    {
      id: 28,
      name: "Ocean Deep",
      price: 259.99,
      image: "/images/case252.webp",
      status: "Available",
      color: "from-blue-400 to-cyan-800",
    },
    {
      id: 29,
      name: "Molten Core",
      price: 299.99,
      image: "/images/case253.webp",
      status: "Risky",
      color: "from-red-500 to-orange-700",
    },
    {
      id: 30,
      name: "Star Dust",
      price: 279.99,
      image: "/images/case254.webp",
      status: "New",
      color: "from-yellow-200 to-amber-400",
    },
  ];
  
  export  {Boxes};