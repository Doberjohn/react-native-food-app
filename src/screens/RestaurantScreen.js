import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, FlatList, Image} from "react-native";
import yelp from "../api/yelp";

const RestaurantScreen = ({navigation}) => {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const id = navigation.getParam('id');

    const getRestaurantDetails = async (id) => {
        const response = await yelp.get(`/${id}`);
        setRestaurantDetails(response.data);
    }

    const renderPhoto = ({item}) => {
        return (
            <Image style={styles.image} source={{uri: item}}/>
        )
    }

    useEffect(async ()=> {
        await getRestaurantDetails(id)
    }, [])

    if (!restaurantDetails) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{restaurantDetails.name}</Text>
            <FlatList
                data={restaurantDetails.photos}
                keyExtractor={photo => photo}
                renderItem={renderPhoto}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        height: 200,
        marginVertical: 10
    }
})

export default RestaurantScreen
