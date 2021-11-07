import React, {useEffect, useState} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


const DetailsScreen = ( {navigation, route} ) => {
    const movie = route.params.movie;
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', "http://www.omdbapi.com/?apikey=cc456efe&t=Star+Wars&y=1977");
        xhr.send();
        xhr.onload = () => {
            if (xhr.status == 200){
                let response = JSON.parse(xhr.response);
                setMovieDetails(response);

            }else{
                console.log(`HTTP Request Failed ${xhr.status}`);
            }
        };


    }, []);




    return (
        <View style={styles.mainView}>
            <Text >{
                (movieDetails == null ? "" : movieDetails.Title)
            }</Text>
            <Text>{
                (movieDetails == null ? "" : movieDetails.Released)
            }</Text>
            <Text>{
                (movieDetails == null ? "" : movieDetails.Plot)
            }</Text>

        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default DetailsScreen;