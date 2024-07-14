import { defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons'

export const bannerType = defineType({
    name: 'banners',
    title: 'Banners',
    type: 'document',
    icon: ImageIcon,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'desktopImage',
            description: '2880x1578px, ideally < 500 KB',
            type: 'image',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'mobileImage',
            description: '480x540px',
            type: 'image',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'altText',
            type: 'string',
            description: 'Short description of the image.',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'orderRank',
            type: 'string',
            readOnly: true,
            hidden: true
        })
    ]
});