import React ,{ useState,useEffect } from "react";
import { Image, Text, View, StyleSheet,TextInput } from "react-native";
import { List, Button,Portal,Paragraph,Dialog } from "react-native-paper";
import { connect } from "react-redux";
import { amountAdded,setVisiable } from "../redux/actions/addAmmountActions";
import io from "socket.io-client";
var socket = io("ws://192.168.100.14:3000");
function CreateAccount(props) {
    const {Amount, changeAmount,modalvisibalityHandler} = props;
    const [visiable, setVisiable] = React.useState("");
    console.log("CreateAccount connected to redux",Amount)
    const [Nametext, setNameText] = React.useState("");
    const [Mnotext, setMnotext] = React.useState("");
    const [Passtext, setPasstext] = React.useState("");
    
    const onNameChangeText = Nametext => setNameText(Nametext);
    const onMnoChangeText = Mnotext => setMnotext(Mnotext);
    const onPassChangeText = Passtext => setPasstext(Passtext);
    const hideDialog = () => {
      modalvisibalityHandler(false)
     setVisiable(Amount.visiable)
    
    };

    useEffect(() => {
      // console.log(socket);
      
      socket.on("amount", function (giver) {
        changeAmount(giver);
        setVisiable(true)
        
      });
      
    
    },[]);

    return (
      <View style={styles.container}>
      <Text>About Screen</Text>
    
      <Text style={styles.text}>Redux connected to Home screen</Text>
      <Text>Redux data amount:{Amount.amount}</Text>
      <Button  mode="contained" style={{margin:15}} onPress={() => {changeAmount(Amount.amount+1)}}>Amount+1</Button>
      <Button  mode="contained" style={{margin:15}} onPress={() => props.navigation.navigate('HomeScreen')}> GO to Home Screen</Button>
 
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent:"center"
  },
});
