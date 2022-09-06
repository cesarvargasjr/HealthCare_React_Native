import { collection, deleteDoc, doc } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";

const database = getDatabase();
const idDrug = '5XuvZb9FImAdmkiAoAHG';
const collectionDrugs = collection(database, 'registerDrug');

const handleDeleteDrug = async () => {
    const docRef = doc(database, collectionDrugs.path, idDrug);
    await deleteDoc(docRef)
}

export default handleDeleteDrug;