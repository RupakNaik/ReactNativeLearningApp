export const typography = {
  fontSizes: {
    sm: 12,
    md: 14,
    lg: 18,
    xl: 22,
    xxl: 26,
    xxxl: 32,
    xxxxl: 40,
    xxxxxl: 48

  },
  lineHeights: {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
    tight: 1.1,
    snug: 1.25,
    normal: 1.4,
    relaxed: 1.6,

  },
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  } as FontWeight,
  fontFamilyRegular: 'System',
  fontFamilyMedium: 'System',
  fontFamilyBold: 'System',
};

export type FontWeight = {
  [key: string]: 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 'ultralight'
  | 'thin'
  | 'light'
  | 'medium'
  | 'regular'
  | 'semibold'
  | 'condensedBold'
  | 'condensed'
  | 'heavy'
  | 'black';
}