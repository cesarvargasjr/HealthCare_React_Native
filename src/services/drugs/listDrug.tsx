import { getDatabase } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDocRef } from "../../utils/firebaseCommon";

const db = getDatabase();
const idPatient = 'AVx8I9uYi4YHeux83DLP';
const collectionDrugs = collection(db, 'drugs');

const handleListDrugs = async () => {

    const listDrugs = [];

    const data = query(collection(db, "drugs"), where('user', '==', getDocRef(idPatient, collectionDrugs)));

    const querySnapshot: any = await getDocs(data);
    querySnapshot.forEach((doc: any) => {
        listDrugs.push(doc.data())
    });

    return listDrugs;
}

export default handleListDrugs;