import { createContext, useContext, useState } from 'react';
import calculateAge from '../utils/calculateAge';

export interface FormPatient {
    id?: string;
    namePatient: string,
    date?: string,
    age?: number,
    weight?: number,
    height?: number,
}

interface ContextProps {
    patient: FormPatient;
    setPatient: (args: FormPatient) => void;
    getAge: () => number;
    listPatients: Array<FormPatient>;
    setListPatients: ([]: Array<FormPatient>) => void;
}

export const PatientContext = createContext({} as ContextProps);

function PatientProvider({ children }) {
    const [patient, setPatient] = useState<FormPatient>({} as FormPatient);
    const [listPatients, setListPatients] = useState<Array<FormPatient>>([] as Array<FormPatient>);

    const getAge = () => calculateAge(patient.date);

    return (
        <PatientContext.Provider value={{ patient, setPatient, getAge, listPatients, setListPatients }}>
            {children}
        </PatientContext.Provider>
    )
}

const usePatient = () => useContext(PatientContext);

export { PatientProvider, usePatient }
