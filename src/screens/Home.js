import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import {BgView} from '../components/Layout'
import useTheme from '../hooks/useTheme'

const Home = () => {

    const {isLightTheme, toggleTheme, lightTheme, darkTheme} = useTheme()

    const theme = isLightTheme ? lightTheme : darkTheme;
    
    
    
    
    return (
       <BgView>
            <Text onPress={toggleTheme}>hello hoke</Text>
            </BgView>
    )
}

export default Home
