import { Text, View } from './Themed'
import { StyleSheet } from 'react-native';

const EventModal = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> dup a a a </Text>
        </View>
    )
}

const styles = StyleSheet.create({
        container: {
            backgroundColor: '#ffcc31',
            width: '100%',
            height: 200,
        },
        text: {
        color: '#000000',
    }
});


export default EventModal;
