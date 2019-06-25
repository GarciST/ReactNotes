import { Navigation } from 'react-native-navigation';
import { ComponentType } from 'react';

export const registerAppComponents = (scenes: ComponentType<any>[]) => {
    scenes.forEach((scene) => {
        Navigation.registerComponent(scene.name, () => scene);
    });
}