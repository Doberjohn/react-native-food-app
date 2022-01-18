import React from "react";
import {Text, StyleSheet, Image, View} from "react-native";

const Restaurant = ({details}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: details.image_url}}/>
            <Text style={styles.name}>{details.name}</Text>
            <Text>{details.rating} stars, {details.review_count} reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 150,
        marginVertical: 10,
    },
    name: {
        fontWeight: "bold",
    }
})

export default Restaurant
