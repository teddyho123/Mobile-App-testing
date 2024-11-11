import {StyleSheet} from 'react-native';


const darkmodeStyle = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'flex-start'
    },
    lightContainer: {
      backgroundColor: '#fff',
    },
    darkContainer: {
      backgroundColor: '#333',
    },
    lightTitle: {
      color: 'black',
    },
    darkTitle: {
      color: 'white',
    },
    lightLabel: {
      color: 'black',
    },
    darkLabel: {
      color: 'white',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: '#000',
    },
    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    label: {
      fontSize: 18,
      color: '#000',
    },
  });

  export default darkmodeStyle;