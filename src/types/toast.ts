/** Visual and announcement styles supported by notifications. */
export type ToastTheme = "success" | "error" | "info";

/** Options provided when displaying a notification. */
export type ToastOptions = {
  message: string;
  theme?: ToastTheme;
  duration?: number;
};

/** A notification with its resolved settings and unique ID. */
export type ToastItem = {
  id: string;
  message: string;
  theme: ToastTheme;
  duration: number;
};
