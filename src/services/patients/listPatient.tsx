import { getDatabase } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDocRef } from "../../utils/firebaseCommon";

const db = getDatabase();
const users = collection(db, 'registerUsers')
const idUser = '0nKxmUiAPlX5149JUQXb';

const handleListPatients = async () => {

    const listPatients = [];

    const data = query(collection(db, "patients"), where('user', '==', getDocRef(idUser, users)));

    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc) => {
        listPatients.push(doc.data())
    });

    return listPatients;
}

export default handleListPatients;