// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, Octicons } from '@expo/vector-icons';
import {Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles.js';

import logoImg from './assets/logo.png'

export default function App() {
  return (
    <View style={styles.container} >
         
      <View  style={styles.loginContainer}>
         <View style={styles.header} >
              <Image source={logoImg}/>        
          </View>
     
            <View style={styles.forms}>

              <View >
                <Text style={styles.textp}>Welcome, please login!</Text>
             <View >

            
             <View style={styles.caixa} >
                <View style={styles.caixainput}>
                  <AntDesign  name="user" size={30} color="#black"/>
                    <TextInput
                      style={styles.texinput}
                      placeholderTextColor="#3125C1"
                      // underlineColorAndroid="#ecf0f1"
                      placeholder="ID"
                    />
                </View>

              
                <View style={styles.caixainput}>
                  <Octicons name="key" size={30} color="black" />
                  <TextInput
                    style={styles.texinput}
                    placeholderTextColor="#3125C1"
                    // underlineColorAndroid="#ecf0f1"
                    placeholder="PASSWORD"
                  />
                </View>
              </View>
                
                <View style={styles.caixadescription}>
                  <Text style={styles.description}> Forgot Password?</Text>
                </View>
                
                <View style={styles.caixabtn}>

                  <View style={styles.btn}>
                    <TouchableOpacity
                        onPress={() => {}} 
                        style={styles.btnLogin }>
                        <Text style={styles.btntextl}> Login</Text>
                    </TouchableOpacity>
                    </View>

                  <View style={styles.btn}>
                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.btnCadastro}>
                        <Text style={styles.btntextc}> Sign Up </Text>
                    </TouchableOpacity>
                  </View>

                </View>
                   
            </View>
        
        </View>
      </View>

         </View>  
    </View>
  );
}


