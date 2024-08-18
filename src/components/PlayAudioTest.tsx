import { Button } from 'react-native'
import React from 'react'
import TrackPlayer, { Track, useIsPlaying } from 'react-native-track-player'

const PlayAudioTest = () => {
  const { playing } = useIsPlaying()
  console.log(playing)

  const handleTrackSelect = async (track: Track) => {
    // Reset queue
    await TrackPlayer.reset()
    // construct the new queue
    await TrackPlayer.add(track)
    await TrackPlayer.play()
  }

  const onPlayPressed = async () => {
    if (playing) {
      await TrackPlayer.stop()
    } else {
      const track: Track = {
        url: 'https://audio.jukehost.co.uk/vTRYaTEbpaYRCxiWGgL2S91mnOuMKfLw',
      }
      handleTrackSelect(track)
    }
  }
  return <Button title="Play" onPress={onPlayPressed} />
}

export default PlayAudioTest
