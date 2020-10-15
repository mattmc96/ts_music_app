import React, {useEffect} from 'react'
import {View, Text, FlatList} from "react-native";
import {useRoute} from  '@react-navigation/native'
import SongListItem from '../components/SongListItem'
import albumDetails from '../data/albumDetails'



const AlbumScreen = () => {

    const route = useRoute()

    useEffect( effect: () => {
    }, deps: [])

    return (
        <View>
            <FlatList data={albumDetails.songs} renderItem={({item}) => <SongListItem song={item}/>}
                      keyExtractor={(item) => item.id}
            />
        </View>
    )
}
export default AlbumScreen