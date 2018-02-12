import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
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
        var weeklyData = { ... this.state.weeklyData }
        var week = weeklyData.week
        var year = weeklyData.year
        switch (direction) {
            case "<":
                week -= 1
                if (week === 0) {
                    week = 12
                    year -= 1
                }
                break
            case ">":
                week += 1
                if (week === 13) {
                    week = 1
                    year += 1
                }
                break
            default:
                console.log("Invalid week change direction")
        }
        weeklyData.week = week
        weeklyData.year = year
        this.setState({
            weeklyData
        })
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
                <Text style={styles.title}>{constants.title}</Text>
                <View style={styles.weekView}>
                    <TouchableOpacity style={styles.weekButton} onPress={() => this.changeWeek('<')}>
                        <Text style={styles.deductWeekButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.weekText}>{this.state.weeklyData.week} - {this.state.weeklyData.year}</Text>
                    <TouchableOpacity style={styles.weekButton} onPress={() => this.changeWeek('<')}>
                        <Text style={styles.increaseWeekButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.totalView}>
                    <TouchableOpacity style={styles.totalButton} onPress={() => this.adjustTotal('-')}>
                        <Text style={styles.deductTotalButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.totalText}>{this.state.weeklyData.total}</Text>
                    <TouchableOpacity style={styles.totalButton} onPress={() => this.adjustTotal('+')}>
                        <Text style={styles.increaseTotalButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 50
    },
    totalView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#cccccc',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20
    },
    weekView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#dddddd',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    title: {
        fontSize: 30
    },
    totalButton: {
        padding: 10,
        height: 20
    },
    deductTotalButtonText: {
        fontSize: 75,
        color: 'red'
    },
    increaseTotalButtonText: {
        fontSize: 75,
        color: 'green'
    },
    deductWeekButtonText: {
        fontSize: 75,
        color: 'red'
    },
    increaseWeekButtonText: {
        fontSize: 75,
        color: 'green'
    },
    totalText: {
        fontSize: 50
    },
    weekText: {
        fontSize: 35
    }

});
