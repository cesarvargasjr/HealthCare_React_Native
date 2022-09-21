import { collection, deleteDoc, doc } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";

const database = getDatabase();
const collectionDrugs = collection(database, 'drugs');

const handleDeleteDrug = async (id: string) => {

    const docRef = doc(database, collectionDrugs.path, id);
    await deleteDoc(docRef)
}

export default handleDeleteDrug;