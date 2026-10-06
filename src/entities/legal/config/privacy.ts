import type { LegalSectionConfig } from '@/entities/legal/model/commontypes';

export const privacyConfig: readonly LegalSectionConfig[] = [
  {
    title: 'pages.legal.privacy.general.title',
    items: [
      {
        text: [
          {
            value: 'pages.legal.privacy.general.items.0.text.0.value',
          },
          {
            value: 'pages.legal.privacy.general.items.0.text.1.value',
            accent: 'link',
          },
          {
            value: 'pages.legal.privacy.general.items.0.text.2.value',
          },
        ],
      },
      { text: 'pages.legal.privacy.general.items.1.text' },
      { text: 'pages.legal.privacy.general.items.2.text' },
    ],
  },

  {
    title: 'pages.legal.privacy.operator.title',
    items: [
      { text: 'pages.legal.privacy.operator.items.0.text' },
      {
        text: [
          {
            value: 'pages.legal.privacy.operator.items.1.text.0.value',
            accent: 'bold',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.privacy.operator.items.2.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.privacy.operator.items.2.text.1.value',
          },
        ],
      },
      //   {
      //     text: [
      //       {
      //         value: 'pages.legal.privacy.operator.items.3.text.0.value',
      //         accent: 'bold',
      //       },
      //       {
      //         value: 'pages.legal.privacy.operator.items.3.text.1.value',
      //       },
      //     ],
      //   },
      //   {
      //     text: [
      //       {
      //         value: 'pages.legal.privacy.operator.items.4.text.0.value',
      //         accent: 'bold',
      //       },
      //       {
      //         value: 'pages.legal.privacy.operator.items.4.text.1.value',
      //       },
      //     ],
      //   },
      {
        text: [
          {
            value: 'pages.legal.privacy.operator.items.3.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.privacy.operator.items.3.text.1.value',
            accent: 'link',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.privacy.operator.items.4.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.privacy.operator.items.4.text.1.value',
          },
        ],
      },
      { text: 'pages.legal.privacy.operator.items.5.text' },
    ],
    className: 'noMarkers',
  },

  {
    title: 'pages.legal.privacy.collectedData.title',
    items: [
      { text: 'pages.legal.privacy.collectedData.items.0.text' },
      {
        text: [
          {
            value: 'pages.legal.privacy.collectedData.items.1.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.privacy.collectedData.items.1.text.1.value',
          },
        ],
        items: [
          {
            text: 'pages.legal.privacy.collectedData.items.1.items.0.text',
          },
          {
            text: 'pages.legal.privacy.collectedData.items.1.items.1.text',
          },
          {
            text: 'pages.legal.privacy.collectedData.items.1.items.2.text',
          },
          {
            text: 'pages.legal.privacy.collectedData.items.1.items.3.text',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.privacy.collectedData.items.2.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.privacy.collectedData.items.2.text.1.value',
          },
        ],
        items: [
          {
            text: 'pages.legal.privacy.collectedData.items.2.items.0.text',
          },
          {
            text: 'pages.legal.privacy.collectedData.items.2.items.1.text',
          },
          {
            text: 'pages.legal.privacy.collectedData.items.2.items.2.text',
          },
          {
            text: 'pages.legal.privacy.collectedData.items.2.items.3.text',
          },
          {
            text: 'pages.legal.privacy.collectedData.items.2.items.4.text',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.privacy.collectedData.items.3.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.privacy.collectedData.items.3.text.1.value',
          },
        ],
      },
    ],
  },

  {
    title: 'pages.legal.privacy.purposes.title',
    items: [
      {
        text: 'pages.legal.privacy.purposes.items.0.text',
        table: {
          headers: [
            'pages.legal.privacy.purposes.items.0.table.headers.0',
            'pages.legal.privacy.purposes.items.0.table.headers.1',
          ],
          rows: [
            [
              'pages.legal.privacy.purposes.items.0.table.rows.0.0',
              [
                {
                  value:
                    'pages.legal.privacy.purposes.items.0.table.rows.0.1.0.value',
                  accent: 'bold',
                },
                {
                  value:
                    'pages.legal.privacy.purposes.items.0.table.rows.0.1.1.value',
                },
              ],
            ],
            [
              'pages.legal.privacy.purposes.items.0.table.rows.1.0',
              [
                {
                  value:
                    'pages.legal.privacy.purposes.items.0.table.rows.1.1.0.value',
                  accent: 'bold',
                },
                {
                  value:
                    'pages.legal.privacy.purposes.items.0.table.rows.1.1.1.value',
                },
              ],
            ],
            [
              'pages.legal.privacy.purposes.items.0.table.rows.2.0',
              [
                {
                  value:
                    'pages.legal.privacy.purposes.items.0.table.rows.2.1.0.value',
                  accent: 'bold',
                },
                {
                  value:
                    'pages.legal.privacy.purposes.items.0.table.rows.2.1.1.value',
                },
              ],
            ],
            [
              'pages.legal.privacy.purposes.items.0.table.rows.3.0',
              [
                {
                  value:
                    'pages.legal.privacy.purposes.items.0.table.rows.3.1.0.value',
                  accent: 'bold',
                },
                {
                  value:
                    'pages.legal.privacy.purposes.items.0.table.rows.3.1.1.value',
                },
              ],
            ],
            [
              'pages.legal.privacy.purposes.items.0.table.rows.4.0',
              [
                {
                  value:
                    'pages.legal.privacy.purposes.items.0.table.rows.4.1.0.value',
                  accent: 'bold',
                },
                {
                  value:
                    'pages.legal.privacy.purposes.items.0.table.rows.4.1.1.value',
                },
              ],
            ],
            [
              'pages.legal.privacy.purposes.items.0.table.rows.5.0',
              [
                {
                  value:
                    'pages.legal.privacy.purposes.items.0.table.rows.5.1.0.value',
                  accent: 'bold',
                },
                {
                  value:
                    'pages.legal.privacy.purposes.items.0.table.rows.5.1.1.value',
                },
              ],
            ],
          ],
        },
      },
      {
        text: [
          {
            value: 'pages.legal.privacy.purposes.items.1.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.privacy.purposes.items.1.text.1.value',
          },
          {
            value: 'pages.legal.privacy.purposes.items.1.text.2.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.privacy.purposes.items.1.text.3.value',
          },
        ],
      },
    ],
  },

  //   {
  //     title: 'pages.legal.privacy.legalBasis.title',
  //     items: [
  //       {
  //         text: 'pages.legal.privacy.legalBasis.items.0.text',
  //         items: [0, 1, 2, 3].map((index) => ({
  //           text: [
  //             {
  //               value: `pages.legal.privacy.legalBasis.items.0.items.${index}.text.0.value`,
  //               accent: 'bold' as const,
  //             },
  //             {
  //               value: `pages.legal.privacy.legalBasis.items.0.items.${index}.text.1.value`,
  //             },
  //           ],
  //         })),
  //       },
  //       { text: 'pages.legal.privacy.legalBasis.items.1.text' },
  //     ],
  //   },

  {
    title: 'pages.legal.privacy.thirdParties.title',
    items: [
      {
        text: 'pages.legal.privacy.thirdParties.items.0.text',
        items: [0, 1, 2, 3, 4].map((index) => ({
          text: [
            {
              value: `pages.legal.privacy.thirdParties.items.0.items.${index}.text.0.value`,
              accent: 'bold' as const,
            },
            {
              value: `pages.legal.privacy.thirdParties.items.0.items.${index}.text.1.value`,
            },
            ...(index === 0
              ? [
                  {
                    value:
                      'pages.legal.privacy.thirdParties.items.0.items.0.text.2.value',
                    accent: 'bold' as const,
                  },
                ]
              : []),
          ],
        })),
      },
      {
        text: [
          {
            value: 'pages.legal.privacy.thirdParties.items.1.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.privacy.thirdParties.items.1.text.1.value',
          },
        ],
        items: [
          {
            text: 'pages.legal.privacy.thirdParties.items.1.items.0.text',
          },
          {
            text: 'pages.legal.privacy.thirdParties.items.1.items.1.text',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.privacy.thirdParties.items.2.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.privacy.thirdParties.items.2.text.1.value',
          },
        ],
      },
    ],
  },

  {
    title: 'pages.legal.privacy.storage.title',
    items: [
      {
        text: [
          {
            value: 'pages.legal.privacy.storage.items.0.text.0.value',
          },
          {
            value: 'pages.legal.privacy.storage.items.0.text.1.value',
            accent: 'bold',
          },
        ],
        items: [
          {
            text: [
              {
                value:
                  'pages.legal.privacy.storage.items.0.items.0.text.0.value',
              },
              {
                value:
                  'pages.legal.privacy.storage.items.0.items.0.text.1.value',
                accent: 'bold',
              },
              {
                value:
                  'pages.legal.privacy.storage.items.0.items.0.text.2.value',
              },
            ],
          },
          { text: 'pages.legal.privacy.storage.items.0.items.1.text' },
          { text: 'pages.legal.privacy.storage.items.0.items.2.text' },
        ],
      },
      {
        text: 'pages.legal.privacy.storage.items.1.text',
        items: [
          { text: 'pages.legal.privacy.storage.items.1.items.0.text' },
          { text: 'pages.legal.privacy.storage.items.1.items.1.text' },
          { text: 'pages.legal.privacy.storage.items.1.items.2.text' },
          { text: 'pages.legal.privacy.storage.items.1.items.3.text' },
        ],
      },
    ],
  },

  {
    title: 'pages.legal.privacy.rights.title',
    items: [
      {
        text: 'pages.legal.privacy.rights.items.0.text',
        items: [0, 1, 2, 3, 4, 5, 6, 7].map((index) => ({
          text: [
            {
              value: `pages.legal.privacy.rights.items.0.items.${index}.text.0.value`,
              accent: 'bold' as const,
            },
            {
              value: `pages.legal.privacy.rights.items.0.items.${index}.text.1.value`,
            },
          ],
        })),
      },
      {
        text: [
          {
            value: 'pages.legal.privacy.rights.items.1.text.0.value',
          },
          {
            value: 'pages.legal.privacy.rights.items.1.text.1.value',
            accent: 'link',
          },
          {
            value: 'pages.legal.privacy.rights.items.1.text.2.value',
          },
          {
            value: 'pages.legal.privacy.rights.items.1.text.3.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.privacy.rights.items.1.text.4.value',
          },
        ],
      },
    ],
  },

  {
    title: 'pages.legal.privacy.cookies.title',
    items: [
      { text: 'pages.legal.privacy.cookies.items.0.text' },
      {
        text: [
          {
            value: 'pages.legal.privacy.cookies.items.1.text.0.value',
            accent: 'bold',
          },
        ],
        table: {
          headers: [
            'pages.legal.privacy.cookies.items.1.table.headers.0',
            'pages.legal.privacy.cookies.items.1.table.headers.1',
            'pages.legal.privacy.cookies.items.1.table.headers.2',
          ],
          rows: [
            [
              'pages.legal.privacy.cookies.items.1.table.rows.0.0',
              'pages.legal.privacy.cookies.items.1.table.rows.0.1',
              'pages.legal.privacy.cookies.items.1.table.rows.0.2',
            ],
            [
              'pages.legal.privacy.cookies.items.1.table.rows.1.0',
              'pages.legal.privacy.cookies.items.1.table.rows.1.1',
              'pages.legal.privacy.cookies.items.1.table.rows.1.2',
            ],
            [
              'pages.legal.privacy.cookies.items.1.table.rows.2.0',
              'pages.legal.privacy.cookies.items.1.table.rows.2.1',
              'pages.legal.privacy.cookies.items.1.table.rows.2.2',
            ],
            [
              'pages.legal.privacy.cookies.items.1.table.rows.3.0',
              'pages.legal.privacy.cookies.items.1.table.rows.3.1',
              'pages.legal.privacy.cookies.items.1.table.rows.3.2',
            ],
          ],
        },
      },
      {
        text: [
          {
            value: 'pages.legal.privacy.cookies.items.2.text.0.value',
            accent: 'bold',
          },
        ],
        items: [
          {
            text: 'pages.legal.privacy.cookies.items.2.items.0.text',
            items: [0, 1, 2].map((index) => ({
              text: [
                {
                  value: `pages.legal.privacy.cookies.items.2.items.0.items.${index}.text.0.value`,
                  accent: 'bold' as const,
                },
                {
                  value: `pages.legal.privacy.cookies.items.2.items.0.items.${index}.text.1.value`,
                },
              ],
            })),
          },
          {
            text: 'pages.legal.privacy.cookies.items.2.items.1.text',
          },
          {
            text: [
              {
                value:
                  'pages.legal.privacy.cookies.items.2.items.2.text.0.value',
                accent: 'bold',
              },
              {
                value:
                  'pages.legal.privacy.cookies.items.2.items.2.text.1.value',
              },
              {
                value:
                  'pages.legal.privacy.cookies.items.2.items.2.text.2.value',
                accent: 'bold',
              },
              {
                value:
                  'pages.legal.privacy.cookies.items.2.items.2.text.3.value',
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: 'pages.legal.privacy.final.title',
    items: [
      { text: 'pages.legal.privacy.final.items.0.text' },
      { text: 'pages.legal.privacy.final.items.1.text' },
      {
        text: [
          {
            value: 'pages.legal.privacy.final.items.2.text.0.value',
          },
          {
            value: 'pages.legal.privacy.final.items.2.text.1.value',
            accent: 'link',
          },
          {
            value: 'pages.legal.privacy.final.items.2.text.2.value',
          },
        ],
      },
    ],
  },
];
