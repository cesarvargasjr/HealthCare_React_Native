import { collection, doc, updateDoc } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";
import { getDocRef } from "../../utils/firebaseCommon";
import { AuthContext } from "../../contexts/Auth";
import { useContext } from "react";

const database = getDatabase();

const handleUpdatePatient = async ({ namePatient, date, weight, height }) => {

    const collectionPatients = collection(database, 'patients');
    const idPatientUpdate = '78XVn181UV53MoWNQ2C9';
    const docRef = doc(database, collectionPatients.path, idPatientUpdate);
    const { user }: any = useContext(AuthContext);
    const collectionUsers = 'users';

    await updateDoc(docRef,
        {
            namePatient,
            date,
            weight,
            height,
            user: getDocRef(user.email, collectionUsers),
        })
}

export default handleUpdatePatient;
