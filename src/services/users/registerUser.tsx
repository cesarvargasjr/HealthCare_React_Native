import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";

const auth = getAuth();
const database = getDatabase();
const users = collection(database, 'users');

const handleCreateAccount = async ({ name, email, password }) => {

    createUserWithEmailAndPassword(auth, email, password)
    const res = await getDoc(doc(database, users.path, email))

    if (res.exists()) {
        return false
    } else {
        setDoc(doc(database, users.path, email), { name, email })
        return true
    }
}

export default handleCreateAccount;
