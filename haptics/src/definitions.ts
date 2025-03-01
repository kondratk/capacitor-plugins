export interface HapticsPlugin {
  /**
   * Trigger a haptics "impact" feedback
   *
   * @since 1.0.0
   */
  impact(options?: ImpactOptions): Promise<void>;

  /**
   * Trigger a haptics "notification" feedback
   *
   * @since 1.0.0
   */
  notification(options?: NotificationOptions): Promise<void>;

  /**
   * Vibrate the device
   *
   * @since 1.0.0
   */
  vibrate(options?: VibrateOptions): Promise<void>;

  /**
   * Trigger a selection started haptic hint
   *
   * @since 1.0.0
   */
  selectionStart(): Promise<void>;

  /**
   * Trigger a selection changed haptic hint. If a selection was
   * started already, this will cause the device to provide haptic
   * feedback
   *
   * @since 1.0.0
   */
  selectionChanged(): Promise<void>;

  /**
   * If selectionStart() was called, selectionEnd() ends the selection.
   * For example, call this when a user has lifted their finger from a control
   *
   * @since 1.0.0
   */
  selectionEnd(): Promise<void>;
}

export interface ImpactOptions {
  /**
   * Impact Feedback Style
   *
   * The mass of the objects in the collision simulated by a [UIImpactFeedbackGenerator](https://developer.apple.com/documentation/uikit/uiimpactfeedbackstyle) object.
   *
   * @default ImpactStyle.Heavy
   * @since 1.0.0
   */
  style: ImpactStyle;
}

export enum ImpactStyle {
  /**
   * A collision between small, light user interface elements
   *
   * @since 1.0.0
   */
  Heavy = 'HEAVY',

  /**
   * A collision between moderately sized user interface elements
   *
   * @since 1.0.0
   */
  Medium = 'MEDIUM',

  /**
   * A collision between small, light user interface elements
   *
   * @since 1.0.0
   */
  Light = 'LIGHT',
}

export interface NotificationOptions {
  /**
   * Notification Feedback Type
   *
   * The type of notification feedback generated by a [UINotificationFeedbackGenerator](https://developer.apple.com/documentation/uikit/uinotificationfeedbacktype) object.
   *
   * @default NotificationType.SUCCESS
   * @since 1.0.0
   */
  type: NotificationType;
}

export enum NotificationType {
  /**
   * A notification feedback type indicating that a task has completed successfully
   *
   * @since 1.0.0
   */
  Success = 'SUCCESS',

  /**
   * A notification feedback type indicating that a task has produced a warning
   *
   * @since 1.0.0
   */
  Warning = 'WARNING',

  /**
   * A notification feedback type indicating that a task has failed
   *
   * @since 1.0.0
   */
  Error = 'ERROR',
}

export interface VibrateOptions {
  /**
   * Duration of the vibration in milliseconds.
   *
   * Not supported in iOS 12 and older.
   *
   * @default 300
   * @since 1.0.0
   */
  duration: number;
}

/**
 * @deprecated Use `ImpactOptions`.
 * @since 1.0.0
 */
export type HapticsImpactOptions = ImpactOptions;

/**
 * @deprecated Use `NotificationOptions`.
 * @since 1.0.0
 */
export type HapticsNotificationOptions = NotificationOptions;

/**
 * @deprecated Use `NotificationType`.
 * @since 1.0.0
 */
export const HapticsNotificationType = NotificationType;

/**
 * @deprecated Use `ImpactStyle`.
 * @since 1.0.0
 */
export const HapticsImpactStyle = ImpactStyle;
