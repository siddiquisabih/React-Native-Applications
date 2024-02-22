import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Badge, Button, Chip, DataTable, MD2Colors, SegmentedButtons } from 'react-native-paper';


function MainPage(): React.JSX.Element {


    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, backgroundColor: "lightblue", }}>

            <ScrollView style={{ flex: 1 }}>

                <View style={styles.verticalGap} />
                <ActivityIndicator animating={true} color={MD2Colors.red800} />
                <View style={styles.verticalGap} />

                <Badge>3</Badge>

                <View style={styles.verticalGap} />
                <Button style={{ alignSelf: "center" }} icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>Press me</Button>

                <View style={styles.verticalGap} />
                <Button style={{ alignSelf: "center" }} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>Press me</Button>

                <View style={styles.verticalGap} />
                <Button style={{ alignSelf: "center" }} icon="camera" mode="elevated" onPress={() => console.log('Pressed')}>Press me</Button>

                <View style={styles.verticalGap} />
                <Button style={{ alignSelf: "center" }} icon="camera" mode="contained-tonal" onPress={() => console.log('Pressed')}>Press me</Button>

                <View style={styles.verticalGap} />
                <Chip style={{ alignSelf: "center" }} icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>

                <View style={styles.verticalGap} />

                <SegmentedButtons
                    style={{ marginHorizontal: 10 }}
                    value={''}
                    onValueChange={() => { }}
                    buttons={[
                        {
                            value: 'walk',
                            label: 'Walking',
                        },
                        {
                            value: 'train',
                            label: 'Transit',
                        },
                        { value: 'drive', label: 'Driving' },
                    ]}
                />
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    verticalGap: {
        marginVertical: 20,

    },

});

export default MainPage;