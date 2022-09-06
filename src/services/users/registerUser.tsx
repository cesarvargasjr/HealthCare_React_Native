import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";

const auth = getAuth();
const database = getDatabase();

const handleCreateAccount = async ({ name, email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
    await addDoc(collection(database, "users"), { name, email });
}

export default handleCreateAccount;