import { defineField, defineType } from 'sanity';

export const filesType = defineType({
    name: 'files',
    title: 'Files',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Files',
            hidden: true
        }),
        defineField({
            name: 'cv',
            title: 'CV File',
            type: 'file',
            options: {
                accept: '.pdf'
            }
        })
    ],
    preview: {
        prepare() {
            return { title: 'Files' };
        }
    }
});
