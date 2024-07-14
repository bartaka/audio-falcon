import { defineField, defineType } from 'sanity';
import { ProjectsIcon } from '@sanity/icons';

export const projectType = defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    icon: ProjectsIcon,
    groups: [
        { name: 'basicInfo', title: 'Basic Info' },
        { name: 'image', title: 'Image' },
        { name: 'links', title: 'Links' },
        { name: 'other', title: 'Other' }
    ],
    fields: [
        defineField({
            name: 'projectName',
            type: 'string',
            group: 'basicInfo',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            group: 'basicInfo',
            description: 'Pls just click "Generate"',
            validation: (rule) => rule.required(),
            options: { source: 'projectName' }
        }),
        defineField({
            name: 'projectType',
            type: 'string',
            group: 'basicInfo',
            description: 'Film / Video Game / TV Series...',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'role',
            title: 'Your Role',
            type: 'string',
            group: 'basicInfo',
            description: 'Sound Design / Music Implementation / Voice Acting / Mix...',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'year',
            type: 'number',
            group: 'basicInfo',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'image',
            type: 'image',
            group: 'image',
            description: '386x216px, below 100 KB',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'imageAltText',
            type: 'string',
            group: 'image',
            description: 'A short description of the image. Or just copy the project name.',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'client',
            type: 'string',
            group: 'other',
        }),
        defineField({
            name: 'website',
            type: 'url',
            description: 'Pls input in full format: "https://website.com/"',
            group: 'links',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'note',
            title: 'Was postproduction done in Studio Beep?',
            group: 'other',
            type: 'boolean',
            initialValue: false
        }),
        defineField({
            name: 'description',
            type: 'array',
            group: 'basicInfo',
            validation: (rule) => rule.required(),
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'video',
            type: 'url',
            group: 'links',
            description: 'Full YouTube address'
        }),
        defineField({
            name: 'orderRank',
            type: 'string',
            readOnly: true,
            hidden: true
        })
    ],
    preview: {
        select: {
            title: 'projectName',
            subtitle: 'year',
            media: 'image'
        }
    }
});
