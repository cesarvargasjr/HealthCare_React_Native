import { useContext } from "react";
import { getDatabase } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDocRef } from "../../utils/firebaseCommon";
import { AuthContext } from "../../contexts/Auth";

const db = getDatabase();
const users = collection(db, 'users')
const idUser = '0nKxmUiAPlX5149JUQXb';

const handleListPatients = async () => {

    const { user }: any = useContext(AuthContext);
    const listPatients = [];

    console.log('***USER***', user);

    const data = await query(collection(db, "patients"), where('user', '==', getDocRef(idUser, users)));

    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc) => {
        listPatients.push(doc.data())
    });

    return listPatients;
}

export default handleListPatients;