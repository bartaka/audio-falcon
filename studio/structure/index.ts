import type { StructureResolver } from 'sanity/structure'
import { DatabaseIcon, ImageIcon, ProjectsIcon, DocumentIcon } from '@sanity/icons';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export const structure: StructureResolver = (S, context) =>
    S.list()
        .id('root')
        .title('Content')
        .items([
            orderableDocumentListDeskItem({
                type: 'banners',
                title: 'Banners',
                icon: ImageIcon,
                S,
                context
            }),
            orderableDocumentListDeskItem({
                type: 'projects',
                title: 'Projects',
                icon: ProjectsIcon,
                S,
                context
            }),
            S.listItem()
                .title('Files')
                .icon(DocumentIcon)
                .child(
                    S.document()
                        .schemaType('files')
                        .documentId('files')
                ),
            S.divider(),
            S.documentTypeListItem('soundBanks').title('Sound Banks').icon(DatabaseIcon),
        ]);
