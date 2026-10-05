import type { LegalSectionConfig } from '@/entities/legal/model/commontypes';

export const cookiesConfig: readonly LegalSectionConfig[] = [
  {
    title: 'pages.legal.cookies.general.title',
    items: [
      { text: 'pages.legal.cookies.general.items.0.text' },
      { text: 'pages.legal.cookies.general.items.1.text' },
      { text: 'pages.legal.cookies.general.items.2.text' },
    ],
  },

  {
    title: 'pages.legal.cookies.types.title',
    items: [
      {
        text: 'pages.legal.cookies.types.items.0.text',
        table: {
          headers: [
            'pages.legal.cookies.types.items.0.table.headers.0',
            'pages.legal.cookies.types.items.0.table.headers.1',
            'pages.legal.cookies.types.items.0.table.headers.2',
          ],
          rows: [
            [
              'pages.legal.cookies.types.items.0.table.rows.0.0',
              'pages.legal.cookies.types.items.0.table.rows.0.1',
              'pages.legal.cookies.types.items.0.table.rows.0.2',
            ],
            [
              'pages.legal.cookies.types.items.0.table.rows.1.0',
              'pages.legal.cookies.types.items.0.table.rows.1.1',
              'pages.legal.cookies.types.items.0.table.rows.1.2',
            ],
            [
              'pages.legal.cookies.types.items.0.table.rows.2.0',
              'pages.legal.cookies.types.items.0.table.rows.2.1',
              'pages.legal.cookies.types.items.0.table.rows.2.2',
            ],
            [
              'pages.legal.cookies.types.items.0.table.rows.3.0',
              'pages.legal.cookies.types.items.0.table.rows.3.1',
              'pages.legal.cookies.types.items.0.table.rows.3.2',
            ],
          ],
        },
      },
    ],
  },

  {
    title: 'pages.legal.cookies.purposes.title',
    items: [
      {
        text: 'pages.legal.cookies.purposes.items.0.text',
        items: [0, 1, 2, 3].map((index) => ({
          text: [
            {
              value: `pages.legal.cookies.purposes.items.0.items.${index}.text.0.value`,
              accent: 'bold' as const,
            },
            {
              value: `pages.legal.cookies.purposes.items.0.items.${index}.text.1.value`,
            },
          ],
        })),
      },
    ],
  },

  {
    title: 'pages.legal.cookies.management.title',
    items: [
      {
        text: 'pages.legal.cookies.management.items.0.text',
        items: [0, 1, 2].map((index) => ({
          text: [
            {
              value: `pages.legal.cookies.management.items.0.items.${index}.text.0.value`,
              accent: 'bold' as const,
            },
            {
              value: `pages.legal.cookies.management.items.0.items.${index}.text.1.value`,
            },
          ],
        })),
      },
      {
        text: 'pages.legal.cookies.management.items.1.text',
        table: {
          headers: [
            'pages.legal.cookies.management.items.1.table.headers.0',
            'pages.legal.cookies.management.items.1.table.headers.1',
          ],
          rows: [
            [
              'pages.legal.cookies.management.items.1.table.rows.0.0',
              'pages.legal.cookies.management.items.1.table.rows.0.1',
            ],
            [
              'pages.legal.cookies.management.items.1.table.rows.1.0',
              'pages.legal.cookies.management.items.1.table.rows.1.1',
            ],
            [
              'pages.legal.cookies.management.items.1.table.rows.2.0',
              'pages.legal.cookies.management.items.1.table.rows.2.1',
            ],
            [
              'pages.legal.cookies.management.items.1.table.rows.3.0',
              'pages.legal.cookies.management.items.1.table.rows.3.1',
            ],
          ],
        },
      },
      {
        text: [
          {
            value: 'pages.legal.cookies.management.items.2.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.cookies.management.items.2.text.1.value',
          },
        ],
      },
    ],
  },

  {
    title: 'pages.legal.cookies.storage.title',
    items: [{ text: 'pages.legal.cookies.storage.items.0.text' }],
  },

  {
    title: 'pages.legal.cookies.thirdParties.title',
    items: [
      { text: 'pages.legal.cookies.thirdParties.items.0.text' },
      { text: 'pages.legal.cookies.thirdParties.items.1.text' },
      { text: 'pages.legal.cookies.thirdParties.items.2.text' },
      { text: 'pages.legal.cookies.thirdParties.items.3.text' },
    ],
  },

  {
    title: 'pages.legal.cookies.rights.title',
    items: [
      {
        text: 'pages.legal.cookies.rights.items.0.text',
        items: [0, 1, 2].map((index) => ({
          text: [
            {
              value: `pages.legal.cookies.rights.items.0.items.${index}.text.0.value`,
              accent: 'bold' as const,
            },
            {
              value: `pages.legal.cookies.rights.items.0.items.${index}.text.1.value`,
            },
          ],
        })),
      },
      {
        text: [
          {
            value: 'pages.legal.cookies.rights.items.1.text.0.value',
          },
          {
            value: 'pages.legal.cookies.rights.items.1.text.1.value',
            accent: 'link',
          },
          {
            value: 'pages.legal.cookies.rights.items.1.text.2.value',
          },
        ],
      },
      { text: 'pages.legal.cookies.rights.items.2.text' },
    ],
  },

  {
    title: 'pages.legal.cookies.changes.title',
    items: [{ text: 'pages.legal.cookies.changes.items.0.text' }],
  },

  {
    title: 'pages.legal.cookies.contacts.title',
    items: [
      { text: 'pages.legal.cookies.contacts.items.0.text' },
      {
        text: [
          {
            value: 'pages.legal.cookies.contacts.items.1.text.0.value',
            accent: 'bold',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.cookies.contacts.items.2.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.cookies.contacts.items.2.text.1.value',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.cookies.contacts.items.3.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.cookies.contacts.items.3.text.1.value',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.cookies.contacts.items.4.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.cookies.contacts.items.4.text.1.value',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.cookies.contacts.items.5.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.cookies.contacts.items.5.text.1.value',
            accent: 'link',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.cookies.contacts.items.6.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.cookies.contacts.items.6.text.1.value',
          },
        ],
      },
    ],
  },
];
