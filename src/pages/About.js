import React from 'react';
import {Text, SafeAreaView, View, Image, StyleSheet, Dimensions} from 'react-native';

const About = (props)=>{
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Image 
                    source={require('../../image/logo.png')}
                    style={styles.image}
                />
                <Text>React Native Navigation </Text>
                
                
            </View>
        </SafeAreaView>
    )
}

export {About};


const styles=StyleSheet.create({
    container:{
        borderWidth :1,
        borderColor: 'gray',
        alignSelf:'center',
        borderRadius: 10,
        padding: 4,
        margin:2,
    },
    image :{
        width : Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height / 3,
        resizeMode: 'contain',
        alignSelf:'center',
       
    },
    bottomText:{
        height : Dimensions.get("window").height * 0.05,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        borderTopWidth: 1,
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20

    }
})