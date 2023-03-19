import { firebase } from "@react-native-firebase/firestore";
import { Sample, buildSample } from '../../types/SampleEntity';
import { SampleRepository } from "./SampleRepository"


export class ImplSampleRepository implements SampleRepository{

    /** firestore利用のための変数 */
    db = firebase.firestore();
    
    /** sampleDBのReference */
    sampleRef= this.db.collection('sample');
    

    async fetchAll(): Promise<Sample[]> {
        throw new Error("Method not implemented.");
    }

    async fetchById(id: string): Promise<Sample> {
        const snapshot = await this.sampleRef.doc(id).get();
        const sample = buildSample(snapshot.data());
        return sample; 
    }


}
