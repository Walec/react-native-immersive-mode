import { EmitterSubscription } from 'react-native';

type BarModeT = {
  Normal: 'Normal';
  Full: 'Full';
  FullSticky: 'FullSticky';
  Bottom: 'Bottom';
  BottomSticky: 'BottomSticky';
};

type BarVisibilityT = {
  statusBar: boolean;
  navigationBottomBar: boolean;
};

type ImmersiveBarStyleT = 'Dark' | 'Light';
type ImmersiveBarModeT =
  | BarModeT['Normal']
  | BarModeT['Full']
  | BarModeT['FullSticky']
  | BarModeT['Bottom']
  | BarModeT['BottomSticky'];

interface ImmersiveModeStatic extends BarModeT {
  fullLayout(full: boolean): void;

  /**
   * Set system ui mode.
   * @param mode
   */
  setBarMode(mode: ImmersiveBarModeT): void;

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
  setBarStyle(style: ImmersiveBarStyleT): void;

  /**
   * System bar background color is transparent 50%.
   * When `true` bar color will be disabled.
   *
   * @param enable
   */
  setBarTranslucent(enable: boolean): void;

  addEventListener(
    callback: (viisibility: BarVisibilityT) => void
  ): EmitterSubscription;
}

declare const ImmersiveMode: ImmersiveModeStatic;
export default ImmersiveMode;
