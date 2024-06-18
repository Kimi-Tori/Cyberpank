import { createVuetify } from 'vuetify';

const vuetify = createVuetify({
  theme: {
    dark: false
  },
  options: {
    customProperties: true
  },
  icons: {
    iconfont: "mdi"
  }
});

export default vuetify;