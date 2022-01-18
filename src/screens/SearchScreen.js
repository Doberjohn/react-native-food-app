import React, {useState} from "react";
import {Text} from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantList from "../components/RestaurantList";
import {ScrollView} from "react-navigation";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchAPI, restaurants, errorMessage] = useRestaurants();

    const filterResultsByPrice = (price) => {
        return restaurants.filter(restaurant => {
            return restaurant['price'] === price;
        })
    }

    return (
        <>
            <SearchBar
                term={searchTerm}
                onTermChange={setSearchTerm}
                onTermSubmit={() => searchAPI(searchTerm)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantList header='Cost effective' data={filterResultsByPrice('$')}/>
                <RestaurantList header='Bit pricier' data={filterResultsByPrice('$$')}/>
                <RestaurantList header='Big spender' data={filterResultsByPrice('$$$')}/>
                <RestaurantList header='Deluxe choices' data={filterResultsByPrice('$$$$')}/>
            </ScrollView>
        </>
    )
}

export default SearchScreen
