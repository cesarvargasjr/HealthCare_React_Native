import { collection, deleteDoc, doc } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";

const database = getDatabase();
const collectionPatients = collection(database, 'patients');

const handleDeletePatient = async (id: string) => {

    const docRef = doc(database, collectionPatients.path, id);
    await deleteDoc(docRef)
}

export default handleDeletePatient;
