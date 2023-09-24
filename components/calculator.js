import React,{useState} from "react";
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Switch } from 'react-native';

export default function BMIcalculator() {

    //Adding states to components
    const [weight,setWeight] = React.useState('Weight (Kg)');
    const [height,setHeight] = React.useState('Height (m)');
    const [userWeight, setUserWeight] = React.useState('');
    const [userHeight, setUserHeight] = React.useState('');
    const [bmi, setBmi] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isEnabled,setIsEnabled] = React.useState(false);
    const [switchChange,setSwitchChange] = React.useState('SI Unit (Kg/m)')

    //Switch toggle change Units of measurement 
    const toggleSwitch = () =>{
        if(isEnabled){
            setWeight('Weight (Kg)')
            setHeight('Height (m)')
            setSwitchChange('SI Unit (Kg/m)')
            
        }else{
            setWeight('Weight (lbs)')
            setHeight('Height (Inch)')
            setSwitchChange('Imperial Units (lbs/Inch)')
        }
        setIsEnabled ((previousState) => !previousState);
    }
    
    //Button click event for calculation
    const buttonClicked = () => {
        if(isEnabled){

            //Calculation for Imperial Units
            if (userWeight ==='' || userHeight ==='' && userWeight ==='0' || userHeight ==='0' ){
                alert('Please enter a valid Weight and Height')
            }else{
                let bmi=((userWeight*703)/(userHeight*userHeight))
                setBmi(bmi.toFixed(1))
                if (bmi<11){
                    setMessage('invalid data')
                }
                else if (bmi>11 && bmi < 18.5){
                    setMessage('You are underweight')
                }else if (bmi >=18.5 && bmi<24.9){
                    setMessage('You are at the perfect weight')
                }else if (bmi >=25 && bmi<29.9){
                    setMessage('You are overweight')
                }else {
                    setMessage('You are obese')}
            }

        //Calculation for SI Units
    }else{
        if (userWeight ==='' || userHeight ==='' && userWeight ==='0' || userHeight ==='0' ){
            alert('Please enter a valid Weight and Height')
        }else{
            let bmi=(userWeight/(userHeight*userHeight))
            setBmi(bmi.toFixed(1))
            if (bmi<11){
                setMessage('invalid data')
            }
            else if (bmi>11 && bmi < 18.5){
                setMessage('You are underweight')
            }else if (bmi >=18.5 && bmi<24.9){
                setMessage('You are at the perfect weight')
            }else if (bmi >=25 && bmi<29.9){
                setMessage('You are overweight')
            }else {
                setMessage('You are obese')}
        }
    }
    }
    
    // Clear button action
    const btnClear = () => {
        setUserWeight("");
        setUserHeight("");
        setBmi("");
        setMessage("");
    }
    //UI Elements
    return (
            <View style={styles.container}>
            <Text style={styles.headd}>MBI Calculator</Text>

            <Text style={styles.textt}>{weight}</Text>
            <TextInput style={styles.textinput}
                placeholder="Enter Your Weight"
                onChangeText={value => setUserWeight(value) }
                value={userWeight}
            />

            <Text style={styles.textt}>{height}</Text>
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

            <Text style={styles.switchtext}>{switchChange}</Text>
            <Switch
                style={styles.switch}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

//Styling for our app
const styles = StyleSheet.create({
    headd:{
        fontSize: 30,
        marginBottom: 10,
        padding:40,
        color:'#2ec4b6'
        
    },
    textt: {
        alignSelf: "stretch",
        paddingLeft: 15,
        marginBottom: 5,
        marginTop: 5,
        color:'#2A9D8F'
    },
    textinput: {
        alignSelf: "stretch",
        fontSize: 16,
        height: 40,
        marginBottom: 10,
        paddingLeft: 15,
        color: "#000",
        borderColor: "#E9C46A",
        borderWidth:1,
        borderRadius: 30,
        color:'#2A9D8F'
    },
    submit: {
        elevation: 8,
        backgroundColor: "#E76F51",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10
      },
    opacitybutton: {
        elevation: 8,
        backgroundColor: "#F4A261",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10,
        marginBottom: 20
    },
    textView:{
        fontSize: 18,
        color: "#023047",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    result: {
        fontSize:20,
        alignSelf: "stretch",
        paddingLeft: 15,
        marginTop: 15,
        color:'#2A9D8F',
        alignSelf: "center",
    },
    switchtext: {
        fontSize:20,
        alignSelf: "stretch",
        paddingLeft: 15,
        marginTop: 30,
        color:'#2A9D8F',
        alignSelf: "center",
    },
    switch: {
        alignSelf:'center',
        marginTop:20
    }
});
