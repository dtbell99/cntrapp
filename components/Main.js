import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import constants from '../Constants'

export default class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            weeklyData: {
                week: 10,
                year: 2018,
                total: 0
            }
        }
    }

    changeWeek = (direction) => {
        switch (direction) {

        }
    }

    adjustTotal = (direction) => {
        var weeklyData = { ...this.state.weeklyData }
        var tot = weeklyData.total
        switch (direction) {
            case "-":
                if (tot > 0) { tot -= 1 }
                break
            case "+":
                tot += 1
                break
            default:
                console.log("unknown direction passed")
        }

        weeklyData.total = tot
        this.setState({
            weeklyData
        })
    }



    render() {
        return (
            <View style={styles.container}>
                <Text>{constants.title}</Text>
                <Button onPress={() => this.changeWeek('<')} title="<" />
                <Text>{this.state.weeklyData.week} - {this.state.weeklyData.year}</Text>
                <Button onPress={() => this.changeWeek('>')} title=">" />
                <View>
                    <Button onPress={() => this.adjustTotal('-')} title="-" />
                    <Text>{this.state.weeklyData.total}</Text>
                    <Button onPress={() => this.adjustTotal('+')} title="+" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
