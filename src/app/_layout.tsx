import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useCallback, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import store from '@/redux'
import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer'
import TrackPlayer from 'react-native-track-player'
import { playbackService } from '@/constants/playbackService'
import { useLogTrackPlayerState } from '@/hooks/useLogTrackPlayerState'

SplashScreen.preventAutoHideAsync()
TrackPlayer.registerPlaybackService(() => playbackService)

const RootLayout = () => {
  const [playerLoaded, setPlayerLoaded] = useState(false)
  const [fontsLoaded, error] = useFonts({
    'Poppins-Black': require('@/assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('@/assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('@/assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('@/assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('@/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('@/assets/fonts/Poppins-Thin.ttf'),
  })

  const handleTrackPlayerLoaded = useCallback(() => {
    setPlayerLoaded(true)
  }, [])

  useSetupTrackPlayer({
    onLoad: handleTrackPlayerLoaded,
  })

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded && playerLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error, playerLoaded])

  useLogTrackPlayerState()

  if (!fontsLoaded || !playerLoaded) return null

  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </Provider>
  )
}

export default RootLayout
