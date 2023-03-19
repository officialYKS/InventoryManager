import { Sample } from "../../types/SampleEntity"

export interface SampleRepository {
    fetchAll() : Promise<Sample[]>;
    fetchById(id: String): Promise<Sample> ;
}