import { collection, doc, updateDoc } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";
import { useAuth } from "../../contexts/Auth";
import { getDocRef } from "../../utils/firebaseCommon";

const database = getDatabase();

const handleUpdatePatient = async ({ idPatient, namePatient, date, weight, height }) => {

    const collectionPatients = collection(database, 'patients');
    const docRef = doc(database, collectionPatients.path, idPatient);
    const collectionUsers = 'users';
    const { user } = useAuth();

    try {
        await updateDoc(docRef,
            {
                namePatient,
                date,
                weight,
                height,
                user: getDocRef(user.email, collectionUsers),
            })
    } catch (err) {
        console.error(err)
    }
}

export default handleUpdatePatient;
