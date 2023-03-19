import firestore from '@react-native-firebase/firestore';
import { Sample, buildSample } from '../../types/SampleEntity';
import { SampleRepository } from "./SampleRepository"


export class ImplSampleRepository implements SampleRepository{
    
    /** sampleDBのReference */
    sampleRef= firestore().collection('sample');
    

    async fetchAll(): Promise<Sample[]> {
        throw new Error("Method not implemented.");
    }

    async fetchById(id: string): Promise<Sample> {
        const sampleList: Sample[] = []
        const snapshot = await this.sampleRef.doc(id).get();
        console.log(id);
        console.log(snapshot);
        const res = buildSample(snapshot.data());
        //const res : Sample = snapshot.data() as Sample

        return res; 
    }


}
