import { getDatabase } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDocRef } from "../../utils/firebaseCommon";
import { usePatient } from "../../contexts/Patient";


const handleListDrugs = async () => {

    const database = getDatabase();
    const { patient } = usePatient();
    const collectionDrugs = collection(database, 'drugs');
    const listDrugs = [];

    const data = query(collection(database, "drugs"), where('user', '==', getDocRef(patient.id, collectionDrugs)));

    const querySnapshot: any = await getDocs(data);
    querySnapshot.forEach((doc: any) => {
        listDrugs.push({ id: doc.id, ...doc.data() })
    });

    return listDrugs;
}

export default handleListDrugs;