import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import useTheme from '../hooks/useTheme'

const Home = () => {

    const {isLightTheme, toggleTheme, lightTheme, darkTheme} = useTheme()

    const theme = isLightTheme ? lightTheme : darkTheme;

    
    
    
    
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:theme.primary}}>
            <Text onPress={toggleTheme}>hello hoke</Text>
        </View>
    )
}

export default Home
