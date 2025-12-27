import { db } from "../utils/Firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Referencia a la colección de órdenes
const ordersCol = collection(db, "orders");

// Crear una nueva orden
export const createOrder = async (orderData) => {
  try {
    const docRef = await addDoc(ordersCol, {
      ...orderData,
      createdAt: serverTimestamp(), // fecha y hora del servidor
    });
    return docRef.id; // devolvemos el ID de la orden creada
  } catch (error) {
    console.error("Error al crear la orden:", error);
    throw error;
  }
};