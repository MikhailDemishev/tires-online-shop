import {
  COMPANY_NAME,
  SITE_NAME,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
} from '@/shared/config/siteConst';

export const en = {
  header: {
    topMenu: {
      aboutUs: 'About Us',
      contacts: 'Contacts',
      guarantee: 'Guarantee',
      news: 'News',
      feedback: 'Reviews',
    },

    catalog: {
      tires: '4x4 Tires',
      wheels: 'Wheels',
      wheelSpacers: 'Wheel Spacers',
      tireService: 'Tire Service',
    },

    search: {
      placeholder: 'Search',
    },
  },
  footer: {
    contacts: `${SUPPORT_PHONE} ${SUPPORT_EMAIL} Mon - Fri: 8:00 AM - 8:00 PM`,
    address: 'Jerzego Badury 20, 56-416 Goszcz, Poland',
    routes: {
      aboutUs: 'About Us',
      contacts: 'Contacts',
      feedback: 'Reviews',
      guarantee: 'Guarantee',
      cookiePreferences: 'Cookie Policy',
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms of Use',
    },

    columns: {
      information: 'Information',
      support: 'Support',
      contacts: 'Contacts',
      address: 'Our Address',
    },
    copyright: '© InsaTurbo4×4 – off-road tires, wheels and wheel spacers',
  },

  pages: {
    home: {
      title: 'Home',
      hero: {
        title: 'Find Your Perfect Match',
      },

      advantages: {
        title: 'Advantages',

        delivery: {
          title: 'EU Delivery',
          description: 'Fast delivery throughout the EU',
        },

        originalProducts: {
          title: 'Genuine Products',
          description: 'Officially sourced products only',
        },

        returns: {
          title: '30-Day Returns',
          description: 'Hassle-free returns within 30 days',
        },

        assistance: {
          title: 'Expert Assistance',
          description: 'Our specialists will help you choose',
        },
      },

      guaranteeBanner: {
        title: 'Quality Guarantee',
        description:
          'Official manufacturer guarantees, 30-day returns and expert support for 4x4 products.',
        text1: 'Official manufacturer guarantee',
        text2: 'and 4x4 specialist support.',
      },

      brandIntro: {
        title: 'Who We Are',

        description: {
          beforeAccent:
            'INSA TURBO is a family-owned brand with a global vision. We combine engineering innovation with an environmental commitment to create ',
          accent: 'the best retread tires for every type of vehicle. ',
          afterAccent:
            'Uncompromising quality that benefits society and the planet.',
        },

        socials: {
          instagram: 'Our Instagram',
          telegram: 'Our Telegram',
        },

        stats: {
          foundation:
            'We started as a local family business in Spain and grew into an international company through strict standards and dedication to our work.',

          dailyProduction:
            'Tires produced every day. Each unit is manufactured on state-of-the-art automated lines and undergoes multi-stage safety control.',

          warehouseArea:
            'The area of our main logistics hub. The strategic location of our production facilities across Spain allows us to maintain extensive stock and dispatch orders without delays.',

          recycling:
            'A sustainable production cycle. We give used vehicle tires a second life, reducing the carbon footprint and efficiently recycling resources without harming the environment.',
        },
        bottom: {
          beforeValue: 'European scale:',
          value: '500,000+',
          afterValue: 'tires per year',
        },
      },

      assortment: {
        title: 'Our Product Range',
      },

      faq: {
        title: 'Frequently Asked Questions',

        manufacturer: {
          question: 'Who manufactures Insa Turbo tires?',
          answer:
            'Insa Turbo tires are manufactured by Insa Turbo, a company based in Spain. The company specializes in retread tires designed for off-road, mud and all-terrain conditions.',
        },

        retreaded: {
          question: 'Are Insa Turbo tires retreaded?',
          answer:
            'Yes. Insa Turbo tires are retread tires, also known as remoulded tires. They are manufactured by applying a new tread to carefully inspected tire casings.',
        },

        difference: {
          question:
            'How are Insa Turbo tires different from new tires made by other brands?',
          answer:
            'Insa Turbo is a manufacturer with more than 25 years of experience in the international market. The brand offers high-quality retreaded tires with a good balance of price, quality, and reliability.',
        },

        types: {
          question: 'Which Insa Turbo tires are suitable for my driving style?',
          intro: 'Insa Turbo offers tires for different driving conditions:',

          mudTerrain: {
            title: 'Mud Terrain — MT:',
            description:
              'for serious off-road driving, mud and rocky terrain. Models: Dakar MT, K2 MT, Risco MT, Sahara MT and Special Track MT.',
          },

          allTerrain: {
            title: 'All-Terrain — AT:',
            description:
              'for mixed use on paved roads and light off-road terrain. Models: Mountain, Ranger AT and Traction Track.',
          },

          outro:
            'If you are unsure which type to choose, use the parametric filter on the home page or contact us for advice.',
        },

        size: {
          question: 'What tire size do I need?',
          answer:
            'The correct tire size is specified in your vehicle owner’s manual. You can also find it on the sidewall of your current tires, for example 265/75 R16. You can filter tires by size in the catalog.',
        },

        installation: {
          question: 'Do you provide tire installation services?',
          answer:
            'For more information, please contact us via the contact form or by phone at ',
        },
      },

      reviews: {
        title: 'Reviews',
      },
      seo: {
        title: 'New Off-road 4x4 Tires – AT & MT | Insa Turbo 4x4',
        description:
          'New off-road 4x4 tires for demanding terrain. AT and MT tires in popular sizes. Check the range, availability and order online.',
        keywords:
          'off-road tires, 4x4 tires, AT tires, MT tires, new tires, Insa Turbo, off-road 4x4 tires, off road tires',
        h1: 'New Off-road 4x4 Tires – AT & MT',
      },
    },
    // EN
    // EN

    tires: {
      title: 'Tires 4X4',
      seo: {
        keywords: {
          base: '4x4 tires, off-road tires',
          sizePrefix: '',
        },
        description: {
          productType: '– off-road 4x4 tire for',
          currency: 'zł.',
          text: 'Match the tread to the routes you take beyond paved roads',
        },
      },
    },

    wheels: {
      title: 'Wheels',
      seo: {
        keywords: {
          base: '4x4 wheels, off-road wheels',
          wheelPrefix: '',
          wheelSuffix: ' wheel',
        },
        description: {
          productType: '4x4 wheel',
          currency: 'zł.',
          text: 'Give your off-road build a bolder look with the bolt pattern and offset it needs',
        },
      },
    },

    wheelSpacers: {
      title: 'Wheel Spacers',
      seo: {
        keywords: {
          base: 'wheel spacers, rim spacers, 4x4 spacers',
          dynamicPrefix: '',
          dynamicSuffix: ' spacers',
          thicknessUnit: 'mm',
        },
        description: {
          productType: '4x4 wheel spacer',
          thicknessUnit: 'mm',
          thread: 'thread',
          currency: 'zł.',
          text: 'Widen the track for a more pronounced off-road stance',
        },
      },
    },
    search: {
      title: 'Search Results',
      enterQuery: 'Enter a search query',
      noResults: 'No results found',
    },
    tireService: {
      title: 'Tire Service',
      tireServiceBanner: {
        title: 'Tire Services',
        descriptionLine1:
          'Professional tire fitting, wheel balancing, and wheel maintenance.',
        descriptionLine2: 'Your tires are in the hands of experts!',
      },

      tireServiceServices: {
        title: 'Services',
        titlePrice: 'Price List',

        note: 'The prices listed are approximate. The final cost depends on the vehicle type, wheel diameter, and complexity of the work. We will confirm the exact price when you book — before any work begins. If you have any questions, we will be happy to answer them by phone.',

        seasonalTireChange: {
          title: 'Seasonal Tire Change',
          description:
            'Seasonal tire change. Professional installation and removal of all types of tires. Careful handling of rims and correct installation according to the tire tread direction.',

          price: {
            description:
              'The price is for a set of 4 wheels and includes tire mounting/removal, balancing, and installation of the wheels on the vehicle.',

            columns: [
              'Wheel diameter',
              'Steel rims (SUV / 4×4)',
              'Alloy rims (SUV / 4×4)',
            ],

            rows: [
              ['up to R15', '180 zł', '200 zł'],
              ['R16', '200 zł', '220 zł'],
              ['R17', '220 zł', '240 zł'],
              ['R18', '240 zł', '260 zł'],
              ['R19 and above', 'on request', 'on request'],
            ],

            notes: [
              'Prices may vary slightly depending on the complexity of the work (e.g. seized bolts, RunFlat tires, or TPMS). We will confirm the final price when you book — before any work begins. Additional services are charged separately.',
            ],
          },
        },

        wheelBalancing: {
          title: 'Wheel Balancing',
          description:
            'Precise wheel balancing using modern equipment. We eliminate vibrations, ensure even tire wear, and provide a comfortable ride at any speed.',

          price: {
            description: 'The price is for a set of 4 wheels.',

            columns: ['Wheel diameter', 'Price'],

            rows: [
              ['up to R15', '100–120 zł'],
              ['R16', '120–140 zł'],
              ['R17', '140–160 zł'],
              ['R18', '160–180 zł'],
              ['R19 and above', 'on request'],
            ],

            notes: [
              'The price depends on the type of rims, TPMS, RunFlat technology, wheel diameter, and complexity of the work. We will confirm the exact price when you book.',
            ],
          },
        },

        tireRepair: {
          title: 'Tire Repair (Vulcanization)',
          description:
            'Repair of punctures, cuts, and other tire damage. Professional vulcanization with an assessment of whether the tire can continue to be used safely.',

          price: {
            description: 'The price is per wheel.',

            columns: ['Service', 'Price'],

            rows: [
              ['Puncture repair', '70–100 zł'],
              ['Sidewall cut repair', '120–180 zł'],
              ['Hot vulcanization', 'from 150 zł'],
            ],

            notesTitle: 'Important to know:',

            notes: [
              'The repair cost depends on the type and diameter of the tire, the extent of the damage, and whether wheel removal is required.',
              'Sidewall cuts and major damage may not be repairable — the final decision is made by the technician after inspection.',
              'Wheel balancing is performed after the repair and is included in the price.',
              'The price may be higher for RunFlat tires and tires equipped with TPMS.',
              'We will confirm the exact price before any work begins — any changes will be agreed with you in advance.',
            ],
          },
        },

        wheelRepair: {
          title: 'Rim Repair and Straightening',
          description:
            'Inspection and restoration of steel and alloy rim geometry. We repair deformation, runout, and other types of damage.',

          price: {
            description:
              'The price is per wheel and depends on the rim size, type, and extent of the damage.',

            columns: ['Service', 'Price'],

            rows: [
              ['Steel rim straightening', '80–150 zł'],
              ['Alloy rim straightening (up to 16")', '120–200 zł'],
              ['Alloy rim straightening (17–18")', '160–280 zł'],
              ['Alloy rim straightening (19" and above)', 'from 260 zł'],
              ['Rim welding (additional service)', 'from 100 zł'],
            ],

            notesTitle: 'Important to know:',

            notes: [
              'The price depends on the rim size, material (steel/alloy), and extent of the damage (minor runout, severe deformation, or cracks).',
              'We will confirm the final price after inspection — before any work begins.',
              'Wheel balancing is performed after rim straightening (either included in the price or charged separately — please confirm when booking).',
              'Not all damage can be repaired: cracks in the spokes or around the bolt holes often make a rim unsafe for further use.',
              'For complex cases (severe deformation, cracks, or large rim sizes), the price may be higher than indicated — each case is assessed individually by the technician.',
            ],
          },
        },

        seasonalStorage: {
          title: 'Seasonal Tire Storage',
          description:
            'Seasonal storage of tires and complete wheels under suitable conditions. Your set will be ready for the next season without taking up space at home.',

          price: {
            description:
              'The price is for a set of 4 wheels for one season (approximately 6 months).',

            columns: ['Wheel diameter', 'Price'],

            rows: [
              ['up to R16', '140–180 zł'],
              ['R17–R18', '180–240 zł'],
              ['R19 and above', '240–300 zł'],
            ],

            notes: [
              'The price depends on the wheel size and type of storage (tires only or complete wheels). We will confirm the exact price when we accept the set for storage.',
            ],
          },
        },

        additionalServices: {
          title: 'Additional Services',
          description:
            'Additional tire and wheel services: hub treatment, valve replacement, wheel washing, tire disposal, and services for RunFlat tires and TPMS.',

          price: {
            description: 'Prices are per service unless otherwise stated.',

            columns: ['Service', 'Price'],

            rows: [
              ['Hub treatment (set)', '30–50 zł'],
              ['Valve replacement (set, rubber)', '20–40 zł'],
              ['Valve replacement (set, chrome/metal)', '40–60 zł'],
              ['Wheel washing (set)', '20–40 zł'],
              ['Old tire disposal (1 pc.)', '10–15 zł'],
              ['RunFlat surcharge (per wheel)', '15–20 zł'],
              ['TPMS service surcharge (set)', '10–20 zł'],
              ['Tire studding', 'on request'],
            ],

            notesTitle: 'Important to know:',

            notes: [
              'The cost of tire studding depends on the number of studs, tire size, and type of studs. We will confirm the exact price after inspecting the tires.',
              'Studding is only available for tires with factory-made stud holes (marked Studdable).',
              'All additional services are agreed with the customer before any work begins.',
            ],
          },
        },
      },

      tireServiceAdvantages: {
        title: {
          title1: 'our',
          title2: 'advantages',
        },
        advantages: {
          modernEquipment: {
            title: 'Modern equipment',
            description:
              'We use professional equipment to ensure precision and safety.',
          },
          experiencedSpecialists: {
            title: 'Experienced specialists',
            description:
              'Our specialists have many years of experience working with tires and wheels of any complexity.',
          },
          transparentPrices: {
            title: 'Transparent pricing',
            description:
              'The cost of services is known before the work begins.',
          },
          qualityGuarantee: {
            title: 'Quality guarantee',
            description: 'We provide a guarantee for all types of work.',
          },
        },
      },
    },
    aboutUs: {
      title: 'About us',
      aboutUsBanner: {
        title: 'Insa Turbo – Off-Road Tire Experts',
        descriptionLine1: 'We select reliable tires for confident driving',
        descriptionLine2: 'through mud, rocks, and challenging terrain.',
      },
      aboutUsOverview: {
        mainTitle: 'About Overview',
        title:
          'We make off-road driving accessible — you choose the route without limits',

        description:
          'Since 1988, we have been helping off-road vehicle owners find reliable tires for challenging routes — providing honest information about their specifications and selecting the right set for each vehicle.',

        stats: {
          foundationYear: 'store founding year',
          insaTurboExperience: 'years of Insa Turbo tire retreading experience',
        },
      },
      ourTeam: {
        title: 'our team',
        quote:
          'We are an official distributor of the Spanish manufacturer Insa Turbo, a company with more than 30 years of experience in tire retreading. This allows us to guarantee the authenticity and high quality of every model available in our catalog.',
      },
      ourValues: {
        eyebrow: 'Our Values',
        title: 'Explore the world without limits — confidently on any terrain',

        items: {
          honesty: {
            title: 'Honesty',
            description:
              'We always provide honest information about the condition and characteristics of every tire.',
          },

          expertise: {
            title: 'Expertise',
            description:
              'We know our products inside out and recommend the best solutions for off-road vehicles.',
          },

          sustainability: {
            title: 'Sustainability',
            description:
              'We support responsible consumption by offering high-quality retreaded tires.',
          },
        },
      },
      helpBanner: {
        title: 'We will help you choose the perfect set for your vehicle',
      },
    },
    contacts: {
      title: 'Contacts',
      titleComponent: 'our contacts',
      description:
        'We’re always here and happy to help you choose tires, wheels, and wheel spacers for your SUV.',
      address: 'Address',
      addressValue: 'Jerzego Badury 20, 56-416 Goszcz, Poland',
      workingHours: 'Working hours: Mon–Fri 8:00 AM to 8:00 PM',
      bookService: 'Book a service',
      titleSocial: 'we’re on social media',
      titleMap: 'find us on the map',
    },
    guarantee: {
      title: 'Guarantee',
      guaranteeBanner: {
        title: 'Quality Guarantee',
        descriptionLine1: 'Official manufacturer guarantee',
        descriptionLine2: 'and 4x4 specialist support.',
      },
      guaranteeBrands: {
        title: 'brand guarantees',
        items: {
          goodrich: '3 years',
          cooper: '2 years',
          maxxis: '5 years',
          yokohama: '3 years',
          toyo: '4 years',
        },
      },
      returnSteps: {
        title: 'how to make a return',
        items: {
          request: 'Submit a request',
          approval: 'Confirm the return',
          shipment: 'Send the product',
          inspection: 'Product inspection',
          refund: 'Refund',
        },
      },
      guaranteeAccordion: {
        originalProducts: {
          header: 'Only Original Products',
          content:
            'We work directly with official distributors and manufacturers. All products presented on our website are genuine and come with the manufacturer’s certificates.',
        },

        manufacturerWarranty: {
          header: 'Official Manufacturer Guarantee',
          content:
            'All products are covered by the manufacturer’s guarantee against material and manufacturing defects. The guarantee period and terms depend on the brand and are specified in the product documentation. Please for more details contact our ',
          link: {
            text: 'manager.',
          },
        },

        qualityControl: {
          header: 'Quality Inspection Before Shipping',
          content:
            'Before shipment, every set undergoes a visual inspection. We check the condition of tires, wheels, and spacers, ensure there is no transport damage, and verify compliance with the declared specifications. We only ship products we are confident in.',
        },

        installationWarranty: {
          header: 'Installation Guarantee at Partner Workshops',
          content:
            'Our partner tire service specializes in off-road vehicles and takes every installation detail into account, from wheel balancing to the correct tightening torque of spacer fasteners. The installation work is covered by a separate guarantee in addition to the product guarantee.',
        },

        support: {
          header: '4×4 Expert Support',
          content:
            'Before and after your purchase, you can consult our specialists for advice on choosing the right tires, wheels, and spacers for your vehicle and driving conditions.',
        },
      },
      supportBanner: {
        title: 'still have questions?',
        descriptionLine1: 'We will help you with guarantee ',
        descriptionLine2: 'and product compatibility',
      },
    },
    notFound: {
      title: '404',
      text: {
        first: 'Something seems to have gone wrong',
        second: 'Please try refreshing the page',
      },
      toCatalog: 'Go to Catalog',
    },

    // LEGAL_PAGES

    legal: {
      // PRIVACY

      privacy: {
        title: 'Privacy Policy',

        updatedAt: {
          title: 'Last updated:',
          value: '[date]',
        },

        general: {
          title: '1. General Provisions',
          items: [
            {
              text: [
                {
                  value: `This Privacy Policy explains how ${COMPANY_NAME} (hereinafter referred to as the Operator) processes the personal data of users of the website `,
                },
                {
                  value: SITE_NAME,
                },
                {
                  value:
                    ' (hereinafter referred to as the Website). This Policy applies to all Website visitors and online store customers located in Poland and the European Union.',
                },
              ],
            },
            {
              text: 'Personal data is processed in accordance with the General Data Protection Regulation (GDPR/RODO) - Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 - and the national legislation of the Republic of Poland.',
            },
            {
              text: 'At present, the Website does not provide online ordering, user account or online payment functionality. All orders and consultations are handled by phone. The data provided by the customer is used exclusively to process the request and contact the customer. A request form is available on the Website for product selection or checking availability. Other methods of electronic communication may become available in the future – we will provide separate notice of any such methods.',
            },
          ],
        },

        operator: {
          title: '2. Who Is the Personal Data Controller',
          items: [
            {
              text: 'The personal data controller is:',
            },
            {
              text: [{ value: COMPANY_NAME }],
            },
            {
              text: [
                { value: 'Address:' },
                { value: ' Jerzego Badury 20, 56-416 Goszcz, Poland' },
              ],
            },

            {
              text: [{ value: 'E-mail: ' }, { value: SUPPORT_EMAIL }],
            },
            {
              text: [{ value: 'Phone: ' }, { value: SUPPORT_PHONE }],
            },
            {
              text: 'For any questions regarding the processing of personal data, you may contact us using the e-mail address or phone number provided above.',
            },
          ],
        },

        collectedData: {
          title: '3. What Personal Data We Collect',
          items: [
            {
              text: 'We collect and process the following categories of data:',
            },
            {
              text: [
                { value: 'Data provided voluntarily' },
                {
                  value: ` via the request form on the Website or by phone: ${SUPPORT_PHONE}`,
                },
              ],
              items: [
                { text: 'first and last name;' },
                { text: 'e-mail address;' },
                { text: 'phone number;' },
                { text: 'message or request content.' },
              ],
            },
            {
              text: [
                { value: 'Data collected automatically' },
                {
                  value: ' (using cookies and analytics systems):',
                },
              ],
              items: [
                { text: 'IP address;' },
                { text: 'browser and device type;' },
                { text: 'date and time of visit;' },
                {
                  text: 'pages viewed, clicks and other actions on the Website;',
                },
                {
                  text: 'referral source (advertising, search engine, social network, etc.).',
                },
              ],
            },
            {
              text: [
                { value: 'We do not collect or store' },
                {
                  value:
                    ' payment card details, location data (except for the region determined from the IP address), or any other special categories of personal data.',
                },
              ],
            },
          ],
        },

        purposes: {
          title: '4. Purposes and Legal Bases for Personal Data Processing',
          items: [
            {
              text: 'We process your personal data solely for the following purposes, each of which has a lawful basis:',
              table: {
                headers: ['Purpose of processing', 'Legal basis'],
                rows: [
                  [
                    'Handling telephone enquiries (consultations, assistance in selecting products, checking availability, booking tyre fitting services)',
                    [
                      { value: 'Art. 6(1)(f) GDPR' },
                      {
                        value:
                          ' - the legitimate interests of the Operator (customer service and improving service quality)',
                      },
                    ],
                  ],
                  [
                    'Processing requests submitted via the form on the Website (product selection, checking availability, cost calculation)',
                    [
                      { value: 'Art. 6(1)(b) GDPR', accent: 'bold' },
                      {
                        value:
                          ' - taking steps at the request of the data subject prior to entering into a contract',
                      },
                    ],
                  ],
                  [
                    'Fulfilling orders (orders are currently accepted by phone; in the future, also through the Website). Transferring data to delivery services for order fulfilment',
                    [
                      { value: 'Art. 6(1)(b) GDPR' },
                      {
                        value: ' - necessity for the performance of a contract',
                      },
                    ],
                  ],
                  [
                    'Compliance with legal obligations (for example, tax and accounting obligations)',
                    [
                      { value: 'Art. 6(1)(c) GDPR' },
                      {
                        value:
                          ' - necessity for compliance with a legal obligation',
                      },
                    ],
                  ],
                  [
                    'Analytics and statistics (collection of anonymised data using Google Analytics to improve service quality)',
                    [
                      { value: 'Art. 6(1)(a) GDPR' },
                      {
                        value:
                          ' - user consent requested through the cookie banner',
                      },
                    ],
                  ],
                  [
                    'Ensuring Website security (protection against attacks and fraud detection)',
                    [
                      { value: 'Art. 6(1)(f) GDPR' },
                      {
                        value: ' - the legitimate interests of the Operator',
                      },
                    ],
                  ],
                  [
                    'Sending informational and promotional materials (if you have given separate consent)',
                    [
                      { value: 'Art. 6(1)(a) GDPR' },
                      {
                        value: ' - user consent',
                      },
                    ],
                  ],
                ],
              },
            },
            {
              text: [
                { value: 'Please note:' },
                {
                  value:
                    ' all functions marked as "in the future" are currently ',
                },
                { value: 'not implemented' },
                {
                  value:
                    ' on the Website and do not apply to your data. We will notify you separately if they are introduced.',
                },
              ],
            },
          ],
        },

        legalBasis: {
          title: '5. Legal Bases for Processing',
          items: [
            {
              text: 'We process your personal data on the following legal bases:',
              items: [
                {
                  text: [
                    { value: 'Your explicit consent' },
                    {
                      value:
                        ' (Art. 6(1)(a) GDPR) - for example, for analytics and newsletters.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Necessity for the performance of a contract' },
                    {
                      value:
                        ' (Art. 6(1)(b) GDPR) - when you place an order (in the future).',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'The legitimate interests of the Operator' },
                    {
                      value:
                        ' (Art. 6(1)(f) GDPR) - for handling enquiries, ensuring security and improving our services, provided that such interests do not override your rights and freedoms.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Compliance with legal obligations' },
                    {
                      value:
                        ' (Art. 6(1)(c) GDPR) - for example, retaining documents as required by tax legislation.',
                    },
                  ],
                },
              ],
            },
            {
              text: 'Where processing is based on legitimate interests, you have the right to object to such processing (see Section 8 "User Rights").',
            },
          ],
        },

        thirdParties: {
          title: '5. Disclosure of Personal Data to Third Parties',
          items: [
            {
              text: 'We may disclose your personal data to the following categories of recipients:',
              items: [
                {
                  text: [
                    { value: 'Delivery and courier services' },
                    {
                      value:
                        ' - for order fulfilment. Even when an order is placed by phone, we provide the courier with your name, address and contact phone number for delivery. Legal basis: ',
                    },
                    {
                      value:
                        'Art. 6(1)(b) GDPR (necessity for the performance of a contract).',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Payment systems and banks' },
                    {
                      value:
                        ' - online payment is currently unavailable, so no data is transferred to payment systems at present. If online payment is introduced in the future, data will be transferred to payment providers to the extent necessary to process the payment.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Analytics and web statistics services' },
                    {
                      value:
                        ' - we use Google Analytics to collect anonymised statistics (based on your consent requested through the cookie banner).',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Hosting and technical support providers' },
                    {
                      value:
                        ' - to ensure the operation of the Website (data may be processed on servers located in the EU).',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Public authorities' },
                    {
                      value:
                        ' - upon request where required or permitted by law.',
                    },
                  ],
                },
              ],
            },
            {
              text: [
                {
                  value: 'Transfers of data outside the European Economic Area',
                },
                {
                  value: ' are possible only in the following cases:',
                },
              ],
              items: [
                {
                  text: 'when using Google Analytics (data may be transferred to the United States on the basis of Standard Contractual Clauses - SCCs);',
                },
                {
                  text: 'in other cases - only where there is a lawful basis and appropriate safeguards for data protection in accordance with the GDPR.',
                },
              ],
            },
            {
              text: [
                { value: 'Important:' },
                {
                  value:
                    ' we do not transfer or sell your data to third parties for marketing purposes. All transfers are made solely for order fulfilment or other lawful purposes described above.',
                },
              ],
            },
          ],
        },

        storage: {
          title: '6. Storage and Protection of Personal Data',
          items: [
            {
              text: [
                {
                  value:
                    'Personal data is stored for the period necessary to achieve the purposes for which it was collected, ',
                },
                {
                  value: 'but no longer than required by applicable law.',
                },
              ],
              items: [
                {
                  text: [
                    {
                      value:
                        'Data obtained as a result of contact by phone or via the request form on the Website is stored for ',
                    },
                    {
                      value: '12 months',
                    },
                    {
                      value: ' from the date of the last contact.',
                    },
                  ],
                },
                {
                  text: 'Data related to orders (in the future) will be retained for the periods required by tax legislation (usually 5 years).',
                },
                {
                  text: 'Analytics data (anonymised) is stored in Google Analytics for up to 12 months.',
                },
              ],
            },
            {
              text: 'We apply the following data protection measures:',
              items: [
                {
                  text: 'Use of an SSL certificate (encryption of data transmission).',
                },
                {
                  text: 'Restriction of data access to authorised employees only.',
                },
                {
                  text: 'Regular updates of software and security systems.',
                },
                {
                  text: 'Protection against unauthorised access, hacking and data breaches.',
                },
              ],
            },
          ],
        },

        rights: {
          title: '7. User Rights',
          items: [
            {
              text: 'Under the GDPR/RODO, you have the right to:',
              items: [
                {
                  text: [
                    { value: 'Access' },
                    {
                      value:
                        ' - request information about which of your personal data we process.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Rectification' },
                    {
                      value: ' - have inaccurate or incomplete data corrected.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Erasure' },
                    {
                      value:
                        ' ("right to be forgotten") - in the cases provided for by law.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Restriction of processing' },
                    {
                      value:
                        ' - suspend the processing of data while its accuracy is being verified.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Object to processing' },
                    {
                      value:
                        ' - where data is processed on the basis of legitimate interests.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Data portability' },
                    {
                      value: ' - receive your data in a structured format.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Withdraw consent' },
                    {
                      value:
                        ' - at any time where processing is based on consent (for example, newsletters).',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Lodge a complaint' },
                    {
                      value:
                        ' with the Personal Data Protection Office (UODO) in Poland.',
                    },
                  ],
                },
              ],
            },
            {
              text: [
                {
                  value:
                    'To exercise the above rights, please contact us by e-mail at: ',
                },
                { value: SUPPORT_EMAIL },
                {
                  value:
                    '. In your request, please provide your full name, contact details and the nature of your request. We will respond within ',
                },
                { value: '30 days' },
                {
                  value:
                    ' (with a possible extension of up to 60 days in exceptional cases).',
                },
              ],
            },
          ],
        },

        cookies: {
          title: '8. Use of Cookies and Data Collection Technologies',
          items: [
            {
              text: 'Our Website uses cookies (small text files stored on your device) to improve its operation and collect anonymous statistics.',
            },
            {
              text: [{ value: 'Types of cookies we use:' }],
              table: {
                headers: ['Cookie type', 'Purpose', 'Is consent required?'],
                rows: [
                  [
                    'Essential',
                    'Provide basic Website functions (remembering the selected language, technical session)',
                    'No (exempt from the consent requirement)',
                  ],
                  [
                    'Analytical',
                    'Collection of anonymous statistics through Google Analytics. The data is used to improve the Website',
                    'Yes (your consent is required)',
                  ],
                  [
                    'Functional',
                    'Remember your preferences (for example, language selection)',
                    'Yes (your consent is required)',
                  ],
                  [
                    'Marketing',
                    'Display personalised advertising. Currently not used',
                    'Yes (if introduced)',
                  ],
                ],
              },
            },
            {
              text: [{ value: 'Cookie management' }],
              items: [
                {
                  text: 'When you first visit the Website, you will see a banner requesting your consent to the use of cookies. You can:',
                  items: [
                    {
                      text: [
                        { value: 'Accept all' },
                        { value: ' - allow all types of cookies.' },
                      ],
                    },
                    {
                      text: [
                        { value: 'Reject (except essential)' },
                        { value: ' - allow only essential cookies.' },
                      ],
                    },
                    {
                      text: [
                        { value: 'Customise' },
                        {
                          value:
                            ' - select individual categories (analytical, functional, etc.).',
                        },
                      ],
                    },
                  ],
                },
                {
                  text: 'You can also manage cookies through your browser settings (for example, delete all cookies or block them). However, disabling certain cookies may affect the operation of some Website functions.',
                },
                {
                  text: [
                    { value: 'Retention period:' },
                    { value: ' cookies are stored for ' },
                    { value: '12 months' },
                    {
                      value:
                        ' from your last visit or until you delete them manually.',
                    },
                  ],
                },
              ],
            },
          ],
        },

        final: {
          title: '9. Final Provisions',
          items: [
            {
              text: 'The Operator reserves the right to amend this Privacy Policy. The new version will be published on this page with the date of the update and will take effect upon publication.',
            },
            {
              text: 'By continuing to use the Website after changes are made, you confirm your acceptance of the updated terms.',
            },
            {
              text: [
                {
                  value:
                    'If you have any questions about this Policy, please contact us by e-mail at: ',
                },
                { value: SUPPORT_EMAIL },
                { value: '.' },
              ],
            },
          ],
        },
      },

      // TERMS

      terms: {
        title: 'Terms of Use',

        general: {
          title: '1. General Provisions',
          items: [
            {
              text: [
                {
                  value:
                    'These Terms of Use (hereinafter referred to as the Terms) define the conditions for using the online store ',
                },
                { value: SITE_NAME },
                {
                  value: ` (hereinafter referred to as the Website), owned by ${COMPANY_NAME} (hereinafter referred to as the Seller). At present, the Website serves as an informational storefront; orders are placed by phone.`,
                },
              ],
            },
            'These Terms govern the relationship between the Seller and the Buyer when ordering, purchasing and receiving delivery of goods, as well as when using the Website.',
            'By placing an order (including by phone), the Buyer confirms that they have read these Terms and accept them in full.',
            'These Terms have been drawn up in accordance with the laws of the Republic of Poland, including the Polish Civil Code and the Consumer Rights Act (Ustawa o prawach konsumenta).',
          ],
        },

        seller: {
          title: '2. Seller Details',
          items: [
            {
              text: 'Seller:',
              items: [
                {
                  text: [{ value: COMPANY_NAME }],
                },
                {
                  text: [
                    { value: 'Address:' },
                    { value: ' Jerzego Badury 20, 56-416 Goszcz, Poland' },
                  ],
                },
                {
                  text: [{ value: 'E-mail: ' }, { value: SUPPORT_EMAIL }],
                },
                {
                  text: [{ value: 'Phone: ' }, { value: SUPPORT_PHONE }],
                },
                {
                  text: [{ value: 'Website: ' }, { value: SITE_NAME }],
                },
              ],
            },
          ],
        },

        definitions: {
          title: '3. Definitions',
          table: {
            headers: ['Term', 'Definition'],
            rows: [
              [
                'Seller',
                'The entity specified above that sells goods (currently by phone; in the future, also through the Website)',
              ],
              ['User', 'Any natural or legal person using the Website'],
              ['Buyer', 'A User who has placed or intends to place an order'],
              [
                'Website',
                [
                  { value: 'The online resource ' },
                  { value: SITE_NAME },
                  {
                    value: ', including all subdomains and functional sections',
                  },
                ],
              ],
              [
                'Order',
                'An action by the Buyer aimed at purchasing the goods specified in the order (currently by phone; in the future, through the Website)',
              ],
              [
                'Goods',
                'Tyres, rims, wheel spacers and other goods presented in the Website catalogue',
              ],
              [
                'Service',
                'Tyre fitting and other related services provided by the Seller',
              ],
            ],
          },
        },

        products: {
          title: '4. Product and Pricing Information',
          items: [
            'All goods presented on the Website are original products supplied directly by the manufacturer or official distributors.',
            {
              text: [
                {
                  value:
                    'Information about goods (including prices, specifications and availability) is provided for ',
                },
                { value: 'informational purposes only' },
                {
                  value:
                    ' and does not constitute a public offer within the meaning of Article 66 of the Polish Civil Code.',
                },
              ],
            },
            {
              text: [
                { value: 'Prices on the Website are stated in ' },
                { value: 'Polish zloty (zł.)' },
                { value: ' and are ' },
                { value: 'gross prices' },
                {
                  value:
                    ' (including VAT). Prices do not include delivery costs, which are confirmed when the order is placed.',
                },
              ],
            },
            'Product photographs on the Website are for illustrative purposes and may differ slightly from the actual appearance of the goods.',
            'The Seller makes every effort to ensure that the information is accurate but does not guarantee that it is fully up to date at all times.',
            'Final specifications and availability are confirmed when placing an order by phone.',
            'The Seller reserves the right to change product prices at any time without prior notice. Prices applicable at the time the order is placed are final.',
          ],
        },

        order: {
          title: '5. Placing an Order',
          items: [
            {
              text: [
                {
                  value: 'At present, orders can be placed ',
                },
                { value: 'BY PHONE ONLY' },
                { value: ` at ${SUPPORT_PHONE}.` },
              ],
            },
            {
              text: 'A request form is available on the Website, through which the Buyer may request assistance with product selection or check product availability. Submitting the form does not constitute placing an order and does not create any contractual obligations.',
            },
            {
              text: 'To place an order, the Buyer contacts the Seller by phone and provides:',
              items: [
                {
                  text: 'the list of goods (model, size, quantity);',
                },
                {
                  text: 'the delivery method and delivery address;',
                },
                {
                  text: 'their contact details (first name, last name, phone number and, optionally, e-mail address).',
                },
              ],
            },
            {
              text: 'The Seller accepts the order, checks product availability, confirms the total order price including delivery and agrees on the order fulfilment time.',
            },
            {
              text: 'The order is considered accepted after the Buyer verbally confirms the order terms and the parties agree on the details.',
            },
            {
              text: 'Online ordering functionality may be introduced on the Website in the future. The Seller will separately notify Buyers when this functionality becomes available.',
            },
          ],
        },

        payment: {
          title: '6. Payment',
          items: [
            {
              text: 'The Seller offers the following payment methods:',
              table: {
                headers: ['Payment method', 'Description'],
                rows: [
                  [
                    'Cash on delivery/collection',
                    'Payment is made in cash when the goods are handed over by the courier or collected in person. Card payment upon receipt is currently not accepted',
                  ],
                  [
                    'Bank transfer',
                    'The Buyer pays for the order on the basis of an issued invoice. The invoice is issued after the order has been confirmed',
                  ],
                  [
                    'Online payment',
                    'Currently unavailable. Payment by bank card through the Website may be introduced in the future',
                  ],
                ],
              },
            },
            {
              text: "Payment confirms the User's acceptance of the price and terms of sale.",
            },
            {
              text: "Payment is deemed completed when the funds are credited to the Seller's account (for cashless payments) or when cash is handed over (for payment upon receipt).",
            },
            {
              text: 'Refunds are processed in accordance with the procedures and time limits established by Polish law and the applicable payment system rules.',
            },
          ],
        },

        delivery: {
          title: '7. Delivery and Receipt of Goods',
          items: [
            {
              text: 'The Seller delivers goods within Poland and, subject to agreement, to other European Union countries.',
            },
            {
              text: 'Delivery methods:',
              table: {
                headers: ['Delivery method', 'Description'],
                rows: [
                  [
                    'Courier delivery',
                    "Delivery is carried out by a courier service to the Buyer's address",
                  ],
                  [
                    'Collection',
                    "The Buyer collects the goods from the collection point or the Seller's warehouse by prior arrangement",
                  ],
                ],
              },
            },
            {
              text: 'Delivery costs and delivery times are agreed individually when the order is placed and depend on the region, type of goods and selected delivery method.',
            },
            {
              text: 'The Seller must deliver the goods to the Buyer within the agreed period. In the event of delays, the Seller will notify the Buyer and offer alternative options.',
            },
            {
              text: 'The Buyer must ensure that the goods can be received (access to the delivery location and, where necessary, availability of the required documents).',
            },
            {
              text: 'Upon receipt of the goods, the Buyer must check their completeness and inspect them for visible defects. Claims relating to visible defects are accepted only at the time of delivery or within the time limits prescribed by law.',
            },
          ],
        },

        rights: {
          title: '8. Rights and Obligations of the Parties',

          buyer: {
            title: '8.1. Rights and Obligations of the Buyer',
            items: [
              {
                text: 'The Buyer has the right to:',
                items: [
                  {
                    text: 'receive goods of proper quality that conform to the order;',
                  },
                  {
                    text: 'receive information about goods and services;',
                  },
                  {
                    text: 'have their rights protected in accordance with applicable law.',
                  },
                ],
              },
              {
                text: 'The Buyer must:',
                items: [
                  {
                    text: 'provide accurate information when placing an order;',
                  },
                  {
                    text: 'pay for the order on time;',
                  },
                  {
                    text: 'accept the goods within the agreed period.',
                  },
                ],
              },
            ],
          },

          seller: {
            title: '8.2. Rights and Obligations of the Seller',
            items: [
              {
                text: 'The Seller has the right to:',
                items: [
                  {
                    text: 'suspend order fulfilment if the goods are out of stock and notify the Buyer;',
                  },
                  {
                    text: 'amend these Terms subject to prior notification of Buyers.',
                  },
                ],
              },
              {
                text: 'The Seller must:',
                items: [
                  {
                    text: 'deliver goods of proper quality within the agreed period;',
                  },
                  {
                    text: 'provide the Buyer with all necessary information about the goods;',
                  },
                  {
                    text: 'comply with these Terms and applicable legal requirements.',
                  },
                ],
              },
            ],
          },
        },

        withdrawal: {
          title: '9. Withdrawal from the Contract (Consumer Right)',
          items: [
            {
              text: [
                {
                  value:
                    'A Consumer (a natural person not acting in the course of business) has the right to withdraw from the sales contract within ',
                },
                { value: '14 days' },
                {
                  value: ' of receiving the goods without giving any reason.',
                },
              ],
            },
            {
              text: 'To exercise the right of withdrawal, the Consumer must notify the Seller of their decision in writing:',
              items: [
                {
                  text: [
                    { value: 'by e-mail: ' },
                    { value: SUPPORT_EMAIL },
                    { value: ';' },
                  ],
                },
                {
                  text: "by post to the Seller's address: Jerzego Badury 20, 56-416 Goszcz, Poland.",
                },
              ],
            },
            {
              text: 'The notice must specify the order number, purchase date and the goods from which the Consumer wishes to withdraw.',
            },
            {
              text: 'The Consumer may withdraw from the contract before receiving the goods. In this case, the withdrawal notice must be sent before the goods are handed over to the carrier.',
            },
            {
              text: 'The Consumer must return the goods to the Seller within 14 days of notifying the Seller of the withdrawal. The goods must be in preserved condition, without signs of use, in their original packaging, with the original manufacturer labels intact and with all components included.',
            },
            {
              text: "The Consumer bears the cost of returning the goods unless otherwise agreed with the Seller. The Seller recommends using a courier service that provides shipment tracking and ensures the safety of the goods. If the goods are damaged during return due to the Consumer's actions, the Seller may reduce the refund by the amount corresponding to the loss in value.",
            },
            {
              text: 'The Seller refunds the Consumer the price of the goods and the delivery cost paid when placing the order. If the Consumer selected a more expensive delivery method than the standard option (for example, express delivery), the Seller refunds only the cost of the standard (least expensive) delivery method available from the store. The difference in the cost of the more expensive delivery method is not refundable. The refund is made within 14 days of receipt of the withdrawal notice. The Seller may withhold the refund until the goods have been returned.',
            },
            {
              text: 'The refund is made using the same payment method used for the original transaction unless the Consumer agrees to another method.',
            },
            {
              text: 'The Consumer is responsible for any reduction in the value of the goods resulting from handling beyond what is necessary to establish the nature, characteristics and functioning of the goods.',
            },
            {
              text: [
                {
                  value:
                    'The contract withdrawal form may be requested by email ',
                },
                { value: SUPPORT_EMAIL },
                {
                  value:
                    '. The Consumer may also submit a withdrawal statement in free form, specifying their details, order number and purchase date. The Seller undertakes to send the form within 24 hours of receiving a request.',
                },
              ],
            },
          ],
        },

        complaints: {
          title: '10. Complaints',
          items: [
            {
              text: 'The Seller is liable for physical and legal defects in the goods in accordance with the applicable laws of the Republic of Poland (in particular, the Consumer Rights Act).',
            },
            {
              text: 'Complaints may be submitted:',
              items: [
                {
                  text: [
                    { value: 'by e-mail: ' },
                    { value: SUPPORT_EMAIL },
                    { value: ';' },
                  ],
                },
                {
                  text: "in writing to the Seller's address: Jerzego Badury 20, 56-416 Goszcz, Poland;",
                },
                {
                  text: `by phone: ${SUPPORT_PHONE}.`,
                },
              ],
            },
            {
              text: 'A complaint should include:',
              items: [
                {
                  text: 'details of the goods (name, item number, purchase date);',
                },
                {
                  text: 'a description of the defect or complaint;',
                },
                {
                  text: "the Buyer's contact details.",
                },
              ],
            },
            {
              text: 'To have a complaint considered, the Buyer may provide any proof of purchase (order number, bank statement, screenshot of correspondence, etc.). The absence of a receipt is not grounds for refusing to consider a complaint.',
            },
            {
              text: [
                {
                  value: 'The Seller will consider the complaint within ',
                },
                { value: '14 days' },
                {
                  value:
                    ' of receiving it and will notify the Buyer of the decision.',
                },
              ],
            },
          ],
        },

        liability: {
          title: '11. Liability',
          items: [
            {
              text: 'The Seller is liable for failure to perform or improper performance of an order in accordance with applicable Polish law.',
            },
            {
              text: 'The Seller is not liable for:',
              items: [
                {
                  text: 'delivery delays caused by courier services;',
                },
                {
                  text: 'losses resulting from the use of goods for purposes other than those intended;',
                },
                {
                  text: 'errors in the information provided by the Buyer when placing an order.',
                },
              ],
            },
            {
              text: 'The Seller is not liable for inability to fulfil an order due to force majeure circumstances (natural disasters, military action, strikes, changes in legislation, epidemics, pandemics, restrictions imposed by public authorities, or other circumstances that the Seller could not reasonably foresee or prevent).',
            },
            {
              text: "Technical interruptions to the Website for maintenance and updates may occur. The Seller makes every effort to minimise such interruptions and notify Buyers in advance but is not liable for losses caused by temporary unavailability of the Website where such interruptions result from technical circumstances beyond the Seller's control.",
            },
          ],
        },

        privacy: {
          title: '12. Privacy and Data Protection',
          items: [
            {
              text: "The Seller processes Buyers' personal data in accordance with the Privacy Policy published on the Website.",
            },
            {
              text: 'Data is transferred to delivery services only to the extent necessary to fulfil the order (name, address and contact phone number).',
            },
            {
              text: `The Buyer's personal data is processed on the basis of the necessity to perform the contract (Art. 6(1)(b) GDPR).`,
            },
          ],
        },

        final: {
          title: '13. Final Provisions',
          items: [
            {
              text: 'These Terms enter into force upon publication on the Website.',
            },
            {
              text: 'The Seller reserves the right to amend these Terms at any time. The new version will be published on the Website together with the date of the update.',
            },
            {
              text: 'By continuing to use the Website or placing orders after changes are made, the Buyer confirms acceptance of the updated Terms.',
            },
            {
              text: 'Matters not regulated by these Terms are governed by the laws of the Republic of Poland.',
            },
            {
              text: 'Any disputes arising between the Seller and the Buyer will be resolved through negotiation and, if no agreement can be reached, in accordance with the procedure established by Polish law.',
            },
          ],
        },

        contacts: {
          title: 'Contact Information',
          items: [
            {
              text: [{ value: COMPANY_NAME }],
            },
            {
              text: [
                { value: 'Address:' },
                { value: ' Jerzego Badury 20, 56-416 Goszcz, Poland' },
              ],
            },
            {
              text: [{ value: 'E-mail: ' }, { value: SUPPORT_EMAIL }],
            },
            {
              text: [{ value: 'Phone: ' }, { value: SUPPORT_PHONE }],
            },
          ],
        },
      },

      // COOKIES

      cookies: {
        title: 'Cookie Policy',

        updatedAt: {
          title: 'Last updated:',
          value: '[date]',
        },

        general: {
          title: '1. What Are Cookies',
          items: [
            {
              text: 'Cookies are small text files stored on your device (computer, smartphone or tablet) when you visit a website.',
            },
            {
              text: 'They contain information that enables the website to remember your preferences and settings and to collect statistics about how you interact with the website.',
            },
            {
              text: 'Cookies are not malicious software and cannot damage your device or access your personal files.',
            },
          ],
        },

        types: {
          title: '2. What Cookies We Use',
          items: [
            {
              text: 'Our Website uses the following types of cookies:',
              table: {
                headers: ['Cookie type', 'Purpose', 'Is consent required?'],
                rows: [
                  [
                    'Essential',
                    'Provide basic Website functions: remembering the selected language, maintaining a technical session and saving display settings. Without them, the Website cannot function properly',
                    'No (exempt from the consent requirement)',
                  ],
                  [
                    'Analytical',
                    'Collect anonymous information about how visitors use the Website: number of visitors, pages viewed, time spent on the Website and user actions. This data helps us improve the Website. We use Google Analytics',
                    'Yes (your consent is required)',
                  ],
                  [
                    'Functional',
                    'Remember your preferences: language selection and interface settings',
                    'Yes (your consent is required)',
                  ],
                  [
                    'Marketing',
                    'Used to display personalised advertising relevant to your interests. They are currently not used on our Website but may be introduced in the future',
                    'Yes (if introduced)',
                  ],
                ],
              },
            },
          ],
        },

        purposes: {
          title: '3. How We Use Cookies',
          items: [
            {
              text: 'We use cookies for the following purposes:',
              items: [
                {
                  text: [
                    { value: 'Website operation' },
                    {
                      value:
                        ' - remembering the selected language and maintaining the session.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Improving user experience' },
                    {
                      value:
                        ' - analysing user behaviour to improve the interface and navigation.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Collecting statistics' },
                    {
                      value:
                        ' - using Google Analytics, we obtain anonymised data about Website traffic and user activity.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Security' },
                    {
                      value:
                        ' - protection against fraud and unauthorised access.',
                    },
                  ],
                },
              ],
            },
          ],
        },

        management: {
          title: '4. Managing Cookies',
          items: [
            {
              text: 'When you first visit the Website, you will see a banner requesting your consent to the use of cookies. You can:',
              items: [
                {
                  text: [
                    { value: 'Accept all' },
                    { value: ' - allow all types of cookies.' },
                  ],
                },
                {
                  text: [
                    { value: 'Reject (except essential)' },
                    {
                      value: ' - allow only essential cookies.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Customise' },
                    {
                      value:
                        ' - select individual categories (analytical, functional, etc.).',
                    },
                  ],
                },
              ],
            },
            {
              text: 'You can also manage cookies through your browser settings:',
              table: {
                headers: ['Browser', 'Instructions'],
                rows: [
                  [
                    'Google Chrome',
                    'Settings → Privacy and security → Cookies and other site data',
                  ],
                  [
                    'Mozilla Firefox',
                    'Settings → Privacy & Security → Cookies and Site Data',
                  ],
                  ['Safari', 'Settings → Privacy → Manage Website Data'],
                  [
                    'Microsoft Edge',
                    'Settings → Privacy, search, and services → Cookies',
                  ],
                ],
              },
            },
            {
              text: [
                { value: 'Please note:' },
                {
                  value:
                    ' disabling certain types of cookies may affect some Website functions (for example, your language selection may not be saved).',
                },
              ],
            },
          ],
        },

        storage: {
          title: '5. Cookie Retention Period',
          items: [
            {
              text: 'Cookies are stored on your device for the period necessary to achieve the purposes for which they were created. This is generally up to 12 months from your last visit. You can also delete them manually at any time through your browser settings.',
            },
          ],
        },

        thirdParties: {
          title: '6. Disclosure of Data to Third Parties',
          items: [
            {
              text: 'Some cookies (for example, analytical cookies) may transmit anonymised data to third parties - analytics services such as Google Analytics.',
            },
            {
              text: 'These services process data in accordance with their own privacy policies. We do not disclose your personal data to third parties for marketing purposes.',
            },
            {
              text: 'Data may be transferred outside the European Economic Area only where there is a lawful basis and appropriate data protection safeguards in accordance with the GDPR/RODO.',
            },
            {
              text: 'Personal data collected through cookies is processed in accordance with our Privacy Policy published on the Website.',
            },
          ],
        },

        rights: {
          title: '7. Your Rights',
          items: [
            {
              text: 'Under the GDPR/RODO, you have the right to:',
              items: [
                {
                  text: [
                    { value: 'Withdraw your consent' },
                    {
                      value:
                        ' to the use of cookies at any time (through your browser settings or the banner on the Website).',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Request information' },
                    {
                      value: ' about what data we collect.',
                    },
                  ],
                },
                {
                  text: [
                    { value: 'Delete cookies' },
                    {
                      value: ' manually through your browser settings.',
                    },
                  ],
                },
              ],
            },
            {
              text: [
                {
                  value:
                    'To exercise these rights, please send a request by e-mail to: ',
                },
                { value: SUPPORT_EMAIL },
                {
                  value:
                    '. In your request, please provide your full name, contact details and the nature of your request. We will consider the request within the time limits prescribed by law.',
                },
              ],
            },
            {
              text: 'For more information about how we process your personal data, please see our Privacy Policy.',
            },
          ],
        },

        changes: {
          title: '8. Changes to the Cookie Policy',
          items: [
            {
              text: 'We may update this Policy from time to time. The new version will be published on this page together with the date of the update. By continuing to use the Website after changes are made, you confirm your acceptance of the updated terms.',
            },
          ],
        },

        contacts: {
          title: '9. Contact Information',
          items: [
            {
              text: 'If you have any questions about the use of cookies or wish to withdraw your consent, please contact us:',
            },
            {
              text: [{ value: COMPANY_NAME }],
            },
            {
              text: [
                { value: 'Address:' },
                { value: ' Jerzego Badury 20, 56-416 Goszcz, Poland' },
              ],
            },
            {
              text: [{ value: 'E-mail: ' }, { value: SUPPORT_EMAIL }],
            },
            {
              text: [{ value: 'Phone: ' }, { value: SUPPORT_PHONE }],
            },
          ],
        },
      },
    },
  },
  filter: {
    tabs: {
      tires: 'Tires',
      wheels: 'Wheels',
    },

    tires: {
      width: 'Width',
      profile: 'Profile',
      diameter: 'Diameter',
      season: 'Season',
    },

    wheels: {
      width: 'Width',
      diameter: 'Diameter',
      dia: 'DIA',
      pcd: 'PCD',
      et: 'ET',
    },
    wheelSpacers: {
      boltDistance: 'PCD',
      boltInfo: 'DIA',
      thickness: 'Thickness',
    },

    sort: {
      default: 'Default',
      popular: 'Popular',
      cheaper: 'Cheaper',
      expensive: 'More Expensive',
    },

    priceRange: {
      price: 'Price',
      from: 'from',
      to: 'to',
    },
    additional: {
      brand: 'Brand',
      protector: 'Protector',
      more: 'More',
      inStock: 'In Stock',
      price: 'Price',
    },

    actions: {
      show: 'Show',
      submit: 'Search',
      reset: 'Reset Filters',
    },
    mobile: {
      title: 'filters',
      button: 'filter',
    },
  },

  cards: {
    submitRequest: 'Submit a request',
    request: 'Request',
    addToCart: 'add to cart',
    inStock: 'In Stock',
    notInStock: 'Out of Stock',
    productCard: {
      stock: 'Units in stock',
      pieces: 'pcs',
    },
    productDetailCard: {
      tire: {
        offRoad: { yes: 'Off-road' },
      },
      wheel: {
        material: {
          steel: 'Steel Rim',
          noMaterial: 'Rim',
        },
        offRoad: { yes: 'Off-road' },
        details: {
          color: {
            black: 'Black',
          },
          material: {
            steel: 'Steel',
          },
        },
      },
      wheelSpacer: {
        name: 'Wheel Spacer',
        mm: 'mm',
      },
      accordion: {
        headers: {
          header1: 'Specifications',
          header2: 'Description',
        },
        tires: {
          name: 'Name',
          protector: 'Protector',
          manufacturer: 'Manufacturer',
          type: 'Tire Type',
          width: 'Width, mm',
          profile: 'Profile, %',
          diameter: 'Diameter, in',
          season: 'Season',
          loadSpeedIndex: 'Load & Speed Index',
        },

        wheels: {
          name: 'Name',
          type: 'Wheel Type',
          diameter: 'Diameter, in',
          width: 'Width, in',
          et: 'Offset (ET)',
          dia: 'Center Bore (DIA)',
          pcd: 'Bolt Pattern',
          material: 'Material',
          color: 'Color',
        },

        wheelSpacers: {
          name: 'Name',
          pcd: 'Bolt Pattern (PCD)',
          boltThread: 'Bolt Thread',
          thickness: 'Thickness, mm',
        },
      },
    },
  },
  feedback: {
    title: 'Reviews',
    ratingCount: 'reviews',
    sort: {
      default: 'Default',
      lowest: 'Lowest',
      highest: 'Highest',
      newest: 'Newest',
      oldest: 'Oldest',
    },
  },

  general: {
    links: {
      learnMore: 'Learn More',
      toCatalog: 'go to catalog',
      contactUs: 'contact us',
    },
  },

  supportRequest: {
    title: 'Still have questions?',
    subtitle: 'Submit a request — we’ll get back to you shortly',
    successTitle: 'Request sent',
    successText: 'We’ll get back to you shortly',
    customerName: 'How should we address you?',
    email: 'Email',
    phone: 'Contact phone number',
    comment: 'Comment',
    privacyConsent:
      'I have read the Privacy Policy and consent to the processing of my personal data',
    submit: 'Send',
    sending: 'Sending',
    sendError: 'Failed to send the request. Please try again.',

    errors: {
      nameRequired: 'Enter your first and/or last name',
      maxLength256: 'Enter no more than 256 characters',
      nameInvalid: 'The name must not contain numbers or special characters',
      invalidEmail: 'Enter a valid email address',
      emailLocalPartMax64:
        'The local part of the email address must not exceed 64 characters',
      phoneMin10: 'The phone number must contain at least 10 characters',
      phoneMax15: 'The phone number must not exceed 15 characters',
      invalidPhone: 'Invalid phone number format',
      privacyConsentRequired:
        'You must consent to the processing of your personal data',
    },
  },
};
