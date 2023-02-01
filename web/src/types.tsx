export interface AlertData {
  title: string;
  message: string;
  type: keyof AlertType;
  play?: boolean;
  volume?: number;
  style: 'clean' | 'transparent';
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

export type InstructionItem = {
  description: string;
  buttons: string[];
};

export interface InstructionData {
  title: string;
  play?: boolean;
  volume?: number;
  position?: string;
  items: InstructionItem[];
}

export interface KeyboardRow {
  title: string;
  options?: string[];
  icon?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

export interface KeyboardData {
  title: string;
  rows: KeyboardRow[];
}
