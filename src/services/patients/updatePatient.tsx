import { collection, doc, updateDoc } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";

const database = getDatabase();

const handleUpdatePatient = async ({ idPatient, namePatient, date, weight, height }) => {

    const collectionPatients = collection(database, 'patients');
    const docRef = doc(database, collectionPatients.path, idPatient);

    try {
        await updateDoc(docRef,
            {
                namePatient,
                date,
                weight,
                height,
            })
    } catch (err) {
        console.error(err)
    }
}

export default handleUpdatePatient;
