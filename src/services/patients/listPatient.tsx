import { getDatabase } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDocRef } from "../../utils/firebaseCommon";
import { useAuth } from "../../contexts/Auth";


const handleListPatients = async () => {

    try {
        const database = getDatabase();
        const collectionUsers = collection(database, 'users')
        const { user } = useAuth();
        const listPatients = [];

        const data = await query(collection(database, "patients"), where('user', '==', getDocRef(user.email, collectionUsers)));

        const querySnapshot = await getDocs(data);
        querySnapshot.forEach((doc) => {
            listPatients.push({ id: doc.id, ...doc.data() })
        });

        return listPatients;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export default handleListPatients;