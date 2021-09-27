export default {
  props: {
    uppercase: {
      type: Boolean,
      required: false,
      default: false
    },
    capitalize: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data(props) {
    let textVariantClass = '';
    if (props.uppercase) {
      textVariantClass = 'text--uppercase';
    } else if (props.capitalize) {
      textVariantClass = 'text--capitalize';
    }

    return {
      textVariantClass
    };
  }
};
