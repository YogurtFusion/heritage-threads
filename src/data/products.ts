import pk1 from "@/assets/product-keychain-1.jpg";
import pk2 from "@/assets/product-keychain-2.jpg";
import pk3 from "@/assets/product-keychain-3.jpg";
import pk4 from "@/assets/product-keychain-4.jpg";
import pz1 from "@/assets/product-zip-1.jpg";
import pz2 from "@/assets/product-zip-2.jpg";
import pz3 from "@/assets/product-zip-3.jpg";
import pz4 from "@/assets/product-zip-4.jpg";

export const keychainProducts = [
  { id: "kc-1", name: "Peacock Keychain", price: "₹349", image: pk1 },
  { id: "kc-2", name: "Lotus Keychain", price: "₹349", image: pk2 },
  { id: "kc-3", name: "Fish Keychain", price: "₹299", image: pk3 },
  { id: "kc-4", name: "Sun Keychain", price: "₹299", image: pk4 },
  { id: "kc-5", name: "Peacock Keychain II", price: "₹349", image: pk1 },
  { id: "kc-6", name: "Lotus Keychain II", price: "₹349", image: pk2 },
];

export const zipChainProducts = [
  { id: "zc-1", name: "Floral Zip Chain", price: "₹249", image: pz1 },
  { id: "zc-2", name: "Bird Zip Chain", price: "₹249", image: pz2 },
  { id: "zc-3", name: "Elephant Zip Chain", price: "₹279", image: pz3 },
  { id: "zc-4", name: "Peacock Zip Chain", price: "₹279", image: pz4 },
  { id: "zc-5", name: "Floral Zip Chain II", price: "₹249", image: pz1 },
  { id: "zc-6", name: "Bird Zip Chain II", price: "₹249", image: pz2 },
];

export const trendingProducts = [
  keychainProducts[0],
  zipChainProducts[2],
  keychainProducts[1],
  zipChainProducts[3],
  keychainProducts[2],
  zipChainProducts[0],
];
