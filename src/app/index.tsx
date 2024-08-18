import CustomButton from '@/components/CustomButton'
import PlayAudioTest from '@/components/PlayAudioTest'
import { images } from '@/constants'
import { ERouteTable } from '@/constants/route-table'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TrackPlayer, { Track, useIsPlaying } from 'react-native-track-player'

export default function App() {
  return (
    <>
      <SafeAreaView className="bg-primary h-full">
        <PlayAudioTest />
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className="w-full h-full items-center px-4">
            <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
            <Image
              source={images.cards}
              className="w-full max-w-[380px] h-[300px]"
              resizeMode="contain"
            />
            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities with {'  '}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                resizeMode="contain"
              />
            </View>

            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where creativity meets innovation: embark on a journey of limitless exploration with
              Aora
            </Text>

            <CustomButton
              title="Continue with Email"
              onPress={() => router.push(ERouteTable.SIGIN_IN)}
              containerStyle="w-full mt-7"
            />
          </View>
        </ScrollView>
        <StatusBar style="light" backgroundColor="#161622" />
      </SafeAreaView>
    </>
  )
}
