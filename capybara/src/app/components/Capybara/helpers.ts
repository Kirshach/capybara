export const preventDefault = (evt: Event): void => {
  evt.preventDefault();
  evt.target?.removeEventListener('click', preventDefault);
};

export const mouseMoveListener = (evt: Event): void => {
  evt.target?.addEventListener('click', preventDefault);
  evt.target?.removeEventListener('mousemove', mouseMoveListener);
};
