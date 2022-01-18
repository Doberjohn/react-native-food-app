import React from "react";
import {View, TextInput, StyleSheet} from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name='search' style={styles.icon}/>
            <TextInput
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='Search'
                style={styles.input}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginVertical: 10,
        backgroundColor: '#DEDEDE',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
    icon: {
        fontSize: 30,
        marginTop: 5,
        marginHorizontal: 10
    }
});

export default SearchBar
