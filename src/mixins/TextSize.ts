interface SIZES {
  SMALL: 0x0,
  LARGE: 0x1,
  MEDIUM: 0x3,
  NONE: 0x2,
}

export const SIZES: SIZES = {
  SMALL: 0x0,
  LARGE: 0x1,
  MEDIUM: 0x3,
  NONE: 0x2
};

interface CLASS_MAP {
  [key: number]: string
}

export const CLASS_MAP: CLASS_MAP = {
  [SIZES.SMALL]: 'text--small',
  [SIZES.LARGE]: 'text--large',
  [SIZES.MEDIUM]: 'text--medium'
};

export default {
  props: {
    textSize: {
      type: Number,
      validator: (size: number) => Object.values(SIZES).includes(size),
      required: false,
      default: SIZES.NONE
    }
  },
  data(props: { textSize: number }) {
    return {
      textSizeClass: CLASS_MAP[props.textSize]
    };
  }
};
