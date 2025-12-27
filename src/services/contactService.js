import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/Firebase/firebase";

export const createContactMessage = async (messageData) => {
  try {
    const docRef = await addDoc(collection(db, "contactMessages"), {
      ...messageData,
      createdAt: new Date(),
    });
    return docRef.id; // devuelve el ID del mensaje guardado
  } catch (error) {
    throw new Error("Error al guardar el mensaje de contacto");
  }
};