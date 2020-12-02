import React from 'react';
import { LayoutItem } from '../../../../store/states/appState/slices/layout/types';
import EditLinkForm from './EditLinkForm/EditLinkForm';
import { EditTileInputsData, OnContentInputChange } from './types';

const getTileFormLayout = (
  type: string,
  inputsData: EditTileInputsData,
  onContentInputChange: OnContentInputChange,
): JSX.Element => {
  switch (type) {
    case 'link':
      return <EditLinkForm inputsData={inputsData} onInputChange={onContentInputChange} />;
    default:
      throw new Error('Invalid overlay form type recieved in EditTileForm component');
  }
};

const addBookmark = (data: EditTileInputsData, tileDataState: LayoutItem): void => {
  if (chrome.bookmarks) {
    const oldTitle = tileDataState.data.content.title;
    const oldUrl = tileDataState.data.content.url;
    const newTitle = data.content.title;
    const newUrl = data.content.url;
    chrome.bookmarks.search({ title: oldTitle, url: oldUrl }, function (result) {
      if (!result.length) {
        chrome.bookmarks.create({
          title: newTitle,
          url: newUrl,
        });
      } else {
        const id = result[0].id;
        chrome.bookmarks.update(id, { title: newTitle, url: newUrl }, function (result) {
          return result;
        });
      }
    });
  }
};

export { getTileFormLayout, addBookmark };
