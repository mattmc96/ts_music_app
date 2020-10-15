import React, {useEffect, useState} from "react";
import {Text, Image, View} from 'react-native'
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import { Audio } from 'expo-av'
import styles from './styles'
import {initialize} from "expo/build/Payments";

const song = {
    id: '1',
    uri: 'https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe Photo/2011/04/14/1302796985_4490/539w.jpg',
    title: 'notJust Dev Beat',
    artist: 'Helen',

}

const PlayerWidget = () => {

    const {sound, setSound} = useState<Sound|null>(initialState: null)
    const {isPlaying, setIsPlaying} = useState<boolean>(initialState: true)
    const {duration, setDuration} = useState<number>(initialState: null)
    const {position,setPosition} = useState<number>(initialState: null)


    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis)
        setPosition(status.positionMillis)
    }

    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync()
        }
    }

    useEffect(() => {
        // play the song
        playCurrentSong();
    }, [])

    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.stopAsync()
        } else {
            await sound.playAsync()
        }
    }
    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }
        return (position / duration) * 100
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progress, {width: `${getProgress()}%`}]}/>
            <View style={styles.row}>
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.rightContainer}...>
          </View>
        </View>
    )
}

export default PlayerWidget;