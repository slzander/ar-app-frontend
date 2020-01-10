import React from 'react'
import { 
    StyleSheet, 
    View, 
    Image, 
    Text, 
    TextInput, 
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
} from 'react-native'
import { styles } from '../components/Styles'


export default class Profile extends React.Component {
    state = {
        images: []
    }
    
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle = 'light-content'
                />
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../images/mountain.png')}
                    />
                    <Text style={styles.title}>Travel With Me</Text>
                </View>
                <KeyboardAvoidingView 
                    behavior='padding'
                    style={styles.formContainer}
                >
                    <View style={styles.loginContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder='Username or Email'
                            // placeholderTextColor='rgba(255,255,255,0.7)'
                            returnKeyType='next'
                            onSubmitEditing={() => this.passwordInput.focus()}
                            onChangeText={username => this.setState({ username })}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            autoCorrect={false} 
                            />
                        <TextInput 
                            style={styles.input} 
                            placeholder='Password'
                            placeholderTextColor='rgba(255,255,255,0.7)' 
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry
                            returnKeyType='go'
                            ref={(input) => this.passwordInput = input} 
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity 
                                style={styles.buttons}
                                onPress={() => this.props.changeScreen('dashboard')}
                            >
                                <Text style={styles.buttonText}>SIGN UP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.buttons}
                                onPress={() => this.props.changeScreen('dashboard')}
                            >
                                <Text style={styles.buttonText}>LOG IN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
