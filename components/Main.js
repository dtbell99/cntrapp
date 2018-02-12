import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableOpacity, justifyContent } from 'react-native';
import constants from '../Constants'

export default class Test extends Component {

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
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#f1f1f1',
                alignItems: 'center',
            }}>
                <View style={{ width: '100%', height: 50, backgroundColor: '#f1f1f1' }} />
                <View style={{ width: '100%', height: 100, backgroundColor: '#f1f1f1', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30, color: 'steelblue' }}>{constants.title}</Text>
                </View>
                <View style={{ width: '100%', height: 70, backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.changeWeek('<')}>
                        <Text style={{ fontSize: 30, padding: 20, color: 'steelblue' }}>&lt;</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, color: 'steelblue' }}>Week {this.state.weeklyData.week} / {this.state.weeklyData.year}</Text>
                    <TouchableOpacity onPress={() => this.changeWeek('>')}>
                        <Text style={{ fontSize: 40, padding: 20, color: 'steelblue' }}>></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 100, backgroundColor: '#f1f1f1', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30, color: 'steelblue' }}>{constants.startDate}</Text>
                </View>
                <View style={{ width: '100%', height: 100, backgroundColor: 'steelblue', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.adjustTotal('-')}>
                        <Text style={{ fontSize: 50, padding: 20, color: 'skyblue' }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 50, color: 'white' }}>{this.state.weeklyData.total}</Text>
                    <TouchableOpacity onPress={() => this.adjustTotal('+')}>
                        <Text style={{ fontSize: 50, padding: 20, color: 'skyblue' }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};