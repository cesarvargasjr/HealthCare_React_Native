import { collection, doc, updateDoc } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";
import { getDocRef } from "../../utils/firebaseCommon";

const database = getDatabase();

const handleUpdatePatient = async ({ name, age, weight, height }) => {

    const collectionPatients = collection(database, 'patients');
    const idPatientUpdate = '78XVn181UV53MoWNQ2C9';
    const docRef = doc(database, collectionPatients.path, idPatientUpdate);
    // const idUser = '0nKxmUiAPlX5149JUQXb';
    // const collectionUsers = 'users';

    await updateDoc(docRef,
        {
            name,
            age,
            weight,
            height,
            // user: getDocRef(idUser, collectionUsers),
        })
}

export default handleUpdatePatient;
