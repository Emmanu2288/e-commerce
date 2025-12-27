import { db } from "../utils/Firebase/firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

// Referencia a la colección de productos
const productsCol = collection(db, "products");

// Obtener todos los productos
export const getAllProducts = async () => {
  const snap = await getDocs(productsCol);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// Obtener un producto por ID
export const getProductById = async (id) => {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("Producto no encontrado");
  return { id: snap.id, ...snap.data() };
};

// Obtener productos filtrados por categoría
export const getProductsByCategory = async (category) => {
  const q = query(productsCol, where("category", "==", category));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};