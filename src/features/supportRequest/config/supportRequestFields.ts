export const SUPPORT_REQUEST_FIELDS = [
  {
    id: 1,
    fields: [
      {
        value: 'customerName',
        label: 'supportRequest.customerName',
        type: 'text',
        required: true,
      },
    ],
  },
  {
    id: 2,
    fields: [
      {
        value: 'email',
        label: 'supportRequest.email',
        type: 'email',
        required: true,
      },
    ],
  },
  {
    id: 3,
    fields: [
      {
        value: 'phone',
        label: 'supportRequest.phone',
        type: 'tel',
        required: true,
      },
    ],
  },
  {
    id: 4,
    fields: [
      {
        value: 'comment',
        label: 'supportRequest.comment',
        type: 'text',
        required: false,
      },
    ],
  },
] as const;
