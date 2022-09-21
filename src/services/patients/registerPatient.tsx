import { addDoc, collection } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";
import { getDocRef } from "../../utils/firebaseCommon";

const database = getDatabase();

const handleCreatePatient = async ({ user, namePatient, date, weight, height }) => {

    try {
        const collectionUsers = collection(database, 'users');

        await addDoc(collection(database, "patients"),
            {
                namePatient,
                date,
                weight,
                height,
                user: getDocRef(user.email, collectionUsers),
            })
    } catch (err) {
        console.error(err);
    }
}

export default handleCreatePatient;