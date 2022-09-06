import { collection, deleteDoc, doc } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";

const database = getDatabase();
const collectionPatients = collection(database, 'patients');
const idPatientDelete = '******************';

const handleDeletePatient = async () => {
    const docRef = doc(database, collectionPatients.path, idPatientDelete);
    await deleteDoc(docRef)
}

export default handleDeletePatient;
