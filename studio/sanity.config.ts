import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default defineConfig({
  name: 'default',
  title: 'Audio Falcon',

  projectId: 'njjblh1d',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    visionTool()
  ],

  schema: {
    types: () => {
      return [
        ...schemaTypes,
        {
          name: 'project',
          title: 'Project',
          type: 'document',
          orderings: [orderRankOrdering],
          fields: [
            orderRankField({ type: 'project' })
          ],
        },
        {
          name: 'banner',
          title: 'Banner',
          type: 'document',
          orderings: [orderRankOrdering],
          fields: [
            orderRankField({ type: 'banner' })
          ]
        }
      ]
    }
  }
});
