import React from 'react';

const SettingsForm = () => {
  return (
    <>
      <div className="overlay-form__group">
        <label className="overlay-form__label" htmlFor="overlay-edit-url">
          URL:
        </label>
        <input
          className="overlay-form__input overlay-form__input--text"
          name="url"
          type="text"
          id="overlay-edit-url"
          value={url || ''}
        />
      </div>
      <div className="overlay-form__group">
        <label className="overlay-form__label" htmlFor="overlay-edit-title">
          Link title:
        </label>
        <input
          className="overlay-form__input overlay-form__input--text"
          name="title"
          type="text"
          id="overlay-edit-title"
          value={title || ''}
        />
      </div>
    </>
  );
};

export default SettingsForm;
