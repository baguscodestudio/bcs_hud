export interface AlertData {
  title: string;
  message: string;
  type: keyof AlertType;
  play?: boolean;
  volume?: number;
  position?: string;
  duration?: number;
  icon?: string;
}

export interface AlertProp {
  color: string;
  text: string;
  background: string;
  icon: JSX.Element;
}

export type AlertType = {
  warning: AlertProp;
  success: AlertProp;
  error: AlertProp;
  info: AlertProp;
};

export interface KeyboardRow {
  title: string;
  icon?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

export interface KeyboardData {
  title: string;
  rows: KeyboardRow[];
}
