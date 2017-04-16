import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import RNFirebase from 'react-native-firebase';
import Screen from './Screen';
import { iconsLoaded, iconsMap } from './icons';
import setup from './redux/store';

const configurationOptions = {
    debug: true
};

const firebase = RNFirebase.initializeApp(configurationOptions);

const store = setup();

Navigation.registerComponent('example.FirstTabScreen', () => Screen, store, Provider);
Navigation.registerComponent('example.SecondTabScreen', () => Screen, store, Provider);

export default class App {

    constructor() {
        return Promise
            .all([iconsLoaded])
            .then(() => {
                firebase.auth().onAuthStateChanged((user) => {
                    this.startApp();
                });
            });
    }

    startApp() {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'One',
                    screen: 'example.FirstTabScreen',
                    icon: iconsMap.cog,
                    title: 'Screen One'
                },
                {
                    label: 'Two',
                    screen: 'example.SecondTabScreen',
                    icon: iconsMap.cog,
                    title: 'Screen Two'
                }
            ]
        });
    }

}
