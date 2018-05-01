let tempData = {  
 "gateways":[  
    // {  
    //    "gateway_type":"allied_wallet",
    //    "name":"Allied Wallet",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant",
    //                "safe":true
    //             },
    //             {  
    //                "name":"site_id",
    //                "label":"Site",
    //                "safe":true
    //             },
    //             {  
    //                "name":"oauth_bearer_token",
    //                "label":"Oauth Bearer Token",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "diners_club",
    //       "jcb",
    //       "maestro"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"https://www.alliedwallet.com/",
    //    "company_name":"Allied Wallet"
    // },
    {  
       "gateway_type":"authorize_net",
       "name":"Authorize.Net",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"login",
                   "label":"Login",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "general_credit",
          "void",
          "verify",
          "store",
          "fraud_review"
       ],
       "payment_methods":[  
          "credit_card",
          "bank_account",
          "apple_pay",
          "third_party_token"
       ],
       "gateway_specific_fields":[  
          "customer_id",
          "customer_profile_id",
          "duplicate_window",
          "disable_partial_auth",
          "market_type"
       ],
       "supported_countries":[  
          "AD",
          "AT",
          "AU",
          "BE",
          "BG",
          "CA",
          "CH",
          "CY",
          "CZ",
          "DE",
          "DK",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GB",
          "GI",
          "GR",
          "HU",
          "IE",
          "IS",
          "IT",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "NL",
          "NO",
          "PL",
          "PT",
          "RO",
          "SE",
          "SI",
          "SK",
          "SM",
          "TR",
          "US",
          "VA"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "diners_club",
          "jcb",
          "maestro"
       ],
       "regions":[  
          "europe",
          "north_america"
       ],
       "homepage":"http://www.authorize.net/",
       "company_name":"Authorize.Net"
    },
    // {  
    //    "gateway_type":"banwire",
    //    "name":"Banwire",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"user",
    //                "label":"User",
    //                "safe":true
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "MX"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express"
    //    ],
    //    "regions":[  
    //       "latin_america"
    //    ],
    //    "homepage":"https://www.banwire.com",
    //    "company_name":"Banwire"
    // },
    {  
       "gateway_type":"barclaycard_smartpay",
       "name":"Barclaycard Smartpay",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"company",
                   "label":"Company",
                   "safe":true
                },
                {  
                   "name":"merchant",
                   "label":"Merchant",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify",
          "store"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "AR",
          "AT",
          "BE",
          "BR",
          "CA",
          "CH",
          "CL",
          "CN",
          "CO",
          "DE",
          "DK",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "HK",
          "ID",
          "IE",
          "IL",
          "IN",
          "IT",
          "JP",
          "KR",
          "LU",
          "MX",
          "MY",
          "NL",
          "NO",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "RU",
          "SE",
          "SG",
          "TH",
          "TR",
          "TW",
          "US",
          "VN",
          "ZA"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "diners_club",
          "jcb",
          "dankort",
          "maestro"
       ],
       "regions":[  
          "asia_pacific",
          "europe",
          "latin_america",
          "middle_east",
          "north_america"
       ],
       "homepage":"http://barclaycardsmartpay.com/",
       "company_name":"Barclaycard Smartpay"
    },
    // {  
    //    "gateway_type":"barclays_epdq_extra_plus",
    //    "name":"Barclays ePDQ Extra Plus",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"pspid",
    //                "label":"Pspid",
    //                "safe":true
    //             },
    //             {  
    //                "name":"signature_strength",
    //                "label":"Signature Strength",
    //                "safe":true
    //             },
    //             {  
    //                "name":"userid",
    //                "label":"Userid",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             },
    //             {  
    //                "name":"signature",
    //                "label":"Signature",
    //                "safe":false
    //             }
    //          ]
    //       },
    //       {  
    //          "auth_mode_type":"no_signature",
    //          "name":"No signature",
    //          "credentials":[  
    //             {  
    //                "name":"pspid",
    //                "label":"Pspid",
    //                "safe":true
    //             },
    //             {  
    //                "name":"userid",
    //                "label":"Userid",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "GB"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "discover",
    //       "jcb",
    //       "maestro"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"http://www.barclaycard.co.uk/business/accepting-payments/e-commerce-services-for-sme/extraplus",
    //    "company_name":"Barclays ePDQ Extra Plus"
    // },
    {  
       "gateway_type":"beanstream",
       "name":"Beanstream",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"merchant_id",
                   "label":"Merchant ID",
                   "safe":true
                },
                {  
                   "name":"username",
                   "label":"Username",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "CA",
          "US"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "diners_club",
          "jcb"
       ],
       "regions":[  
          "north_america"
       ],
       "homepage":"http://www.beanstream.com/",
       "company_name":"Beanstream"
    },
    // {  
    //    "gateway_type":"blue_pay",
    //    "name":"BluePay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"account_id",
    //                "label":"Account ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"secret_key",
    //                "label":"Secret Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "reference_purchase"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "diners_club",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.bluepay.com",
    //    "company_name":"BluePay"
    // },
    // {  
    //    "gateway_type":"blue_snap",
    //    "name":"BlueSnap",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"api_username",
    //                "label":"Api Username",
    //                "safe":true
    //             },
    //             {  
    //                "name":"api_password",
    //                "label":"Api Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US",
    //       "GB"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "jcb",
    //       "diners_club",
    //       "maestro"
    //    ],
    //    "regions":[  
    //       "europe",
    //       "north_america"
    //    ],
    //    "homepage":"https://home.bluesnap.com/",
    //    "company_name":"BlueSnap"
    // },
    // {  
    //    "gateway_type":"borgun",
    //    "name":"Borgun",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant",
    //                "safe":true
    //             },
    //             {  
    //                "name":"processor",
    //                "label":"Processor",
    //                "safe":true
    //             },
    //             {  
    //                "name":"username",
    //                "label":"Username",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "merchant_name",
    //       "merchant_home",
    //       "merchant_city",
    //       "merchant_zip_code",
    //       "merchant_country"
    //    ],
    //    "supported_countries":[  
    //       "IS",
    //       "GB",
    //       "HU",
    //       "CZ",
    //       "DE",
    //       "DK",
    //       "SE"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "discover",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"https://www.borgun.is/",
    //    "company_name":"Borgun"
    // },
    // {  
    //    "gateway_type":"bpoint",
    //    "name":"BPoint",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_number",
    //                "label":"Merchant Number",
    //                "safe":true
    //             },
    //             {  
    //                "name":"username",
    //                "label":"Username",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "biller_code"
    //    ],
    //    "supported_countries":[  
    //       "AU"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"https://www.bpoint.com.au/bpoint/",
    //    "company_name":"Commonwealth Bank of Australia"
    // },
    {  
       "gateway_type":"braintree",
       "name":"Braintree",
       "auth_modes":[  
          {  
             "auth_mode_type":"orange",
             "name":"Orange",
             "credentials":[  
                {  
                   "name":"login",
                   "label":"Login",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                }
             ]
          },
          {  
             "auth_mode_type":"blue",
             "name":"Blue",
             "credentials":[  
                {  
                   "name":"merchant_account_id",
                   "label":"Merchant Account ID",
                   "safe":true
                },
                {  
                   "name":"merchant_id",
                   "label":"Merchant ID",
                   "safe":true
                },
                {  
                   "name":"public_key",
                   "label":"Public Key",
                   "safe":true
                },
                {  
                   "name":"private_key",
                   "label":"Private Key",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify",
          "store"
       ],
       "payment_methods":[  
          "credit_card",
          "third_party_token",
          "apple_pay"
       ],
       "gateway_specific_fields":[  
          "customer_id",
          "descriptor_name",
          "descriptor_phone",
          "descriptor_url",
          "service_fee_amount",
          "merchant_account_id",
          "hold_in_escrow"
       ],
       "supported_countries":[  
          "US",
          "CA",
          "AD",
          "AT",
          "BE",
          "BG",
          "HR",
          "CY",
          "CZ",
          "DK",
          "EE",
          "FI",
          "FR",
          "GI",
          "DE",
          "GR",
          "GG",
          "HU",
          "IS",
          "IM",
          "IE",
          "IT",
          "JE",
          "LV",
          "LI",
          "LT",
          "LU",
          "MT",
          "MC",
          "NL",
          "NO",
          "PL",
          "PT",
          "RO",
          "SM",
          "SK",
          "SI",
          "ES",
          "SE",
          "CH",
          "TR",
          "GB",
          "SG",
          "HK",
          "MY",
          "AU",
          "NZ"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "jcb",
          "diners_club"
       ],
       "regions":[  
          "asia_pacific",
          "europe",
          "north_america"
       ],
       "homepage":"http://www.braintreepaymentsolutions.com/",
       "company_name":"Braintree"
    }, 
    {  
       "gateway_type":"card_stream",
       "name":"Cardstream",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"merchantID",
                   "label":"Merchant",
                   "safe":true
                },
                {  
                   "name":"shared_secret",
                   "label":"Shared Secret",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify",
          "reference_purchase",
          "3dsecure_purchase",
          "3dsecure_authorize"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  
          "type"
       ],
       "supported_countries":[  
          "GB",
          "US",
          "CH",
          "SE",
          "SG",
          "NO",
          "JP",
          "IS",
          "HK",
          "NL",
          "CZ",
          "CA",
          "AU"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "diners_club",
          "discover",
          "jcb",
          "maestro",
          "solo",
          "switch"
       ],
       "regions":[  
          "asia_pacific",
          "europe",
          "latin_america",
          "middle_east",
          "north_america"
       ],
       "homepage":"https://www.cardstream.com/",
       "company_name":"Cardstream"
    },
    // {  
    //    "gateway_type":"cayan",
    //    "name":"Cayan",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_name",
    //                "label":"Merchant Name",
    //                "safe":true
    //             },
    //             {  
    //                "name":"merchant_site_id",
    //                "label":"Merchant Site",
    //                "safe":true
    //             },
    //             {  
    //                "name":"merchant_key",
    //                "label":"Merchant Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"https://cayan.com",
    //    "company_name":"Cayan"
    // },
    // {  
    //    "gateway_type":"cecabank",
    //    "name":"Cecabank",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"acquirer_bin",
    //                "label":"Acquirer Bin",
    //                "safe":true
    //             },
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"terminal_id",
    //                "label":"Terminal ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"cypher_key",
    //                "label":"Cypher Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "credit"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "ES"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"http://www.ceca.es/es/",
    //    "company_name":"Cecabank, SA"
    // },
    {  
       "gateway_type":"cenpos",
       "name":"CenPOS",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"merchant_id",
                   "label":"Merchant",
                   "safe":true
                },
                {  
                   "name":"user_id",
                   "label":"User",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "general_credit",
          "void",
          "verify"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  
          "invoice_detail",
          "customer_code"
       ],
       "supported_countries":[  
          "AD",
          "AI",
          "AG",
          "AR",
          "AU",
          "AT",
          "BS",
          "BB",
          "BE",
          "BZ",
          "BM",
          "BR",
          "BN",
          "BG",
          "CA",
          "HR",
          "CY",
          "CZ",
          "DK",
          "DM",
          "EE",
          "FI",
          "FR",
          "DE",
          "GR",
          "GD",
          "GY",
          "HK",
          "HU",
          "IS",
          "IN",
          "IL",
          "IT",
          "JP",
          "LV",
          "LI",
          "LT",
          "LU",
          "MY",
          "MT",
          "MX",
          "MC",
          "MS",
          "NL",
          "PA",
          "PL",
          "PT",
          "KN",
          "LC",
          "MF",
          "VC",
          "SM",
          "SG",
          "SK",
          "SI",
          "ZA",
          "ES",
          "SR",
          "SE",
          "CH",
          "TR",
          "GB",
          "US",
          "UY"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover"
       ],
       "regions":[  
          "asia_pacific",
          "europe",
          "latin_america",
          "north_america"
       ],
       "homepage":"https://www.cenpos.com/",
       "company_name":"CenPOS"
    },
    // {  
    //    "gateway_type":"checkout",
    //    "name":"Checkout.com",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "descriptor_name",
    //       "descriptor_city"
    //    ],
    //    "supported_countries":[  
    //       "AD",
    //       "AT",
    //       "BE",
    //       "BG",
    //       "CH",
    //       "CY",
    //       "CZ",
    //       "DE",
    //       "DK",
    //       "EE",
    //       "ES",
    //       "FO",
    //       "FI",
    //       "FR",
    //       "GB",
    //       "GI",
    //       "GL",
    //       "GR",
    //       "HR",
    //       "HU",
    //       "IE",
    //       "IS",
    //       "IL",
    //       "IT",
    //       "LI",
    //       "LT",
    //       "LU",
    //       "LV",
    //       "MC",
    //       "MT",
    //       "NL",
    //       "NO",
    //       "PL",
    //       "PT",
    //       "RO",
    //       "SE",
    //       "SI",
    //       "SM",
    //       "SK",
    //       "SJ",
    //       "TR",
    //       "VA"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "europe",
    //       "north_america"
    //    ],
    //    "homepage":"https://www.checkout.com/",
    //    "company_name":"Checkout.com"
    // },
    // {  
    //    "gateway_type":"checkout_v2",
    //    "name":"Checkout V2",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"secret_key",
    //                "label":"Secret Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "descriptor_city",
    //       "descriptor_name"
    //    ],
    //    "supported_countries":[  
    //       "AD",
    //       "AT",
    //       "BE",
    //       "BG",
    //       "CH",
    //       "CY",
    //       "CZ",
    //       "DE",
    //       "DK",
    //       "EE",
    //       "ES",
    //       "FO",
    //       "FI",
    //       "FR",
    //       "GB",
    //       "GI",
    //       "GL",
    //       "GR",
    //       "HR",
    //       "HU",
    //       "IE",
    //       "IS",
    //       "IL",
    //       "IT",
    //       "LI",
    //       "LT",
    //       "LU",
    //       "LV",
    //       "MC",
    //       "MT",
    //       "NL",
    //       "NO",
    //       "PL",
    //       "PT",
    //       "RO",
    //       "SE",
    //       "SI",
    //       "SM",
    //       "SK",
    //       "SJ",
    //       "TR",
    //       "VA"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "asia_pacific",
    //       "europe",
    //       "latin_america",
    //       "middle_east",
    //       "north_america"
    //    ],
    //    "homepage":"https://www.checkout.com/",
    //    "company_name":"Checkout V2"
    // },
    // {  
    //    "gateway_type":"clearhaus",
    //    "name":"Clearhaus",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"api_key",
    //                "label":"API key",
    //                "safe":false
    //             },
    //             {  
    //                "name":"signing_key",
    //                "label":"Signing Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "text_on_statement"
    //    ],
    //    "supported_countries":[  
    //       "DK",
    //       "NO",
    //       "SE",
    //       "FI",
    //       "DE",
    //       "CH",
    //       "NL",
    //       "AD",
    //       "AT",
    //       "BE",
    //       "BG",
    //       "HR",
    //       "CY",
    //       "CZ",
    //       "FO",
    //       "GL",
    //       "EE",
    //       "FR",
    //       "GR",
    //       "HU",
    //       "IS",
    //       "IE",
    //       "IT",
    //       "LV",
    //       "LI",
    //       "LT",
    //       "LU",
    //       "MT",
    //       "PL",
    //       "PT",
    //       "RO",
    //       "SK",
    //       "SI",
    //       "ES",
    //       "GB"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"https://www.clearhaus.com",
    //    "company_name":"Clearhaus"
    // },
    // {  
    //    "gateway_type":"conekta",
    //    "name":"Conekta",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"api_key",
    //                "label":"API Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "reference_purchase"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "device_fingerprint",
    //       "customer"
    //    ],
    //    "supported_countries":[  
    //       "MX"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express"
    //    ],
    //    "regions":[  
    //       "latin_america"
    //    ],
    //    "homepage":"https://www.conekta.io",
    //    "company_name":"Conekta"
    // },
    // {  
    //    "gateway_type":"creditcall",
    //    "name":"Creditcall",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"terminal_id",
    //                "label":"Terminal",
    //                "safe":true
    //             },
    //             {  
    //                "name":"transaction_key",
    //                "label":"Transaction Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"https://www.creditcall.com",
    //    "company_name":"Creditcall"
    // },
    {  
       "gateway_type":"cyber_source",
       "name":"CyberSource",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"user_name",
                   "label":"User Name",
                   "safe":true
                },
                {  
                   "name":"transaction_key",
                   "label":"Transaction Key",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify",
          "store"
       ],
       "payment_methods":[  
          "credit_card",
          "apple_pay",
          "third_party_token"
       ],
       "gateway_specific_fields":[  
          "mdd_field_1",
          "mdd_field_2",
          "mdd_field_3",
          "mdd_field_4",
          "mdd_field_5",
          "mdd_field_6",
          "mdd_field_7",
          "mdd_field_8",
          "mdd_field_9",
          "mdd_field_10",
          "mdd_field_11",
          "mdd_field_12",
          "mdd_field_13",
          "mdd_field_14",
          "mdd_field_15",
          "mdd_field_16",
          "mdd_field_17",
          "mdd_field_18",
          "mdd_field_19",
          "mdd_field_20"
       ],
       "supported_countries":[  
          "US",
          "BR",
          "CA",
          "CN",
          "DK",
          "FI",
          "FR",
          "DE",
          "JP",
          "MX",
          "NO",
          "SE",
          "GB",
          "SG"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover"
       ],
       "regions":[  
          "asia_pacific",
          "europe",
          "latin_america",
          "north_america"
       ],
       "homepage":"http://www.cybersource.com",
       "company_name":"CyberSource"
    },
    // {  
    //    "gateway_type":"data_cash",
    //    "name":"DataCash",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"client",
    //                "label":"Client",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "GB"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "diners_club",
    //       "jcb",
    //       "maestro",
    //       "switch",
    //       "solo",
    //       "laser"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"http://www.datacash.com/",
    //    "company_name":"DataCash"
    // },
    // {  
    //    "gateway_type":"diamond_mind",
    //    "name":"Diamond Mind",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "bank_account"
    //    ],
    //    "gateway_specific_fields":[  
    //       "sec_code",
    //       "merchant_defined_field_1",
    //       "merchant_defined_field_2",
    //       "merchant_defined_field_3",
    //       "merchant_defined_field_4",
    //       "merchant_defined_field_5",
    //       "merchant_defined_field_6",
    //       "merchant_defined_field_7",
    //       "merchant_defined_field_8",
    //       "merchant_defined_field_9",
    //       "merchant_defined_field_10",
    //       "merchant_defined_field_11",
    //       "merchant_defined_field_12",
    //       "merchant_defined_field_13",
    //       "merchant_defined_field_14",
    //       "merchant_defined_field_15",
    //       "merchant_defined_field_16",
    //       "merchant_defined_field_17",
    //       "merchant_defined_field_18",
    //       "merchant_defined_field_19",
    //       "merchant_defined_field_20"
    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.diamondmindinc.com/",
    //    "company_name":"Diamond Mind"
    // },
    // {  
    //    "gateway_type":"dibs",
    //    "name":"DIBS",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant",
    //                "safe":true
    //             },
    //             {  
    //                "name":"secret_key",
    //                "label":"Secret Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "third_party_token"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US",
    //       "FI",
    //       "NO",
    //       "SE",
    //       "GB"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "europe",
    //       "north_america"
    //    ],
    //    "homepage":"http://www.dibspayment.com",
    //    "company_name":"DIBS Payment Services"
    // },
    {  
       "gateway_type":"elavon",
       "name":"Elavon",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"merchant_id",
                   "label":"Merchant ID",
                   "safe":true
                },
                {  
                   "name":"user",
                   "label":"User",
                   "safe":true
                },
                {  
                   "name":"pin",
                   "label":"Pin",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "US",
          "CA",
          "PR",
          "DE",
          "IE",
          "NO",
          "PL",
          "LU",
          "BE",
          "NL"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover"
       ],
       "regions":[  
          "europe",
          "latin_america",
          "north_america"
       ],
       "homepage":"http://www.elavon.com",
       "company_name":"Elavon"
    },
    // {  
    //    "gateway_type":"element",
    //    "name":"Element",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"acceptor_id",
    //                "label":"Acceptor",
    //                "safe":true
    //             },
    //             {  
    //                "name":"account_id",
    //                "label":"Account",
    //                "safe":true
    //             },
    //             {  
    //                "name":"application_id",
    //                "label":"Application",
    //                "safe":true
    //             },
    //             {  
    //                "name":"application_name",
    //                "label":"Application Name",
    //                "safe":true
    //             },
    //             {  
    //                "name":"application_version",
    //                "label":"Application Version",
    //                "safe":true
    //             },
    //             {  
    //                "name":"account_token",
    //                "label":"Account Token",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "bank_account",
    //       "third_party_token"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "diners_club",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.elementps.com",
    //    "company_name":"Element"
    // },
    // {  
    //    "gateway_type":"epay",
    //    "name":"ePay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "DK",
    //       "SE",
    //       "NO"
    //    ],
    //    "supported_cardtypes":[  
    //       "dankort",
    //       "forbrugsforeningen",
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "jcb",
    //       "maestro"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"http://www.epay.dk/",
    //    "company_name":"ePay"
    // },
    // {  
    //    "gateway_type":"eway",
    //    "name":"eWAY",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"customer_id",
    //                "label":"Customer ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"refund_password",
    //                "label":"XML Refund Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "credit"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AU"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"http://www.eway.com.au/",
    //    "company_name":"eWAY"
    // },
    // {  
    //    "gateway_type":"eway_rapid",
    //    "name":"eWAY Rapid",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"api_key",
    //                "label":"API Key",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "reference_purchase",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "third_party_token"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AU",
    //       "NZ",
    //       "GB",
    //       "SG",
    //       "MY",
    //       "HK"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "asia_pacific",
    //       "europe"
    //    ],
    //    "homepage":"http://www.eway.com.au/developers/api/rapid-3-1",
    //    "company_name":"eWAY Rapid"
    // },
    {  
       "gateway_type":"ezic",
       "name":"Ezic",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"account_id",
                   "label":"Account",
                   "safe":true
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "AU",
          "CA",
          "CN",
          "FR",
          "DE",
          "GI",
          "IL",
          "MT",
          "MU",
          "MX",
          "NL",
          "NZ",
          "PA",
          "PH",
          "RU",
          "SG",
          "KR",
          "ES",
          "KN",
          "GB",
          "US"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "jcb",
          "diners_club"
       ],
       "regions":[  
          "asia_pacific",
          "europe",
          "latin_america",
          "middle_east",
          "north_america"
       ],
       "homepage":"http://ezic.com/",
       "company_name":"Ezic, Inc."
    },
    // {  
    //    "gateway_type":"fat_zebra",
    //    "name":"Fat Zebra",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"username",
    //                "label":"Username",
    //                "safe":true
    //             },
    //             {  
    //                "name":"api_token",
    //                "label":"Api Token",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "third_party_token"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AU"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"https://www.fatzebra.com.au/",
    //    "company_name":"Fat Zebra Pty. Ltd."
    // },
    {  
       "gateway_type":"first_data_e4",
       "name":"Payeezy (formerly GGE4)",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"gateway_id",
                   "label":"Gateway ID",
                   "safe":true
                },
                {  
                   "name":"terminal_password",
                   "label":"Terminal Password",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify"
       ],
       "payment_methods":[  
          "credit_card",
          "apple_pay"
       ],
       "gateway_specific_fields":[  
          "customer_ref",
          "tax1_amount",
          "tax1_number",
          "ecommerce_flag",
          "level_3"
       ],
       "supported_countries":[  
          "CA",
          "US"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "jcb",
          "discover"
       ],
       "regions":[  
          "north_america"
       ],
       "homepage":"https://www.firstdata.com/en_us/products/small-business/all-solutions/payeezy.html",
       "company_name":"Payeezy (formerly GGE4)"
    },
    // {  
    //    "gateway_type":"first_giving",
    //    "name":"First Giving",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"application_key",
    //                "label":"Application Key",
    //                "safe":true
    //             },
    //             {  
    //                "name":"charity_id",
    //                "label":"Charity ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"security_token",
    //                "label":"Security Token",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "credit"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.firstgiving.com/",
    //    "company_name":"First Giving"
    // },
    // {  
    //    "gateway_type":"first_pay",
    //    "name":"First Pay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"transaction_center_id",
    //                "label":"Transaction Center",
    //                "safe":true
    //             },
    //             {  
    //                "name":"gateway_id",
    //                "label":"Gateway",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.1stpaygateway.net/",
    //    "company_name":"1stPayGateway.Net"
    // },
    // {  
    //    "gateway_type":"flo2cash",
    //    "name":"Flo2Cash",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"account_id",
    //                "label":"Account",
    //                "safe":true
    //             },
    //             {  
    //                "name":"username",
    //                "label":"Username",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "NZ"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"http://www.flo2cash.co.nz/",
    //    "company_name":"Flo2Cash"
    // },
    // {  
    //    "gateway_type":"flo2cash_simple",
    //    "name":"Flo2Cash Simple",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"account_id",
    //                "label":"Account",
    //                "safe":true
    //             },
    //             {  
    //                "name":"username",
    //                "label":"Username",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "credit"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  

    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"http://www.flo2cash.co.nz/",
    //    "company_name":"Flo2Cash"
    // },
    // {  
    //    "gateway_type":"forte",
    //    "name":"Forte",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"account_id",
    //                "label":"Account",
    //                "safe":true
    //             },
    //             {  
    //                "name":"api_key",
    //                "label":"Api Key",
    //                "safe":true
    //             },
    //             {  
    //                "name":"location_id",
    //                "label":"Location",
    //                "safe":true
    //             },
    //             {  
    //                "name":"secret",
    //                "label":"Secret",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "general_credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "bank_account"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://forte.net",
    //    "company_name":"Forte"
    // },
    // {  
    //    "gateway_type":"global",
    //    "name":"First Data Global Gateway",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"pem",
    //                "label":"Pem",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "jcb",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.firstdata.com/en_us/products/merchants/ecommerce/online-payment-processing.html",
    //    "company_name":"First Data Global Gateway"
    // },
    // {  
    //    "gateway_type":"global_collect",
    //    "name":"Ingenico ePayments (formerly GlobalCollect)",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"api_key_id",
    //                "label":"Api Key",
    //                "safe":true
    //             },
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant",
    //                "safe":true
    //             },
    //             {  
    //                "name":"secret_api_key",
    //                "label":"Secret Api Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AD",
    //       "AE",
    //       "AT",
    //       "AU",
    //       "BD",
    //       "BE",
    //       "BG",
    //       "BN",
    //       "CA",
    //       "CH",
    //       "CY",
    //       "CZ",
    //       "DE",
    //       "DK",
    //       "EE",
    //       "EG",
    //       "ES",
    //       "FI",
    //       "FR",
    //       "GB",
    //       "GI",
    //       "GR",
    //       "HK",
    //       "HU",
    //       "ID",
    //       "IE",
    //       "IL",
    //       "IM",
    //       "IN",
    //       "IS",
    //       "IT",
    //       "JO",
    //       "KW",
    //       "LB",
    //       "LI",
    //       "LK",
    //       "LT",
    //       "LU",
    //       "LV",
    //       "MC",
    //       "MT",
    //       "MU",
    //       "MV",
    //       "MX",
    //       "MY",
    //       "NL",
    //       "NO",
    //       "NZ",
    //       "OM",
    //       "PH",
    //       "PL",
    //       "PT",
    //       "QA",
    //       "RO",
    //       "SA",
    //       "SE",
    //       "SG",
    //       "SI",
    //       "SK",
    //       "SM",
    //       "TR",
    //       "TT",
    //       "UM",
    //       "US",
    //       "VA",
    //       "VN",
    //       "ZA"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "asia_pacific",
    //       "europe",
    //       "latin_america",
    //       "middle_east",
    //       "north_america"
    //    ],
    //    "homepage":"http://www.globalcollect.com/",
    //    "company_name":"Ingenico ePayments (formerly GlobalCollect)"
    // },
    // {  
    //    "gateway_type":"global_iris",
    //    "name":"Global Iris",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"sub_account",
    //                "label":"Sub Account",
    //                "safe":true
    //             },
    //             {  
    //                "name":"refund_password",
    //                "label":"Refund Password",
    //                "safe":false
    //             },
    //             {  
    //                "name":"secret",
    //                "label":"Secret",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "IE",
    //       "GB",
    //       "FR",
    //       "BE",
    //       "NL",
    //       "LU",
    //       "IT"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "switch",
    //       "solo",
    //       "laser"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"https://globalpaymentsinc.co.uk/online-payments/global-iris.html",
    //    "company_name":"Global Iris"
    // },
    {  
       "gateway_type":"global_transport",
       "name":"Global Transport",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"global_user_name",
                   "label":"Global User Name",
                   "safe":true
                },
                {  
                   "name":"global_password",
                   "label":"Global Password",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "CA",
          "PR",
          "US"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "diners_club",
          "jcb"
       ],
       "regions":[  
          "north_america"
       ],
       "homepage":"https://www.globalpaymentsinc.com",
       "company_name":" Global Payments Inc."
    },
    // {  
    //    "gateway_type":"hdfc",
    //    "name":"HDFC",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"tranportal_id",
    //                "label":"Tranportal ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"tranportal_password",
    //                "label":"Tranportal Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "3dsecure_purchase",
    //       "3dsecure_authorize"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "IN"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "discover",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"http://www.hdfcbank.com/sme/payments-and-collections/merchant-services",
    //    "company_name":"HDFC"
    // },
    // {  
    //    "gateway_type":"hps",
    //    "name":"Heartland Payment Systems",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"secret_api_key",
    //                "label":"Secret Api Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "reference_purchase"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "descriptor_name"
    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "jbc",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://developer.heartlandpaymentsystems.com/SecureSubmit/",
    //    "company_name":"Heartland Payment Systems, Inc."
    // },
    {  
       "gateway_type":"iats_payments",
       "name":"iATS Payments",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"agent_code",
                   "label":"Agent Code",
                   "safe":true
                },
                {  
                   "name":"region",
                   "label":"Region",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "credit",
          "store",
          "remove"
       ],
       "payment_methods":[  
          "credit_card",
          "bank_account"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "AU",
          "BR",
          "CA",
          "CH",
          "DE",
          "DK",
          "ES",
          "FI",
          "FR",
          "GR",
          "HK",
          "IE",
          "IT",
          "NL",
          "NO",
          "PT",
          "SE",
          "SG",
          "TR",
          "GB",
          "US",
          "TH",
          "ID",
          "PH",
          "BE"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover"
       ],
       "regions":[  
          "asia_pacific",
          "europe",
          "north_america"
       ],
       "homepage":"http://home.iatspayments.com/",
       "company_name":"iATS Payments"
    },
    // {  
    //    "gateway_type":"iridium",
    //    "name":"PayVector",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "reference_purchase",
    //       "reference_authorization"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "GB",
    //       "ES"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "maestro",
    //       "jcb",
    //       "solo",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"http://www.payvector.co.uk",
    //    "company_name":"Iridium"
    // },
    // {  
    //    "gateway_type":"ixopay",
    //    "name":"IXOPAY",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "bank_account"
    //    ],
    //    "gateway_specific_fields":[  
    //       "sec_code",
    //       "merchant_defined_field_1",
    //       "merchant_defined_field_2",
    //       "merchant_defined_field_3",
    //       "merchant_defined_field_4",
    //       "merchant_defined_field_5",
    //       "merchant_defined_field_6",
    //       "merchant_defined_field_7",
    //       "merchant_defined_field_8",
    //       "merchant_defined_field_9",
    //       "merchant_defined_field_10",
    //       "merchant_defined_field_11",
    //       "merchant_defined_field_12",
    //       "merchant_defined_field_13",
    //       "merchant_defined_field_14",
    //       "merchant_defined_field_15",
    //       "merchant_defined_field_16",
    //       "merchant_defined_field_17",
    //       "merchant_defined_field_18",
    //       "merchant_defined_field_19",
    //       "merchant_defined_field_20"
    //    ],
    //    "supported_countries":[  
    //       "AD",
    //       "CY",
    //       "GI",
    //       "IM",
    //       "MT",
    //       "RO",
    //       "CH",
    //       "AT",
    //       "DK",
    //       "GR",
    //       "IT",
    //       "MC",
    //       "SM",
    //       "TR",
    //       "BE",
    //       "EE",
    //       "HU",
    //       "LV",
    //       "NL",
    //       "SK",
    //       "GB",
    //       "BG",
    //       "FI",
    //       "IS",
    //       "LI",
    //       "NO",
    //       "SI",
    //       "VA",
    //       "FR",
    //       "IL",
    //       "LT",
    //       "PL",
    //       "ES",
    //       "CZ",
    //       "DE",
    //       "IE",
    //       "LU",
    //       "PT",
    //       "SE",
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "europe",
    //       "north_america"
    //    ],
    //    "homepage":"http://ixopay.com",
    //    "company_name":"IXOPAY"
    // },
    // {  
    //    "gateway_type":"jabstry",
    //    "name":"Jabstry",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"channel",
    //                "label":"Channel",
    //                "safe":true
    //             },
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"sender",
    //                "label":"Sender",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "third_party_token"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "DK"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "maestro"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"http://cloudservicesyd.com/",
    //    "company_name":"Jabstry"
    // },
    // {  
    //    "gateway_type":"jetpay",
    //    "name":"JetPay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "general_credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "ud_field_1",
    //       "ud_field_2",
    //       "ud_field_3",
    //       "origin"
    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.jetpay.com",
    //    "company_name":"JetPay"
    // },
    // {  
    //    "gateway_type":"latitude19",
    //    "name":"Latitude19",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"account_number",
    //                "label":"Account Number",
    //                "safe":true
    //             },
    //             {  
    //                "name":"configuration_id",
    //                "label":"Configuration",
    //                "safe":true
    //             },
    //             {  
    //                "name":"secret",
    //                "label":"Secret",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "general_credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US",
    //       "CA"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "diners_club",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.l19tech.com",
    //    "company_name":"Latitude19"
    // },
    // {  
    //    "gateway_type":"litle",
    //    "name":"Vantiv eCommerce",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"user",
    //                "label":"User",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "reference_purchase",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "third_party_token",
    //       "apple_pay"
    //    ],
    //    "gateway_specific_fields":[  
    //       "descriptor_name",
    //       "descriptor_phone",
    //       "order_source",
    //       "report_group",
    //       "customer_id",
    //       "debt_repayment"
    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "diners_club",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.vantiv.com/",
    //    "company_name":"Vantiv, Inc."
    // },
    // {  
    //    "gateway_type":"maxipago",
    //    "name":"maxiPago!",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "BR"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "discover",
    //       "american_express",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "south_america"
    //    ],
    //    "homepage":"http://www.maxipago.com/maxipago/",
    //    "company_name":"maxiPago!"
    // },
    // {  
    //    "gateway_type":"merchant_e_solutions",
    //    "name":"Merchant e-Solutions",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "general_credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://merchante-solutions.com/",
    //    "company_name":"Merchant e-Solutions"
    // },
    // {  
    //    "gateway_type":"merchant_partners",
    //    "name":"Merchant Partners",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"account_id",
    //                "label":"Account",
    //                "safe":true
    //             },
    //             {  
    //                "name":"merchant_pin",
    //                "label":"Merchant Pin",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "third_party_token"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "diners_club",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.merchantpartners.com/",
    //    "company_name":"Merchant Partners"
    // },
    // {  
    //    "gateway_type":"merchant_warrior",
    //    "name":"Merchant Warrior",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_uuid",
    //                "label":"Merchant Uuid",
    //                "safe":true
    //             },
    //             {  
    //                "name":"api_key",
    //                "label":"Api Key",
    //                "safe":false
    //             },
    //             {  
    //                "name":"api_passphrase",
    //                "label":"Api Passphrase",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "reference_purchase"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AU"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"http://www.merchantwarrior.com",
    //    "company_name":"Merchant Warrior"
    // },
    {  
       "gateway_type":"mercury",
       "name":"Mercury",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"merchant_id",
                   "label":"Merchant ID",
                   "safe":true
                },
                {  
                   "name":"mercury_tokenization_disabled",
                   "label":"Mercury Tokenization Disabled",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  
          "tax",
          "gratuity"
       ],
       "supported_countries":[  
          "US",
          "CA"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "diners_club",
          "jcb"
       ],
       "regions":[  
          "north_america"
       ],
       "homepage":"http://www.mercurypay.com",
       "company_name":"Mercury"
    },
    // {  
    //    "gateway_type":"micropayment",
    //    "name":"Micropayment",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"access_key",
    //                "label":"Access Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "project"
    //    ],
    //    "supported_countries":[  
    //       "DE"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"https://www.micropayment.de/",
    //    "company_name":"Micropayment"
    // },
    // {  
    //    "gateway_type":"migs",
    //    "name":"MasterCard Internet Gateway Service (MiGS)",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"ama_user",
    //                "label":"AMA User",
    //                "safe":true
    //             },
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"access_code",
    //                "label":"Access Code",
    //                "safe":false
    //             },
    //             {  
    //                "name":"ama_user_password",
    //                "label":"AMA User Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "fraud_review"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AU",
    //       "AE",
    //       "BD",
    //       "BN",
    //       "EG",
    //       "HK",
    //       "ID",
    //       "IN",
    //       "JO",
    //       "KW",
    //       "LB",
    //       "LK",
    //       "MU",
    //       "MV",
    //       "MY",
    //       "NZ",
    //       "OM",
    //       "PH",
    //       "QA",
    //       "SA",
    //       "SG",
    //       "TT",
    //       "VN"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "asia_pacific",
    //       "middle_east"
    //    ],
    //    "homepage":"http://www.mastercard.com/us/company/en/whatwedo/payment_processing.html",
    //    "company_name":"MasterCard Internet Gateway Service"
    // },
    {  
       "gateway_type":"moneris",
       "name":"Moneris",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"avs_enabled",
                   "label":"Avs Enabled",
                   "safe":true
                },
                {  
                   "name":"store_id",
                   "label":"Store ID",
                   "safe":true
                },
                {  
                   "name":"api_token",
                   "label":"Api Token",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "CA"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "diners_club",
          "discover"
       ],
       "regions":[  
          "north_america"
       ],
       "homepage":"http://eselectplus.moneris.com",
       "company_name":"Moneris"
    },
    // {  
    //    "gateway_type":"moneris_us",
    //    "name":"Moneris US",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"store_id",
    //                "label":"Store ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"api_token",
    //                "label":"API Token",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.monerisusa.com/",
    //    "company_name":"Moneris Solutions, Inc."
    // },
    // {  
    //    "gateway_type":"nab_transact",
    //    "name":"NAB Transact",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "general_credit",
    //       "store",
    //       "remove"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "third_party_token"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AU"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"http://www.nab.com.au/wps/wcm/connect/nab/nab/home/Business_Solutions/1/3/12/",
    //    "company_name":"NAB Transact"
    // },
    // {  
    //    "gateway_type":"ncr_secure_pay",
    //    "name":"NCR Secure Pay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"username",
    //                "label":"Username",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.ncrretailonline.com",
    //    "company_name":"NCR Secure Pay"
    // },
    // {  
    //    "gateway_type":"net_pay",
    //    "name":"NetPay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"store_id",
    //                "label":"Store ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"user_name",
    //                "label":"User Name",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "MX"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "latin_america"
    //    ],
    //    "homepage":"http://www.netpay.com.mx",
    //    "company_name":"NetPay"
    // },
    // {  
    //    "gateway_type":"netbilling",
    //    "name":"NETbilling",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"account_id",
    //                "label":"Account ID",
    //                "safe":true
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "jcb",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.netbilling.com",
    //    "company_name":"NETbilling"
    // },
    // {  
    //    "gateway_type":"nmi",
    //    "name":"NMI",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "bank_account"
    //    ],
    //    "gateway_specific_fields":[  
    //       "sec_code",
    //       "merchant_defined_field_1",
    //       "merchant_defined_field_2",
    //       "merchant_defined_field_3",
    //       "merchant_defined_field_4",
    //       "merchant_defined_field_5",
    //       "merchant_defined_field_6",
    //       "merchant_defined_field_7",
    //       "merchant_defined_field_8",
    //       "merchant_defined_field_9",
    //       "merchant_defined_field_10",
    //       "merchant_defined_field_11",
    //       "merchant_defined_field_12",
    //       "merchant_defined_field_13",
    //       "merchant_defined_field_14",
    //       "merchant_defined_field_15",
    //       "merchant_defined_field_16",
    //       "merchant_defined_field_17",
    //       "merchant_defined_field_18",
    //       "merchant_defined_field_19",
    //       "merchant_defined_field_20"
    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://nmi.com",
    //    "company_name":"NMI"
    // },
    {  
       "gateway_type":"ogone",
       "name":"Ingenico ePayments (formerly Ogone)",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"pspid",
                   "label":"Pspid",
                   "safe":true
                },
                {  
                   "name":"signature_strength",
                   "label":"Signature Strength",
                   "safe":true
                },
                {  
                   "name":"userid",
                   "label":"Userid",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                },
                {  
                   "name":"signature",
                   "label":"Signature",
                   "safe":false
                }
             ]
          },
          {  
             "auth_mode_type":"no_signature",
             "name":"No signature",
             "credentials":[  
                {  
                   "name":"pspid",
                   "label":"Pspid",
                   "safe":true
                },
                {  
                   "name":"userid",
                   "label":"Userid",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify",
          "3dsecure_purchase",
          "3dsecure_authorize"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "BE",
          "DE",
          "FR",
          "NL",
          "AT",
          "CH"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "diners_club",
          "discover",
          "jcb",
          "maestro"
       ],
       "regions":[  
          "europe"
       ],
       "homepage":"http://www.ogone.com/",
       "company_name":"Ingenico ePayments (formerly Ogone)"
    },
    // {  
    //    "gateway_type":"openpay",
    //    "name":"Openpay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"private_api_key",
    //                "label":"Private Api Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "reference_purchase"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "device_session_id"
    //    ],
    //    "supported_countries":[  
    //       "MX"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express"
    //    ],
    //    "regions":[  
    //       "latin_america"
    //    ],
    //    "homepage":"http://www.openpay.mx/",
    //    "company_name":"Openpay, SAPI de CV"
    // },
    {  
       "gateway_type":"optimal_payments",
       "name":"Optimal Payments",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"account_number",
                   "label":"Account Number",
                   "safe":true
                },
                {  
                   "name":"store_id",
                   "label":"Store",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "CA",
          "US",
          "GB"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "diners_club",
          "solo"
       ],
       "regions":[  
          "europe",
          "north_america"
       ],
       "homepage":"http://www.optimalpayments.com/",
       "company_name":"Optimal Payments"
    },
    {  
       "gateway_type":"orbital",
       "name":"Orbital",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"login",
                   "label":"Login",
                   "safe":true
                },
                {  
                   "name":"merchant_id",
                   "label":"Merchant ID",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                }
             ]
          },
          {  
             "auth_mode_type":"merchant_id_only",
             "name":"Merchant id only",
             "credentials":[  
                {  
                   "name":"merchant_id",
                   "label":"Merchant ID",
                   "safe":true
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "US",
          "CA"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "diners_club",
          "jcb"
       ],
       "regions":[  
          "north_america"
       ],
       "homepage":"http://www.chasepaymentech.com/payment_gateway.html",
       "company_name":"Orbital"
    },
    {  
       "gateway_type":"pay_conex",
       "name":"PayConex",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"account_id",
                   "label":"Account",
                   "safe":true
                },
                {  
                   "name":"api_accesskey",
                   "label":"Api Accesskey",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "general_credit",
          "void",
          "verify",
          "store"
       ],
       "payment_methods":[  
          "credit_card",
          "bank_account",
          "third_party_token"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "US",
          "CA"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "jcb",
          "diners_club"
       ],
       "regions":[  
          "north_america"
       ],
       "homepage":"https://www.bluefin.com/",
       "company_name":"Bluefin Payment Systems"
    },
    {  
       "gateway_type":"payeezy",
       "name":"Payeezy",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"api_key",
                   "label":"Api Key",
                   "safe":true
                },
                {  
                   "name":"api_token",
                   "label":"Api Token",
                   "safe":true
                },
                {  
                   "name":"api_secret",
                   "label":"Api Secret",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify"
       ],
       "payment_methods":[  
          "credit_card",
          "bank_account"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "US",
          "CA"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "jcb",
          "diners_club"
       ],
       "regions":[  
          "north_america"
       ],
       "homepage":"http://www.payeezy.com",
       "company_name":"Payeezy"
    },
    // {  
    //    "gateway_type":"payex",
    //    "name":"PayEx",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"account_number",
    //                "label":"Account Number",
    //                "safe":true
    //             },
    //             {  
    //                "name":"encryption_key",
    //                "label":"Encryption Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "reference_purchase"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "DK",
    //       "FI",
    //       "NO",
    //       "SE"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"http://payex.com",
    //    "company_name":"PayEx Group"
    // },
    {  
       "gateway_type":"payflow_pro",
       "name":"Payflow Pro",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"login",
                   "label":"Login",
                   "safe":true
                },
                {  
                   "name":"partner",
                   "label":"Partner",
                   "safe":true
                },
                {  
                   "name":"user",
                   "label":"User",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify",
          "reference_purchase",
          "fraud_review",
          "reference_authorization"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  
          "comment1",
          "comment2"
       ],
       "supported_countries":[  
          "US",
          "CA",
          "SG",
          "AU"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "jcb",
          "discover",
          "diners_club"
       ],
       "regions":[  
          "asia_pacific",
          "north_america"
       ],
       "homepage":"https://www.paypal.com/cgi-bin/webscr?cmd=_payflow-pro-overview-outside",
       "company_name":"Payflow Pro"
    },
    {  
       "gateway_type":"payment_express",
       "name":"Payment Express",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"login",
                   "label":"Login",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "store"
       ],
       "payment_methods":[  
          "credit_card",
          "third_party_token"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "AU",
          "CA",
          "DE",
          "ES",
          "FR",
          "GB",
          "HK",
          "IE",
          "MY",
          "NL",
          "NZ",
          "SG",
          "US",
          "ZA"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "diners_club",
          "jcb"
       ],
       "regions":[  
          "asia_pacific",
          "europe",
          "north_america"
       ],
       "homepage":"http://www.paymentexpress.com/index.html",
       "company_name":"Payment Express"
    },
    // {  
    //    "gateway_type":"paymill",
    //    "name":"Paymill",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"public_key",
    //                "label":"Public Key",
    //                "safe":true
    //             },
    //             {  
    //                "name":"private_key",
    //                "label":"Private Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "third_party_token"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AD",
    //       "AT",
    //       "BE",
    //       "BG",
    //       "CH",
    //       "CY",
    //       "CZ",
    //       "DE",
    //       "DK",
    //       "EE",
    //       "ES",
    //       "FI",
    //       "FO",
    //       "FR",
    //       "GB",
    //       "GI",
    //       "GR",
    //       "HR",
    //       "HU",
    //       "IE",
    //       "IL",
    //       "IM",
    //       "IS",
    //       "IT",
    //       "LI",
    //       "LT",
    //       "LU",
    //       "LV",
    //       "MC",
    //       "MT",
    //       "NL",
    //       "NO",
    //       "PL",
    //       "PT",
    //       "RO",
    //       "SE",
    //       "SI",
    //       "SK",
    //       "TR",
    //       "VA"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "discover",
    //       "union_pay",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"https://www.paymill.com",
    //    "company_name":"Paymill"
    // },
    {  
       "gateway_type":"paypal",
       "name":"PayPal",
       "auth_modes":[  
          {  
             "auth_mode_type":"signature",
             "name":"Signature",
             "credentials":[  
                {  
                   "name":"login",
                   "label":"Login",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                },
                {  
                   "name":"signature",
                   "label":"Signature",
                   "safe":false
                }
             ]
          },
          {  
             "auth_mode_type":"certificate",
             "name":"Certificate",
             "credentials":[  
                {  
                   "name":"login",
                   "label":"Login",
                   "safe":true
                },
                {  
                   "name":"password",
                   "label":"Password",
                   "safe":false
                },
                {  
                   "name":"pem",
                   "label":"PEM Certificate",
                   "safe":false,
                   "large":true
                }
             ]
          },
          {  
             "auth_mode_type":"delegate",
             "name":"Delegate",
             "credentials":[  
                {  
                   "name":"email",
                   "label":"PayPal Email",
                   "safe":true
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify",
          "reference_purchase",
          "purchase_via_preauthorization",
          "offsite_purchase",
          "offsite_authorize",
          "remove",
          "fraud_review",
          "disburse"
       ],
       "payment_methods":[  
          "credit_card",
          "paypal"
       ],
       "gateway_specific_fields":[  
          "recurring",
          "notify_url",
          "custom",
          "soft_descriptor",
          "soft_descriptor_city",
          "no_shipping",
          "email_subject"
       ],
       "supported_countries":[  
          "CA",
          "GB",
          "US"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover"
       ],
       "regions":[  
          "europe",
          "north_america"
       ],
       "homepage":"http://paypal.com/",
       "company_name":"PayPal"
    },
    // {  
    //    "gateway_type":"paystation",
    //    "name":"Paystation",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"gateway_id",
    //                "label":"Gateway",
    //                "safe":true
    //             },
    //             {  
    //                "name":"paystation_id",
    //                "label":"Paystation",
    //                "safe":true
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "third_party_token"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "NZ"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"http://paystation.co.nz/",
    //    "company_name":"Paystation"
    // },
    // {  
    //    "gateway_type":"payu_in",
    //    "name":"PayU India",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_key",
    //                "label":"Merchant Key",
    //                "safe":true
    //             },
    //             {  
    //                "name":"salt",
    //                "label":"Salt",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "credit",
    //       "3dsecure_purchase"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "IN"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "maestro"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"https://www.payu.in/",
    //    "company_name":"PayU India"
    // },
    // {  
    //    "gateway_type":"pin",
    //    "name":"Pin Payments",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"api_key",
    //                "label":"Api Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AU"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"https://www.pin.net.au",
    //    "company_name":"Pin Payments"
    // },
    // {  
    //    "gateway_type":"plugnpay",
    //    "name":"Plug'n Pay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"publisher_name",
    //                "label":"Publisher Name",
    //                "safe":true
    //             },
    //             {  
    //                "name":"publisher_password",
    //                "label":"Publisher Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://plugnpay.com",
    //    "company_name":"Plug and Pay Technologies"
    // },
    {  
       "gateway_type":"psi_gate",
       "name":"PSiGate",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"store_id",
                   "label":"Store ID",
                   "safe":true
                },
                {  
                   "name":"passphrase",
                   "label":"Passphrase",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void"
       ],
       "payment_methods":[  
          "credit_card"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "CA"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express"
       ],
       "regions":[  
          "europe"
       ],
       "homepage":"http://www.psigate.com",
       "company_name":"PSiGate"
    },
    // {  
    //    "gateway_type":"qbms",
    //    "name":"QuickBooks Merchant Services",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"ticket",
    //                "label":"Ticket",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "reference_purchase",
    //       "fraud_review"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "discover",
    //       "american_express",
    //       "diners_club",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://payments.intuit.com/products/quickbooks-credit-card-processing-services.jsp",
    //    "company_name":"QuickBooks Merchant Services"
    // },
    // {  
    //    "gateway_type":"quantum",
    //    "name":"Quantum",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.quantumgateway.com",
    //    "company_name":"Quantum"
    // },
    // {  
    //    "gateway_type":"quickpay",
    //    "name":"QuickPay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"quickpay_id",
    //                "label":"Quickpay ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"md5_secret",
    //                "label":"Md5 Secret",
    //                "safe":false
    //             }
    //          ]
    //       },
    //       {  
    //          "auth_mode_type":"with_api_key",
    //          "name":"With api key",
    //          "credentials":[  
    //             {  
    //                "name":"quickpay_id",
    //                "label":"Quickpay ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"api_key",
    //                "label":"Api Key",
    //                "safe":false
    //             },
    //             {  
    //                "name":"md5_secret",
    //                "label":"Md5 Secret",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "third_party_token"
    //    ],
    //    "gateway_specific_fields":[  
    //       "finalize"
    //    ],
    //    "supported_countries":[  
    //       "DE",
    //       "DK",
    //       "ES",
    //       "FI",
    //       "FR",
    //       "FO",
    //       "GB",
    //       "IS",
    //       "NO",
    //       "SE"
    //    ],
    //    "supported_cardtypes":[  
    //       "dankort",
    //       "forbrugsforeningen",
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "jcb",
    //       "maestro"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"https://quickpay.net/",
    //    "company_name":"QuickPay"
    // },
    // {  
    //    "gateway_type":"quickpay_v10",
    //    "name":"QuickPay V10",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"api_key",
    //                "label":"Api Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "general_credit",
    //       "void",
    //       "verify",
    //       "store",
    //       "remove"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "third_party_token"
    //    ],
    //    "gateway_specific_fields":[  
    //       "acquirer"
    //    ],
    //    "supported_countries":[  
    //       "DE",
    //       "DK",
    //       "ES",
    //       "FI",
    //       "FR",
    //       "FO",
    //       "GB",
    //       "IS",
    //       "NO",
    //       "SE"
    //    ],
    //    "supported_cardtypes":[  
    //       "dankort",
    //       "forbrugsforeningen",
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "jcb",
    //       "maestro"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"https://quickpay.net/",
    //    "company_name":"QuickPay V10"
    // },
    // {  
    //    "gateway_type":"qvalent",
    //    "name":"Qvalent",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant",
    //                "label":"Merchant",
    //                "safe":true
    //             },
    //             {  
    //                "name":"username",
    //                "label":"Username",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             },
    //             {  
    //                "name":"pem",
    //                "label":"PEM Certificate",
    //                "safe":false,
    //                "large":true
    //             },
    //             {  
    //                "name":"pem_password",
    //                "label":"Pem Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "credit",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AU"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "jcb",
    //       "diners"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"https://www.qvalent.com/HomePageView",
    //    "company_name":"Qvalent"
    // },
    // {  
    //    "gateway_type":"realex",
    //    "name":"Realex",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"sub_account",
    //                "label":"Sub Account",
    //                "safe":true
    //             },
    //             {  
    //                "name":"refund_password",
    //                "label":"Refund Password",
    //                "safe":false
    //             },
    //             {  
    //                "name":"secret",
    //                "label":"Secret",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "IE",
    //       "GB",
    //       "FR",
    //       "BE",
    //       "NL",
    //       "LU",
    //       "IT"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "switch",
    //       "solo",
    //       "laser"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"http://www.realexpayments.com/",
    //    "company_name":"Realex"
    // },
    // {  
    //    "gateway_type":"redsys",
    //    "name":"CatalunyaCaixa (via Redsys)",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"signature_algorithm",
    //                "label":"Signature Algorithm",
    //                "safe":true
    //             },
    //             {  
    //                "name":"terminal",
    //                "label":"Terminal",
    //                "safe":true
    //             },
    //             {  
    //                "name":"secret_key",
    //                "label":"Secret Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "ES"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "jcb",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"http://www.catalunyacaixa.com",
    //    "company_name":"CatalunyaCaixa (via Redsys)"
    // },
    // {  
    //    "gateway_type":"s5",
    //    "name":"S5",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"channel",
    //                "label":"Channel",
    //                "safe":true
    //             },
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"sender",
    //                "label":"Sender",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "third_party_token"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "DK"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "maestro"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"http://www.s5.dk",
    //    "company_name":"S5"
    // },
    {  
       "gateway_type":"sage",
       "name":"Sage Payment Solutions",
       "auth_modes":[  
          {  
             "auth_mode_type":"default",
             "name":"Default",
             "credentials":[  
                {  
                   "name":"merchant_id_number",
                   "label":"Merchant ID Number",
                   "safe":true
                },
                {  
                   "name":"merchant_key_number",
                   "label":"Merchant Key Number",
                   "safe":false
                }
             ]
          }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "general_credit",
          "void",
          "store",
          "remove"
       ],
       "payment_methods":[  
          "credit_card",
          "third_party_token"
       ],
       "gateway_specific_fields":[  

       ],
       "supported_countries":[  
          "US",
          "CA"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "jcb",
          "diners_club"
       ],
       "regions":[  
          "north_america"
       ],
       "homepage":"http://sagepayments.com",
       "company_name":"Sage Payment Solutions"
    },
    // {  
    //    "gateway_type":"sage_pay",
    //    "name":"SagePay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Vendor Login Name",
    //                "safe":true
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "3dsecure_purchase",
    //       "3dsecure_authorize"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "gift_aid_payment",
    //       "apply_avscv2"
    //    ],
    //    "supported_countries":[  
    //       "GB",
    //       "IE"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "jcb",
    //       "switch",
    //       "solo",
    //       "maestro",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"http://www.sagepay.com/",
    //    "company_name":"SagePay UK"
    // },
    // {  
    //    "gateway_type":"secure_net",
    //    "name":"SecureNet",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"secure_net_id",
    //                "label":"SecureNet ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"secure_key",
    //                "label":"Secure Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "invoice_description",
    //       "invoice_number",
    //       "customer_id"
    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.securenet.com",
    //    "company_name":"SecureNet"
    // },
    // {  
    //    "gateway_type":"secure_pay_au",
    //    "name":"SecurePay Australia",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AU"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "asia_pacific"
    //    ],
    //    "homepage":"http://www.securepay.com.au/",
    //    "company_name":"SecurePay Australia"
    // },
    // {  
    //    "gateway_type":"securion_pay",
    //    "name":"SecurionPay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"secret_key",
    //                "label":"Secret Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "customer_id"
    //    ],
    //    "supported_countries":[  
    //       "AL",
    //       "AD",
    //       "AT",
    //       "BY",
    //       "BE",
    //       "BG",
    //       "HR",
    //       "CY",
    //       "RE",
    //       "DK",
    //       "EE",
    //       "IS",
    //       "FI",
    //       "FR",
    //       "DE",
    //       "GI",
    //       "GR",
    //       "HU",
    //       "IS",
    //       "IE",
    //       "IT",
    //       "LV",
    //       "LI",
    //       "LT",
    //       "LU",
    //       "MK",
    //       "MT",
    //       "MD",
    //       "MC",
    //       "NL",
    //       "NO",
    //       "PL",
    //       "PT",
    //       "RO",
    //       "RU",
    //       "MA",
    //       "RS",
    //       "SK",
    //       "SI",
    //       "ES",
    //       "SE",
    //       "CH",
    //       "UA",
    //       "KI",
    //       "CI",
    //       "RS",
    //       "RS",
    //       "ME"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "jcb",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "asia_pacific",
    //       "europe",
    //       "latin_america",
    //       "north_america"
    //    ],
    //    "homepage":"https://securionpay.com",
    //    "company_name":"SecurionPay"
    // },
    {  
       "gateway_type":"stripe",
       "name":"Stripe",
       "auth_modes":[  
        {
          "auth_mode_type": "default",
          "credentials": [
            {
              "label": "Merchant ID",
              "name": "merchant_id",
              "safe": true
            },
            {
              "label": "Api Key",
              "name": "api_key",
              "safe": false
            }
          ],
          "name": "Default"
        }
       ],
       "characteristics":[  
          "purchase",
          "authorize",
          "capture",
          "credit",
          "void",
          "verify",
          "store",
          "remove"
       ],
       "payment_methods":[  
          "credit_card",
          "third_party_token",
          "apple_pay",
          "bank_account"
       ],
       "gateway_specific_fields":[  
          "application_fee",
          "refund_application_fee",
          "refund_fee_amount",
          "statement_description",
          "destination",
          "reverse_transfer",
          "customer_id",
          "account_id",
          "validate",
          "make_default",
          "idempotency_key",
          "metadata",
          "stripe_account",
          "receipt_email"
       ],
       "supported_countries":[  
          "AT",
          "AU",
          "BE",
          "CA",
          "CH",
          "DE",
          "DK",
          "ES",
          "FI",
          "FR",
          "GB",
          "IE",
          "IT",
          "LU",
          "NL",
          "NO",
          "SE",
          "US"
       ],
       "supported_cardtypes":[  
          "visa",
          "master",
          "american_express",
          "discover",
          "jcb",
          "diners_club",
          "maestro"
       ],
       "regions":[  
          "asia_pacific",
          "europe",
          "north_america"
       ],
       "homepage":"https://stripe.com",
       "company_name":"Stripe"
    },
    // {  
    //    "gateway_type":"test",
    //    "name":"Spreedly Test",
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "general_credit",
    //       "void",
    //       "verify",
    //       "reference_purchase",
    //       "purchase_via_preauthorization",
    //       "offsite_purchase",
    //       "offsite_authorize",
    //       "3dsecure_purchase",
    //       "3dsecure_authorize",
    //       "store",
    //       "remove",
    //       "disburse",
    //       "reference_authorization"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "sprel",
    //       "third_party_token",
    //       "bank_account",
    //       "apple_pay"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  

    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://docs.spreedly.com/payment-gateways/test",
    //    "company_name":"Spreedly"
    // },
    // {  
    //    "gateway_type":"tns",
    //    "name":"TNS",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"userid",
    //                "label":"Userid",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AR",
    //       "AU",
    //       "BR",
    //       "FR",
    //       "DE",
    //       "HK",
    //       "MX",
    //       "NZ",
    //       "SG",
    //       "GB",
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "diners_club",
    //       "jcb",
    //       "maestro",
    //       "laser"
    //    ],
    //    "regions":[  
    //       "asia_pacific",
    //       "europe",
    //       "latin_america",
    //       "middle_east",
    //       "north_america",
    //       "south_america"
    //    ],
    //    "homepage":"http://www.tnsi.com/",
    //    "company_name":"TNS"
    // },
    // {  
    //    "gateway_type":"trans_first",
    //    "name":"TransFirst",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"merchant_id",
    //                "label":"MerchantID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"reg_key",
    //                "label":"RegKey",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "bank_account"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"https://www.transfirst.com",
    //    "company_name":"TransFirst"
    // },
    // {  
    //    "gateway_type":"trans_first_transaction_express",
    //    "name":"TransFirst Transaction Express",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"gateway_id",
    //                "label":"Gateway",
    //                "safe":false
    //             },
    //             {  
    //                "name":"reg_key",
    //                "label":"Reg Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "diners_club"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://transactionexpress.com/",
    //    "company_name":"TransFirst Transaction Express"
    // },
    // {  
    //    "gateway_type":"trust_commerce",
    //    "name":"TrustCommerce",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "discover",
    //       "american_express",
    //       "diners_club",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.trustcommerce.com",
    //    "company_name":"TrustCommerce"
    // },
    // {  
    //    "gateway_type":"usa_epay",
    //    "name":"USA ePay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"source_key",
    //                "label":"Source Key",
    //                "safe":true
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  

    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://usaepay.com/",
    //    "company_name":"USA ePay"
    // },
    // {  
    //    "gateway_type":"vanco",
    //    "name":"Vanco",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"client_id",
    //                "label":"Client",
    //                "safe":true
    //             },
    //             {  
    //                "name":"user_id",
    //                "label":"User",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "credit"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "bank_account"
    //    ],
    //    "gateway_specific_fields":[  
    //       "fund_id"
    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://vancopayments.com/",
    //    "company_name":"Vanco Payment Solutions"
    // },
    // {  
    //    "gateway_type":"visanet_peru",
    //    "name":"VisaNet Peru",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"access_key_id",
    //                "label":"Access Key",
    //                "safe":true
    //             },
    //             {  
    //                "name":"merchant_id",
    //                "label":"Merchant",
    //                "safe":true
    //             },
    //             {  
    //                "name":"secret_access_key",
    //                "label":"Secret Access Key",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "device_fingerprint_id",
    //       "merchant_defined_data"
    //    ],
    //    "supported_countries":[  
    //       "US",
    //       "PE"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "south_america"
    //    ],
    //    "homepage":"http://www.visanet.com.pe",
    //    "company_name":"VisaNet Peru"
    // },
    // {  
    //    "gateway_type":"wepay",
    //    "name":"WePay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"account_id",
    //                "label":"Account ID",
    //                "safe":true
    //             },
    //             {  
    //                "name":"client_id",
    //                "label":"Client Number",
    //                "safe":true
    //             },
    //             {  
    //                "name":"access_token",
    //                "label":"Access Token",
    //                "safe":false
    //             },
    //             {  
    //                "name":"client_secret",
    //                "label":"Client Secret",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "reference_purchase",
    //       "store"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "callback_uri",
    //       "fee_payer",
    //       "type"
    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"https://www.wepay.com/",
    //    "company_name":"WePay, Inc."
    // },
    // {  
    //    "gateway_type":"wirecard",
    //    "name":"Wirecard",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"business_case_signature",
    //                "label":"Business Case Signature",
    //                "safe":true
    //             },
    //             {  
    //                "name":"username",
    //                "label":"Username",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "AD",
    //       "CY",
    //       "GI",
    //       "IM",
    //       "MT",
    //       "RO",
    //       "CH",
    //       "AT",
    //       "DK",
    //       "GR",
    //       "IT",
    //       "MC",
    //       "SM",
    //       "TR",
    //       "BE",
    //       "EE",
    //       "HU",
    //       "LV",
    //       "NL",
    //       "SK",
    //       "GB",
    //       "BG",
    //       "FI",
    //       "IS",
    //       "LI",
    //       "NO",
    //       "SI",
    //       "VA",
    //       "FR",
    //       "IL",
    //       "LT",
    //       "PL",
    //       "ES",
    //       "CZ",
    //       "DE",
    //       "IE",
    //       "LU",
    //       "PT",
    //       "SE"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "diners_club",
    //       "jcb",
    //       "switch"
    //    ],
    //    "regions":[  
    //       "europe"
    //    ],
    //    "homepage":"http://www.wirecard.com/",
    //    "company_name":"Wirecard"
    // },
    // {  
    //    "gateway_type":"worldpay",
    //    "name":"WorldPay",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"login",
    //                "label":"Login",
    //                "safe":true
    //             },
    //             {  
    //                "name":"password",
    //                "label":"Password",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify",
    //       "reference_purchase"
    //    ],
    //    "payment_methods":[  
    //       "credit_card"
    //    ],
    //    "gateway_specific_fields":[  
    //       "installation_id"
    //    ],
    //    "supported_countries":[  
    //       "HK",
    //       "GB",
    //       "AU",
    //       "AD",
    //       "BE",
    //       "CH",
    //       "CY",
    //       "CZ",
    //       "DE",
    //       "DK",
    //       "ES",
    //       "FI",
    //       "FR",
    //       "GI",
    //       "GR",
    //       "HU",
    //       "IE",
    //       "IL",
    //       "IT",
    //       "LI",
    //       "LU",
    //       "MC",
    //       "MT",
    //       "NL",
    //       "NO",
    //       "NZ",
    //       "PL",
    //       "PT",
    //       "SE",
    //       "SG",
    //       "SI",
    //       "SM",
    //       "TR",
    //       "UM",
    //       "VA"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "jcb",
    //       "maestro",
    //       "laser",
    //       "switch"
    //    ],
    //    "regions":[  
    //       "asia_pacific",
    //       "europe",
    //       "middle_east",
    //       "north_america"
    //    ],
    //    "homepage":"http://worldpay.com",
    //    "company_name":"WorldPay"
    // },
    // {  
    //    "gateway_type":"worldpay_us",
    //    "name":"Worldpay US",
    //    "auth_modes":[  
    //       {  
    //          "auth_mode_type":"default",
    //          "name":"Default",
    //          "credentials":[  
    //             {  
    //                "name":"acctid",
    //                "label":"Acctid",
    //                "safe":true
    //             },
    //             {  
    //                "name":"subid",
    //                "label":"Subid",
    //                "safe":true
    //             },
    //             {  
    //                "name":"merchantpin",
    //                "label":"Merchantpin",
    //                "safe":false
    //             }
    //          ]
    //       }
    //    ],
    //    "characteristics":[  
    //       "purchase",
    //       "authorize",
    //       "capture",
    //       "credit",
    //       "void",
    //       "verify"
    //    ],
    //    "payment_methods":[  
    //       "credit_card",
    //       "bank_account"
    //    ],
    //    "gateway_specific_fields":[  

    //    ],
    //    "supported_countries":[  
    //       "US"
    //    ],
    //    "supported_cardtypes":[  
    //       "visa",
    //       "master",
    //       "american_express",
    //       "discover",
    //       "jcb"
    //    ],
    //    "regions":[  
    //       "north_america"
    //    ],
    //    "homepage":"http://www.worldpay.com/us",
    //    "company_name":"Worldpay US"
    // }
 ]
}

module.exports = tempData