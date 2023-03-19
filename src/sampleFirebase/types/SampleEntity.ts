import { FirebaseFirestoreTypes, firebase } from "@react-native-firebase/firestore";

export type Sample = {
    name: string;
    number: number;
    bool: boolean;
}

export const buildSample = (data: FirebaseFirestoreTypes.DocumentData | undefined) => {
    const sample: Sample = {
      name: data?.name,
      number: data?.number,
      bool: data?.bool,
    }
  
    return sample;
}

