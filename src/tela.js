import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default function App() {
	
  

	return (
		<View style={styles.container}>
            <View style={styles.header}>
            <Image style={styles.logo1} source={require('./img/logo.png')}/>
			<Text style={styles.logo}>Frontfy</Text>
            <Image style={styles.logo2} source={require('./img/moon.png')}/>
            </View>
            <View style={styles.conteudo}>
            <Text style={styles.titulo}>Minhas músicas</Text>
            <View style={styles.capadiv}>
            <Image style={styles.capa} source={require('./img/capa.jpg')}/>
            </View>
            <Text style={styles.musica}>Do I Wanna Know?</Text>
            <Text style={styles.autor}>Arctic Monkeys</Text>
            <View style={styles.player}>
            <Image style={styles.anterior} source={require('./img/proximo.png')}/>
            <Image style={styles.botoes} source={require('./img/play.png')}/>
            <Image style={styles.proximo} source={require('./img/proximo.png')}/>
             </View>
            </View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
        paddingTop:'10%',
        flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
        backgroundColor: '#000'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    logo1: {
        width:35,
        height:35,
        marginLeft:15,
    },

    logo2: {
        width:50,
        height:50,
        marginRight:5,
    },
    player: {
       flexDirection: 'row',
	   justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#FFF',
       padding:20,
       
    },
    botoes:{
        width:60,
        height:60,
        borderRadius:360,
        margin:20,
    },

    anterior:{
        width:40,
        height:40,
        transform: [{rotateY: '180deg'}]
    },

    proximo:{
        width:40,
        height:40,
  
    },
    titulo: {
        color: '#000',
        fontFamily: 'Poppins-Regular',
        fontSize:20,
        padding:10,
    },
    logo: {
        color: '#FFF',
        padding: 10,
        fontSize:20,
        fontFamily: 'Poppins-Bold',
        flex:1,
        textAlign: 'center',
    },
    conteudo: {
		alignItems: 'center',
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
      
    },
    capa: {
        padding:30,
        width: 230,
        height: 230,
        borderRadius:360,
      
    },


	musica: {
    fontSize:20,
    paddingTop:20,
    fontFamily: 'Poppins-Medium',
    },
    autor: {
        fontSize:15,
        fontFamily: 'Poppins-Light',
    }

});