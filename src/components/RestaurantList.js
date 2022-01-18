import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import Restaurant from "./Restaurant";
import {withNavigation} from "react-navigation";

const RestaurantList = ({header, data, navigation}) => {

    const openRestaurantDetails = (item) => {
        navigation.navigate('Restaurant', {
            id: item.id,
        });
    }

    if (!data.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data}
                keyExtractor={restaurant => restaurant.id}
                renderItem={({item})=> {
                    return (
                        <TouchableOpacity onPress={() => openRestaurantDetails(item)}>
                            <Restaurant details={item}/>
                        </TouchableOpacity>
                    )
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
    }
});

export default withNavigation(RestaurantList)
