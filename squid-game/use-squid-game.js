export default function useSquidGame(valitate) {
  return {
    register: inputType => ({
      type: inputType,
      ref: null,
      onChange: () => {},
      disabled: false,
    }),
    submit: {
      onClick: () => {},
      disabled: false,
    },
    isLoading: false,
    gameStatus: 'IN_PROGRESS',
    history: [],
  };
}
