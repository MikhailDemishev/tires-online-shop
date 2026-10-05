import type { LegalSectionConfig } from '@/entities/legal/model/commontypes';

export const termsConfig: readonly LegalSectionConfig[] = [
  {
    title: 'pages.legal.terms.general.title',
    items: [
      {
        text: [
          {
            value: 'pages.legal.terms.general.items.0.text.0.value',
          },
          {
            value: 'pages.legal.terms.general.items.0.text.1.value',
            accent: 'link',
          },
          {
            value: 'pages.legal.terms.general.items.0.text.2.value',
          },
        ],
      },
      { text: 'pages.legal.terms.general.items.1' },
      { text: 'pages.legal.terms.general.items.2' },
      { text: 'pages.legal.terms.general.items.3' },
    ],
  },

  {
    title: 'pages.legal.terms.seller.title',
    items: [
      {
        text: 'pages.legal.terms.seller.items.0.text',
        items: [
          {
            text: [
              {
                value: 'pages.legal.terms.seller.items.0.items.0.text.0.value',
                accent: 'bold',
              },
            ],
          },
          {
            text: [
              {
                value: 'pages.legal.terms.seller.items.0.items.1.text.0.value',
                accent: 'bold',
              },
              {
                value: 'pages.legal.terms.seller.items.0.items.1.text.1.value',
              },
            ],
          },
          {
            text: [
              {
                value: 'pages.legal.terms.seller.items.0.items.2.text.0.value',
                accent: 'bold',
              },
              {
                value: 'pages.legal.terms.seller.items.0.items.2.text.1.value',
              },
            ],
          },
          {
            text: [
              {
                value: 'pages.legal.terms.seller.items.0.items.3.text.0.value',
                accent: 'bold',
              },
              {
                value: 'pages.legal.terms.seller.items.0.items.3.text.1.value',
              },
            ],
          },
          {
            text: [
              {
                value: 'pages.legal.terms.seller.items.0.items.4.text.0.value',
                accent: 'bold',
              },
              {
                value: 'pages.legal.terms.seller.items.0.items.4.text.1.value',
                accent: 'link',
              },
            ],
          },
          {
            text: [
              {
                value: 'pages.legal.terms.seller.items.0.items.5.text.0.value',
                accent: 'bold',
              },
              {
                value: 'pages.legal.terms.seller.items.0.items.5.text.1.value',
              },
            ],
          },
          {
            text: [
              {
                value: 'pages.legal.terms.seller.items.0.items.6.text.0.value',
                accent: 'bold',
              },
              {
                value: 'pages.legal.terms.seller.items.0.items.6.text.1.value',
                accent: 'link',
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: 'pages.legal.terms.definitions.title',
    table: {
      headers: [
        'pages.legal.terms.definitions.table.headers.0',
        'pages.legal.terms.definitions.table.headers.1',
      ],
      rows: [
        [
          'pages.legal.terms.definitions.table.rows.0.0',
          'pages.legal.terms.definitions.table.rows.0.1',
        ],
        [
          'pages.legal.terms.definitions.table.rows.1.0',
          'pages.legal.terms.definitions.table.rows.1.1',
        ],
        [
          'pages.legal.terms.definitions.table.rows.2.0',
          'pages.legal.terms.definitions.table.rows.2.1',
        ],
        [
          'pages.legal.terms.definitions.table.rows.3.0',
          [
            {
              value: 'pages.legal.terms.definitions.table.rows.3.1.0.value',
            },
            {
              value: 'pages.legal.terms.definitions.table.rows.3.1.1.value',
              accent: 'link',
            },
            {
              value: 'pages.legal.terms.definitions.table.rows.3.1.2.value',
            },
          ],
        ],
        [
          'pages.legal.terms.definitions.table.rows.4.0',
          'pages.legal.terms.definitions.table.rows.4.1',
        ],
        [
          'pages.legal.terms.definitions.table.rows.5.0',
          'pages.legal.terms.definitions.table.rows.5.1',
        ],
        [
          'pages.legal.terms.definitions.table.rows.6.0',
          'pages.legal.terms.definitions.table.rows.6.1',
        ],
      ],
    },
  },

  {
    title: 'pages.legal.terms.products.title',
    items: [
      { text: 'pages.legal.terms.products.items.0' },
      {
        text: [
          {
            value: 'pages.legal.terms.products.items.1.text.0.value',
          },
          {
            value: 'pages.legal.terms.products.items.1.text.1.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.terms.products.items.1.text.2.value',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.terms.products.items.2.text.0.value',
          },
          {
            value: 'pages.legal.terms.products.items.2.text.1.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.terms.products.items.2.text.2.value',
          },
          {
            value: 'pages.legal.terms.products.items.2.text.3.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.terms.products.items.2.text.4.value',
          },
        ],
      },
      { text: 'pages.legal.terms.products.items.3' },
      { text: 'pages.legal.terms.products.items.4' },
      { text: 'pages.legal.terms.products.items.5' },
      { text: 'pages.legal.terms.products.items.6' },
    ],
  },

  {
    title: 'pages.legal.terms.order.title',
    items: [
      {
        text: [
          {
            value: 'pages.legal.terms.order.items.0.text.0.value',
          },
          {
            value: 'pages.legal.terms.order.items.0.text.1.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.terms.order.items.0.text.2.value',
          },
        ],
      },
      {
        text: 'pages.legal.terms.order.items.1.text',
        items: [
          { text: 'pages.legal.terms.order.items.1.items.0.text' },
          { text: 'pages.legal.terms.order.items.1.items.1.text' },
          { text: 'pages.legal.terms.order.items.1.items.2.text' },
        ],
      },
      { text: 'pages.legal.terms.order.items.2.text' },
      { text: 'pages.legal.terms.order.items.3.text' },
      { text: 'pages.legal.terms.order.items.4.text' },
    ],
  },

  {
    title: 'pages.legal.terms.payment.title',
    items: [
      {
        text: 'pages.legal.terms.payment.items.0.text',
        table: {
          headers: [
            'pages.legal.terms.payment.items.0.table.headers.0',
            'pages.legal.terms.payment.items.0.table.headers.1',
          ],
          rows: [
            [
              'pages.legal.terms.payment.items.0.table.rows.0.0',
              'pages.legal.terms.payment.items.0.table.rows.0.1',
            ],
            [
              'pages.legal.terms.payment.items.0.table.rows.1.0',
              'pages.legal.terms.payment.items.0.table.rows.1.1',
            ],
            [
              'pages.legal.terms.payment.items.0.table.rows.2.0',
              'pages.legal.terms.payment.items.0.table.rows.2.1',
            ],
          ],
        },
      },
      { text: 'pages.legal.terms.payment.items.1.text' },
      { text: 'pages.legal.terms.payment.items.2.text' },
      { text: 'pages.legal.terms.payment.items.3.text' },
    ],
  },

  {
    title: 'pages.legal.terms.delivery.title',
    items: [
      { text: 'pages.legal.terms.delivery.items.0.text' },
      {
        text: 'pages.legal.terms.delivery.items.1.text',
        table: {
          headers: [
            'pages.legal.terms.delivery.items.1.table.headers.0',
            'pages.legal.terms.delivery.items.1.table.headers.1',
          ],
          rows: [
            [
              'pages.legal.terms.delivery.items.1.table.rows.0.0',
              'pages.legal.terms.delivery.items.1.table.rows.0.1',
            ],
            [
              'pages.legal.terms.delivery.items.1.table.rows.1.0',
              'pages.legal.terms.delivery.items.1.table.rows.1.1',
            ],
          ],
        },
      },
      { text: 'pages.legal.terms.delivery.items.2.text' },
      { text: 'pages.legal.terms.delivery.items.3.text' },
      { text: 'pages.legal.terms.delivery.items.4.text' },
      { text: 'pages.legal.terms.delivery.items.5.text' },
    ],
  },

  {
    title: 'pages.legal.terms.rights.title',
    subsections: [
      {
        title: 'pages.legal.terms.rights.buyer.title',
        items: [
          {
            text: 'pages.legal.terms.rights.buyer.items.0.text',
            items: [
              {
                text: 'pages.legal.terms.rights.buyer.items.0.items.0.text',
              },
              {
                text: 'pages.legal.terms.rights.buyer.items.0.items.1.text',
              },
              {
                text: 'pages.legal.terms.rights.buyer.items.0.items.2.text',
              },
            ],
          },
          {
            text: 'pages.legal.terms.rights.buyer.items.1.text',
            items: [
              {
                text: 'pages.legal.terms.rights.buyer.items.1.items.0.text',
              },
              {
                text: 'pages.legal.terms.rights.buyer.items.1.items.1.text',
              },
              {
                text: 'pages.legal.terms.rights.buyer.items.1.items.2.text',
              },
            ],
          },
        ],
      },
      {
        title: 'pages.legal.terms.rights.seller.title',
        items: [
          {
            text: 'pages.legal.terms.rights.seller.items.0.text',
            items: [
              {
                text: 'pages.legal.terms.rights.seller.items.0.items.0.text',
              },
              {
                text: 'pages.legal.terms.rights.seller.items.0.items.1.text',
              },
            ],
          },
          {
            text: 'pages.legal.terms.rights.seller.items.1.text',
            items: [
              {
                text: 'pages.legal.terms.rights.seller.items.1.items.0.text',
              },
              {
                text: 'pages.legal.terms.rights.seller.items.1.items.1.text',
              },
              {
                text: 'pages.legal.terms.rights.seller.items.1.items.2.text',
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: 'pages.legal.terms.withdrawal.title',
    items: [
      {
        text: [
          {
            value: 'pages.legal.terms.withdrawal.items.0.text.0.value',
          },
          {
            value: 'pages.legal.terms.withdrawal.items.0.text.1.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.terms.withdrawal.items.0.text.2.value',
          },
        ],
      },
      {
        text: 'pages.legal.terms.withdrawal.items.1.text',
        items: [
          {
            text: [
              {
                value:
                  'pages.legal.terms.withdrawal.items.1.items.0.text.0.value',
              },
              {
                value:
                  'pages.legal.terms.withdrawal.items.1.items.0.text.1.value',
                accent: 'link',
              },
              {
                value:
                  'pages.legal.terms.withdrawal.items.1.items.0.text.2.value',
              },
            ],
          },
          {
            text: 'pages.legal.terms.withdrawal.items.1.items.1.text',
          },
        ],
      },
      { text: 'pages.legal.terms.withdrawal.items.2.text' },
      { text: 'pages.legal.terms.withdrawal.items.3.text' },
      { text: 'pages.legal.terms.withdrawal.items.4.text' },
      { text: 'pages.legal.terms.withdrawal.items.5.text' },
      { text: 'pages.legal.terms.withdrawal.items.6.text' },
      { text: 'pages.legal.terms.withdrawal.items.7.text' },
      { text: 'pages.legal.terms.withdrawal.items.8.text' },
      {
        text: [
          {
            value: 'pages.legal.terms.withdrawal.items.9.text.0.value',
          },
          {
            value: 'pages.legal.terms.withdrawal.items.9.text.1.value',
            accent: 'link',
          },
          {
            value: 'pages.legal.terms.withdrawal.items.9.text.2.value',
          },
        ],
      },
    ],
  },

  {
    title: 'pages.legal.terms.complaints.title',
    items: [
      { text: 'pages.legal.terms.complaints.items.0.text' },
      {
        text: 'pages.legal.terms.complaints.items.1.text',
        items: [
          {
            text: [
              {
                value:
                  'pages.legal.terms.complaints.items.1.items.0.text.0.value',
              },
              {
                value:
                  'pages.legal.terms.complaints.items.1.items.0.text.1.value',
                accent: 'link',
              },
              {
                value:
                  'pages.legal.terms.complaints.items.1.items.0.text.2.value',
              },
            ],
          },
          {
            text: 'pages.legal.terms.complaints.items.1.items.1.text',
          },
          {
            text: 'pages.legal.terms.complaints.items.1.items.2.text',
          },
        ],
      },
      {
        text: 'pages.legal.terms.complaints.items.2.text',
        items: [
          {
            text: 'pages.legal.terms.complaints.items.2.items.0.text',
          },
          {
            text: 'pages.legal.terms.complaints.items.2.items.1.text',
          },
          {
            text: 'pages.legal.terms.complaints.items.2.items.2.text',
          },
        ],
      },
      { text: 'pages.legal.terms.complaints.items.3.text' },
      {
        text: [
          {
            value: 'pages.legal.terms.complaints.items.4.text.0.value',
          },
          {
            value: 'pages.legal.terms.complaints.items.4.text.1.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.terms.complaints.items.4.text.2.value',
          },
        ],
      },
    ],
  },

  {
    title: 'pages.legal.terms.liability.title',
    items: [
      { text: 'pages.legal.terms.liability.items.0.text' },
      {
        text: 'pages.legal.terms.liability.items.1.text',
        items: [
          {
            text: 'pages.legal.terms.liability.items.1.items.0.text',
          },
          {
            text: 'pages.legal.terms.liability.items.1.items.1.text',
          },
          {
            text: 'pages.legal.terms.liability.items.1.items.2.text',
          },
        ],
      },
      { text: 'pages.legal.terms.liability.items.2.text' },
      { text: 'pages.legal.terms.liability.items.3.text' },
    ],
  },

  {
    title: 'pages.legal.terms.privacy.title',
    items: [
      { text: 'pages.legal.terms.privacy.items.0.text' },
      { text: 'pages.legal.terms.privacy.items.1.text' },
      { text: 'pages.legal.terms.privacy.items.2.text' },
    ],
  },

  {
    title: 'pages.legal.terms.final.title',
    items: [
      { text: 'pages.legal.terms.final.items.0.text' },
      { text: 'pages.legal.terms.final.items.1.text' },
      { text: 'pages.legal.terms.final.items.2.text' },
      { text: 'pages.legal.terms.final.items.3.text' },
      { text: 'pages.legal.terms.final.items.4.text' },
    ],
  },

  {
    title: 'pages.legal.terms.contacts.title',
    items: [
      {
        text: [
          {
            value: 'pages.legal.terms.contacts.items.0.text.0.value',
            accent: 'bold',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.terms.contacts.items.1.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.terms.contacts.items.1.text.1.value',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.terms.contacts.items.2.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.terms.contacts.items.2.text.1.value',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.terms.contacts.items.3.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.terms.contacts.items.3.text.1.value',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.terms.contacts.items.4.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.terms.contacts.items.4.text.1.value',
            accent: 'link',
          },
        ],
      },
      {
        text: [
          {
            value: 'pages.legal.terms.contacts.items.5.text.0.value',
            accent: 'bold',
          },
          {
            value: 'pages.legal.terms.contacts.items.5.text.1.value',
          },
        ],
      },
    ],
  },
];
