import { addDoc, collection } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";
import { getDocRef } from "../../utils/firebaseCommon";

const database = getDatabase();

const handleAddDrug = async ({ user, patient, name, hours, totalDrugs, quantityDrugs, daysNotifications }) => {

    const collectionName = collection(database, 'drugs');

    await addDoc(collection(database, "drugs"),
        {
            name,
            hours,
            totalDrugs,
            quantityDrugs,
            daysNotifications,
            user: getDocRef(patient.id, collectionName),
            namePatient: patient.namePatient,
            email: user.email,
        })
}

export default handleAddDrug;
