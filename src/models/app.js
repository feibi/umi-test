export default {
  namespace: 'app',
  state: {
    visible: false,
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {},
};
