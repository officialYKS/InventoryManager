import React, {Component, useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import { Sample } from '../../../types/SampleEntity';
import { ImplSampleRepository } from '../../../api/sampleDb/ImplSampleRepository';
import { SampleRepository } from '../../../api/sampleDb/SampleRepository';

export function FirestoreSample() {
    const [sample1, setSample1] = useState<Sample>();
    const [sample2, setSample2] = useState<Sample>();
    /**SampleDBからデータを取得するレポジトリ */
    const sampleRepo: SampleRepository = new ImplSampleRepository();

    useEffect(() => {
        fetchSample1();
        fetchSample2();
    }, []);

    /**sample1をfirestoreから取得する関数 */
    const fetchSample1 = async() => {
        try {
            console.log("before sample1 fetch");
            await sampleRepo.fetchById("nDtFRJq5IwkOmXo4fpkY").then((data) => {
                setSample1(data);
                return data;
            }, (error) => {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    };

    /**sample2をfirestoreから取得する関数 */
    const fetchSample2 = async() => {
        try {
            console.log("before sample2 fetch");
            await sampleRepo.fetchById("06WWPtcydPdb1nXSeu0Z").then((data) => {
            setSample2(data);
            return data;
            }, (error) => {
                console.log(error);
        });
            
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View>
            <Text> FirebaseApp</Text>
            <Text>Sample1-name: {sample1?.name}</Text>
            <Text>Sample1-number: {sample1?.number}</Text>
            <Text>Sample2-name: {sample2?.name}</Text>
            <Text>Sample2-number: {sample2?.number}</Text>
        </View>
    );
}
