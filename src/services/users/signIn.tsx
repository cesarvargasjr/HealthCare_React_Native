import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getConnection } from "../../../firebase-config";

const app = getConnection();
const auth = getAuth(app);

const handleSignIn = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password)
}

export default handleSignIn;