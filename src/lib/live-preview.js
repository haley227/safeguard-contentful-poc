import { ContentfulLivePreview } from '@contentful/live-preview';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

ContentfulLivePreview.init({ locale: 'en-US', enableLiveUpdates: true, debugMode: true });

const updateEntry = (entry, value) => {
  if (typeof value === 'string') {
    entry.textContent = value;
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
      console.log(key, value);
      const entry = document.querySelector(`[data-contentful-field-id="${key}"]`);
      if (entry) {
        updateEntry(entry, value);
      } else if (value.hasOwnProperty('sys')) {
        for (const [subKey, subValue] of Object.entries(value)) {
          const subEntry = document.querySelector(`[data-contentful-entry-id="${value.sys.id}"][data-contentful-field-id="${subKey}"]`);
          if (subEntry) updateEntry(subEntry, subValue);
        };
      }
    }
  }
};

const data = window.contentfulEntry;
ContentfulLivePreview.subscribe({ data, locale: 'en-US', callback });
