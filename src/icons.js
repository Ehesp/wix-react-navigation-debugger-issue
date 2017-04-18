/* eslint-disable new-cap */
import { Platform, PixelRatio } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const replaceSuffixPattern = /--(dark|light)/g;
const icons = {
    'newspaper-o': [24],
    'lightbulb-o': [24],
    'cog': [24],
    'pencil-square-o': [24],
    'pencil-square-o--light': [24, null, '#ffffff'],

    'photo-library': [26, MaterialIcons],
    'list': [30, MaterialIcons],
    'clear': [30, MaterialIcons],
    'done': [30, MaterialIcons],
};

const iconsMap = {};
const iconsLoaded = () => {
    // const promises = [Promise.resolve];

    // Object.keys(icons).forEach((iconName) => {
    //     const Provider = icons[iconName][1] || FontAwesome;
    //     const size = __DEV__ || Platform.OS === 'ios' ? icons[iconName][0] : PixelRatio.getPixelSizeForLayoutSize(icons[iconName][0]);
    //     promises.push(Provider.getImageSource(iconName.replace(replaceSuffixPattern, ''), size, icons[iconName][2] || '#000000'));
    // });

    console.log('running')

    return new Promise((resolve) => {
        console.log('resolving')

        return resolve();
    })
    //
    // return Promise.all(promises).then((sources) => {
    //     // Object.keys(icons).forEach((iconName, idx) => iconsMap[iconName] = sources[idx]);
    //     return Promise.resolve();
    // });
};

export {
    icons,
    iconsMap,
    iconsLoaded,
};
