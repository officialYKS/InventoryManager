import React, {Component, useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import { Sample } from '../../types/SampleEntity';
import { ImplSampleRepository } from '../../api/sampleDb/ImplSampleRepository';
import { SampleRepository } from '../../api/sampleDb/SampleRepository';

export function FirestoreSample() {
    const [sample1, setSample1] = useState<Sample>();
    const [sample2, setSample2] = useState<Sample>();

    useEffect(() => {
        /**SampleDBからデータを取得するレポジトリ */
        const sampleRepo: SampleRepository = new ImplSampleRepository();
        sampleRepo.fetchById("nDtFRJq5IwkOmXo4fpkY").then((data) => {
            setSample1(data);
        });
        sampleRepo.fetchById("06WWPtcydPdb1nXSeu0Z").then((data) => {
            setSample2(data);
        });

    });
    return (
        <View>
            <Text> FirebaseApp</Text>
            <Text>Sample1-name: {sample1?.name}</Text>
            <Text>Sample1-number: {sample1?.number}</Text>
            <Text>Sample1-bool: {String(sample1?.bool)}</Text>
            <Text>Sample2-name: {sample2?.name}</Text>
            <Text>Sample2-number: {sample2?.number}</Text>
            <Text>Sample2-bool: {String(sample2?.bool)}</Text>
        </View>
    );
}
