import React from 'react';
import {TouchableWithoutFeedback, View, Text, Image, StyleSheet, Dimensions} from 'react-native';


const PostCard= (props)=> {
    return(
        <TouchableWithoutFeedback style={styles.container}
                onPress = {()=>props.selected(props.parametre)}
        
        >
            <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{uri: props.parametre.img}}
            />
            <View style={styles.bottomText}>
            <Text numberOfLines={2}>{props.parametre.description}</Text>
            <Text style={{fontWeight:"bold", fontSize:20}}>{props.parametre.userName}</Text>
            </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default PostCard;

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
        width : Dimensions.get("window").width * 0.45,
        height: Dimensions.get("window").height / 4,
        resizeMode: 'contain',
        alignSelf:'center',
       
    },
    bottomText:{
        height : Dimensions.get("window").height * 0.1,
        width : Dimensions.get("window").width*0.45,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
    }
})