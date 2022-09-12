import { addDoc, collection } from "firebase/firestore";
import { getDatabase } from "../../../firebase-config";
import { getDocRef } from "../../utils/firebaseCommon";

const database = getDatabase();

const handleCreatePatient = async ({ name, age, weight, height }) => {

    const collectionUsers = collection(database, 'users')
    const idUser = '0nKxmUiAPlX5149JUQXb'

    await addDoc(collection(database, "patients"),
        {
            name,
            age,
            weight,
            height,
            user: getDocRef(idUser, collectionUsers),
        })
}

export default handleCreatePatient;