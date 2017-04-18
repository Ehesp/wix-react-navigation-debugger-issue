import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
// import RNFirebase from 'react-native-firebase';
import Screen from './Screen';
import { iconsLoaded, iconsMap } from './icons';
import setup from './redux/store';

// const configurationOptions = {
//     debug: true
// };

// const firebase = RNFirebase.initializeApp(configurationOptions);

const store = setup();

Navigation.registerComponent('example.FirstTabScreen', () => Screen, store, Provider);
Navigation.registerComponent('example.SecondTabScreen', () => Screen, store, Provider);

export default class App {

    constructor() {
        return iconsLoaded()
            .then(() => {
            console.log('here')
                // firebase.auth().onAuthStateChanged((user) => {
                    this.startApp();
                // });
            });
    }

    startApp() {
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'example.FirstTabScreen', // unique ID registered with Navigation.registerScreen
                title: 'Welcome', // title of the screen as appears in the nav bar (optional)
                navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            },
        });
    }

}
