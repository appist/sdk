export const BUTTON_TYPES = ["submit", "button", "reset"] as const;
export type ButtonType = typeof BUTTON_TYPES[number];

export const SIZES = ["xs", "sm", "md", "lg", "xl"] as const;
export type Size = typeof SIZES[number];

export const VARIANTS = ["primary", "secondary", "white"] as const;
export type Variant = typeof VARIANTS[number];
