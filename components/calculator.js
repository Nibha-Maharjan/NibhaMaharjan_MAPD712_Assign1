import React,{useState} from "react";
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Switch } from 'react-native';

export default function BMIcalculator() {
    const [userWeight, setUserWeight] = React.useState('');
    const [userHeight, setUserHeight] = React.useState('');
    const [bmi, setBmi] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isEnabled,setIsEnabled] = React.useState(false);

    const toggleSwitch = () =>{
        setIsEnabled ((previousState) => !previousState);
    }
    

    const buttonClicked = () => {
        if (userWeight ==='' || userHeight ==='' && userWeight ==='0' || userHeight ==='0' ){
            alert('Please enter a valid Weight and Height')
        }else{
            let bmi=(userWeight/(userHeight*userHeight))
            setBmi(bmi.toFixed(1))
            if (bmi<11){
                setMessage('invalid data')
            }
            else if (bmi>11 && bmi < 18.5){
                setMessage('underweight')
            }else if (bmi >=18.5 && bmi<24.9){
                setMessage('perfect')
            }else if (bmi >=25 && bmi<29.9){
                setMessage('overweight')
            }else {
                setMessage('obesity')}
        }
        
        
        // }else {
        //     setMessage('invalid data')
        // }
        
    }
    const btnClear = () => {
        setUserWeight("");
        setUserHeight("");
        setBmi("");
        setMessage("");
    }
    return (
            <View style={styles.container}>
            <Text style={styles.headd}>MBI Calculator</Text>

            <Text style={styles.textt}>Your Weight(Kg)</Text>
            <TextInput style={styles.textinput}
                placeholder="Enter Your Weight"
                onChangeText={value => setUserWeight(value) }
                value={userWeight}
            />
            <Text style={styles.textt}>Your Height(m)</Text>
            <TextInput style={styles.textinput}
                placeholder="Enter Your Height"
                onChangeText={value => setUserHeight(value) }
                value={userHeight}
            />
            <TouchableOpacity style={styles.submit}
                onPress={buttonClicked}>
                { <Text style={styles.textView}>Send</Text> }
            </TouchableOpacity>

            <TouchableOpacity style={styles.opacitybutton}
                onPress={btnClear}>
                { <Text style={styles.textView}>Clear</Text> }
            </TouchableOpacity>
            <Text style={styles.result}>Your bmi: {bmi}</Text>
            <Text style={styles.result}>{message}</Text>
            <Switch
                style={styles.switch}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headd:{
        fontSize: 30,
        marginBottom: 10,
        padding:40,
        
    },
    textt: {
        alignSelf: "stretch",
        paddingLeft: 15,
        marginBottom: 5,
        marginTop: 5
    },
    textinput: {
        alignSelf: "stretch",
        fontSize: 16,
        height: 40,
        marginBottom: 10,
        paddingLeft: 15,
        color: "#000",
        borderColor: "#008000",
        borderWidth:1,
        borderRadius: 30,
    },
    submit: {
        elevation: 8,
        backgroundColor: "#00ff97",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10
      },
    opacitybutton: {
        elevation: 8,
        backgroundColor: "#effac3",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10,
        marginBottom: 20
    },
    textView:{
        fontSize: 18,
        color: "gray",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
        
    },
    result: {
        fontSize:30,
        alignSelf: "stretch",
        paddingLeft: 15,
        marginTop: 25
    },
    switch: {
        alignSelf:'center'
    }
});
