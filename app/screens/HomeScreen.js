import React ,{useEffect}from "react";
import { connect } from "react-redux";
import { amountAdded, setVisiable } from "../redux/actions/addAmmountActions";
import {  Text, View, StyleSheet } from "react-native";
import {Button} from 'react-native-paper'


 function HomeScreen(props) {
  const {Amount, changeAmount, modalvisibalityHandler} = props;
  console.log("Givermain connected to redux",Amount)
  console.log("visiable mainpage",Amount.visiable)

  useEffect(() => {
   
  },[]);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    
      <Text style={styles.text}>Redux connected to Home screen</Text>
      <Text>Redux data amount:{Amount.amount}</Text>
      <Button  mode="contained" style={{margin:15}} onPress={() => {changeAmount(Amount.amount+1)}}>Amount+1</Button>
      <Button  mode="contained" style={{margin:15}} onPress={() => props.navigation.navigate('AboutScreen')}>Go to About Screen</Button>
 
  </View>
  );
}

const mapStateToProps = (state) => {
  return {
    Amount: state.enterAmount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeAmount: (value)=>{
      dispatch(amountAdded(value))
    },
   
    modalvisibalityHandler:() =>{
      dispatch(setVisiable())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center"
  },
  
});


