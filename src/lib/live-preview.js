import { ContentfulLivePreview } from '@contentful/live-preview';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

ContentfulLivePreview.init({ locale: 'en-US', enableLiveUpdates: true, debugMode: true });

const updateEntry = (entry, value) => {
  console.log('updateEntry', entry, value);
  if (typeof value === 'string') {
    console.log('value', value);
    if (entry.nodeName === 'A') {
      console.log('entry.nodeName', entry.nodeName);
      entry.href = value;
    } else {
      entry.textContent = value;
    }
  } else if (typeof value === 'object' && value.hasOwnProperty('json')) {
    entry.innerHTML = documentToHtmlString(value.json);
  } else if (value.url) {
    entry.src = value.url;
  }
}

const callback = (data) => {
  const collection = data.contentCollection.items;
  for (const item of collection) {
    for (const [key, value] of Object.entries(item)) {
      const entry = document.querySelector(`[data-contentful-field-id="${key}"]`);
      if (!value || !entry) continue;

      if (value.hasOwnProperty('sys')) {
        console.log('object value', value);
        for (const [subKey, subValue] of Object.entries(value.items)) {
          console.log('subKey', subKey, subValue);
          const subEntry = document.querySelector(`[data-contentful-entry-id="${value.sys.id}"][data-contentful-field-id="${subKey}"]`);
          if (subEntry) updateEntry(subEntry, subValue);
        }
      } else {
        updateEntry(entry, value);
      }
    }
  }
};

const data = window.contentfulEntry;
ContentfulLivePreview.subscribe({ data, locale: 'en-US', callback });
