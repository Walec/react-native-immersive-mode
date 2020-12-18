import { EmitterSubscription } from 'react-native';

export type BarMode = {
  Normal: 'Normal';
  Full: 'Full';
  FullSticky: 'FullSticky';
  Bottom: 'Bottom';
  BottomSticky: 'BottomSticky';
};

export type BarVisibility = {
  statusBar: boolean;
  navigationBottomBar: boolean;
};

export type ImmersiveBarStyle = 'Dark' | 'Light';
export type ImmersiveBarMode =
  | BarMode['Normal']
  | BarMode['Full']
  | BarMode['FullSticky']
  | BarMode['Bottom']
  | BarMode['BottomSticky'];

interface ImmersiveModeStatic extends BarMode {
  fullLayout(full: boolean): void;

  /**
   * Set system ui mode.
   * @param mode
   */
  setBarMode(mode: ImmersiveBarMode): void;

  /**
   * Set color of system bar.
   * When set color translucent will be disabled.
   *
   * @param color color hex #rrggbbaa. if color is null will set default color
   */
  setBarColor(color: string): void;

  /**
   * Set style of system bar.
   * System Navigation will be Light, must be change bar color `setBarColor` to other color first.
   *
   * @param style
   */
  setBarStyle(style: ImmersiveBarStyle): void;

  /**
   * System bar background color is transparent 50%.
   * When `true` bar color will be disabled.
   *
   * @param enable
   */
  setBarTranslucent(enable: boolean): void;

  addEventListener(
    callback: (viisibility: BarVisibility) => void
  ): EmitterSubscription;
}

declare const ImmersiveMode: ImmersiveModeStatic;
export default ImmersiveMode;
