import { addDoc, collection } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";
import { getDocRef } from "../../utils/firebaseCommon";

const database = getDatabase();

const handleAddDrug = async ({ name, hours, totalDrugs, daysNotifications }) => {

    const collectionName = collection(database, 'drugs')
    const idPatient = 'AVx8I9uYi4YHeux83DLP'

    await addDoc(collection(database, "drugs"),
        {
            name,
            hours,
            totalDrugs,
            daysNotifications,
            user: getDocRef(idPatient, collectionName),
        })
}

export default handleAddDrug;
