import { StyleSheet } from 'react-native';

// import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#564AE7',
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingTop: Constants.statusBarHeight + 
      },

      textp:{
        fontWeight: 'bold',
        fontFamily: 'Roboto, sans-serif',
        fontSize: 20,
        textAlign: 'center',    
        color: '#E5E5E5',    
        paddingTop: 40,
        paddingBottom: 40
      },

      forms:{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: '100%',
        maxWidth: 330,
        height: 400,
        borderRadius: 19,
        clear: 'both',
        marginTop: 200,
        margin: 'auto'
      },

      caixa:{
        margin: 'auto'
      },

      caixainput:{
          flexDirection:'row',
          borderRadius: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          width: 290,
          height: 50,
          marginBottom: 15,
          padding: 5  
    },

    texinput:{
        fontFamily: 'Roboto, sans-serif',
        fontSize: 20,
        padding: 5 , 
        fontWeight:'bold'
    },

    caixadescription:{
        marginLeft: 185
    },

    description:{
        fontFamily: 'Roboto, sans-serif',
        fontSize: 14,
        fontWeight: 'bold',
        // paddingleft: 30
    },

    caixabtn:{
        flexDirection:'row',
        marginTop: 20,
        marginBottom: 20,
        width: 290,
        margin: 'auto',
    },

    btn:{
        fontSize: 18,
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
        cursor: 'pointer',
        margin: 'auto',
    },

    btnLogin: {
        backgroundColor: '#3125C1',
        width: 135,
        height: 40,
        borderRadius: 10,  
        margin: 'auto',
        
    },

    btnCadastro: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: 135,
        height: 40, 
        borderRadius: 10,
        
    },

    btntextl:{
        color: '#E5E5E5',
        fontFamily: 'Roboto, sans-serif',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 'auto',
    },
    
    btntextc:{
        color: '#3125C1',
        fontFamily: 'Roboto, sans-serif',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 'auto',
    }
})