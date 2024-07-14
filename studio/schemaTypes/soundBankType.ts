import { defineField, defineType } from 'sanity';
import { DatabaseIcon } from '@sanity/icons'

export const soundBankType = defineType({
    name: 'soundBanks',
    title: 'Sound Banks',
    type: 'document',
    icon: DatabaseIcon,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            validation: rule => rule.required()
        })
    ]
});