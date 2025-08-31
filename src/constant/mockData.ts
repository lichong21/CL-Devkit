export const JSON_STR = `{
  "platform": "MegaShop",
  "version": "2.4.1",
  "last_updated": "2025-08-31T12:34:56Z",
  "stats": {
    "total_users": 158243,
    "total_products": 24756,
    "total_orders": 389211,
    "active_users_today": 8762
  },
  "users": [
    {
      "user_id": "usr_000001",
      "username": "john_doe89",
      "email": "john.doe@example.com",
      "password_hash": "$2a$10$VqFjH9Y7L3K8M2N1B5C7D8E9F0G1H2J3K4L5M6N7O8P9Q0R1S2T",
      "personal_info": {
        "first_name": "John",
        "last_name": "Doe",
        "date_of_birth": "1989-05-15",
        "gender": "male",
        "phone": "+1-555-123-4567"
      },
      "addresses": [
        {
          "address_id": "addr_000001",
          "type": "shipping",
          "street": "123 Main St",
          "city": "New York",
          "state": "NY",
          "zip_code": "10001",
          "country": "USA",
          "is_default": true
        },
        {
          "address_id": "addr_000002",
          "type": "billing",
          "street": "456 Business Ave",
          "city": "New York",
          "state": "NY",
          "zip_code": "10002",
          "country": "USA",
          "is_default": true
        }
      ],
      "payment_methods": [
        {
          "method_id": "pm_000001",
          "type": "credit_card",
          "provider": "Visa",
          "last_four": "4242",
          "expiry_date": "2027-03",
          "is_default": true
        },
        {
          "method_id": "pm_000002",
          "type": "paypal",
          "email": "john.doe.paypal@example.com",
          "is_default": false
        }
      ],
      "preferences": {
        "notifications": {
          "email": true,
          "sms": false,
          "push": true
        },
        "language": "en-US",
        "currency": "USD",
        "theme": "light"
      },
      "membership": {
        "level": "gold",
        "points": 12500,
        "join_date": "2020-03-15",
        "expiry_date": "2026-03-14"
      },
      "activity": {
        "last_login": "2025-08-30T09:23:45Z",
        "login_count": 1243,
        "wishlist_count": 18,
        "review_count": 7
      }
    },
    {
      "user_id": "usr_000002",
      "username": "jane_smith77",
      "email": "jane.smith@example.com",
      "password_hash": "$2a$10$A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X",
      "personal_info": {
        "first_name": "Jane",
        "last_name": "Smith",
        "date_of_birth": "1977-11-30",
        "gender": "female",
        "phone": "+1-555-987-6543"
      },
      "addresses": [
        {
          "address_id": "addr_000003",
          "type": "shipping",
          "street": "789 Oak Ln",
          "city": "Los Angeles",
          "state": "CA",
          "zip_code": "90001",
          "country": "USA",
          "is_default": true
        }
      ],
      "payment_methods": [
        {
          "method_id": "pm_000003",
          "type": "credit_card",
          "provider": "MasterCard",
          "last_four": "5555",
          "expiry_date": "2028-07",
          "is_default": true
        }
      ],
      "preferences": {
        "notifications": {
          "email": true,
          "sms": true,
          "push": false
        },
        "language": "en-US",
        "currency": "USD",
        "theme": "dark"
      },
      "membership": {
        "level": "silver",
        "points": 4850,
        "join_date": "2021-07-22",
        "expiry_date": "2027-07-21"
      },
      "activity": {
        "last_login": "2025-08-31T08:12:33Z",
        "login_count": 876,
        "wishlist_count": 34,
        "review_count": 12
      }
    },
    {
      "user_id": "usr_000003",
      "username": "miguel_garcia",
      "email": "miguel.garcia@example.es",
      "password_hash": "$2a$10$Z9Y8X7W6V5U4T3S2R1Q0P9O8N7M6L5K4J3I2H1G0F9E8D7C6B",
      "personal_info": {
        "first_name": "Miguel",
        "last_name": "García",
        "date_of_birth": "1993-04-22",
        "gender": "male",
        "phone": "+34-91-555-4433"
      },
      "addresses": [
        {
          "address_id": "addr_000004",
          "type": "shipping",
          "street": "Calle de la Rosa, 45",
          "city": "Madrid",
          "state": "Madrid",
          "zip_code": "28001",
          "country": "Spain",
          "is_default": true
        },
        {
          "address_id": "addr_000005",
          "type": "billing",
          "street": "Avenida de España, 123",
          "city": "Madrid",
          "state": "Madrid",
          "zip_code": "28002",
          "country": "Spain",
          "is_default": true
        }
      ],
      "payment_methods": [
        {
          "method_id": "pm_000004",
          "type": "credit_card",
          "provider": "Visa",
          "last_four": "1818",
          "expiry_date": "2026-11",
          "is_default": true
        },
        {
          "method_id": "pm_000005",
          "type": "bank_transfer",
          "bank_name": "Banco Santander",
          "account_last_four": "7890",
          "is_default": false
        }
      ],
      "preferences": {
        "notifications": {
          "email": true,
          "sms": false,
          "push": true
        },
        "language": "es-ES",
        "currency": "EUR",
        "theme": "light"
      },
      "membership": {
        "level": "bronze",
        "points": 1250,
        "join_date": "2022-01-10",
        "expiry_date": "2028-01-09"
      },
      "activity": {
        "last_login": "2025-08-30T16:45:12Z",
        "login_count": 342,
        "wishlist_count": 9,
        "review_count": 3
      }
    }
  ],
  "products": [
    {
      "product_id": "prod_000001",
      "name": "Wireless Noise-Canceling Headphones",
      "slug": "wireless-noise-canceling-headphones",
      "description": "Premium over-ear wireless headphones with active noise cancellation, 40-hour battery life, and high-fidelity sound.",
      "categories": ["electronics", "audio", "headphones"],
      "tags": ["wireless", "noise-canceling", "bluetooth", "over-ear"],
      "attributes": {
        "brand": "SoundMaster",
        "color": ["black", "white", "silver"],
        "connectivity": "Bluetooth 5.2",
        "battery_life": "40 hours",
        "weight": "250g",
        "water_resistant": false
      },
      "variants": [
        {
          "variant_id": "var_000001",
          "sku": "SM-HP-WNC-BLK-001",
          "color": "black",
          "price": 299.99,
          "compare_at_price": 349.99,
          "cost_price": 145.50,
          "stock_quantity": 127,
          "images": [
            "https://picsum.photos/id/1/800/800",
            "https://picsum.photos/id/2/800/800",
            "https://picsum.photos/id/3/800/800"
          ]
        },
        {
          "variant_id": "var_000002",
          "sku": "SM-HP-WNC-WHT-001",
          "color": "white",
          "price": 299.99,
          "compare_at_price": 349.99,
          "cost_price": 145.50,
          "stock_quantity": 89,
          "images": [
            "https://picsum.photos/id/4/800/800",
            "https://picsum.photos/id/5/800/800",
            "https://picsum.photos/id/6/800/800"
          ]
        },
        {
          "variant_id": "var_000003",
          "sku": "SM-HP-WNC-SLV-001",
          "color": "silver",
          "price": 299.99,
          "compare_at_price": 349.99,
          "cost_price": 145.50,
          "stock_quantity": 56,
          "images": [
            "https://picsum.photos/id/7/800/800",
            "https://picsum.photos/id/8/800/800",
            "https://picsum.photos/id/9/800/800"
          ]
        }
      ],
      "ratings": {
        "average": 4.7,
        "count": 1243,
        "distribution": {
          "5": 890,
          "4": 215,
          "3": 87,
          "2": 31,
          "1": 20
        }
      },
      "inventory": {
        "total_stock": 272,
        "reserved": 18,
        "available": 254,
        "reorder_threshold": 50,
        "reorder_quantity": 100
      },
      "shipping": {
        "weight_kg": 0.8,
        "dimensions_cm": {
          "length": 25,
          "width": 20,
          "height": 10
        },
        "is_free_shipping": true,
        "handling_time_days": 1
      },
      "metadata": {
        "created_at": "2023-01-15T08:30:00Z",
        "updated_at": "2025-08-20T14:22:15Z",
        "is_active": true,
        "is_featured": true,
        "view_count": 15876
      }
    },
    {
      "product_id": "prod_000002",
      "name": "Professional Digital Camera",
      "slug": "professional-digital-camera",
      "description": "Full-frame DSLR camera with 45MP resolution, 4K video recording, and advanced autofocus system. Ideal for professional photographers and videographers.",
      "categories": ["electronics", "cameras", "dslr"],
      "tags": ["camera", "dslr", "professional", "4k", "full-frame"],
      "attributes": {
        "brand": "PhotoPro",
        "megapixels": "45MP",
        "video_resolution": "4K",
        "sensor_size": "Full-frame",
        "iso_range": "100-51200",
        "weight": "750g"
      },
      "variants": [
        {
          "variant_id": "var_000004",
          "sku": "PP-DSLR-F45-BODY-001",
          "configuration": "Body only",
          "price": 2499.99,
          "compare_at_price": 2799.99,
          "cost_price": 1350.75,
          "stock_quantity": 34,
          "images": [
            "https://picsum.photos/id/10/800/800",
            "https://picsum.photos/id/11/800/800",
            "https://picsum.photos/id/12/800/800"
          ]
        },
        {
          "variant_id": "var_000005",
          "sku": "PP-DSLR-F45-KIT-001",
          "configuration": "With 24-70mm lens",
          "price": 3299.99,
          "compare_at_price": 3699.99,
          "cost_price": 1820.50,
          "stock_quantity": 19,
          "images": [
            "https://picsum.photos/id/13/800/800",
            "https://picsum.photos/id/14/800/800",
            "https://picsum.photos/id/15/800/800"
          ]
        }
      ],
      "ratings": {
        "average": 4.9,
        "count": 356,
        "distribution": {
          "5": 298,
          "4": 42,
          "3": 12,
          "2": 3,
          "1": 1
        }
      },
      "inventory": {
        "total_stock": 53,
        "reserved": 5,
        "available": 48,
        "reorder_threshold": 10,
        "reorder_quantity": 20
      },
      "shipping": {
        "weight_kg": 2.3,
        "dimensions_cm": {
          "length": 35,
          "width": 25,
          "height": 15
        },
        "is_free_shipping": false,
        "handling_time_days": 2
      },
      "metadata": {
        "created_at": "2023-05-22T10:15:00Z",
        "updated_at": "2025-08-15T09:45:30Z",
        "is_active": true,
        "is_featured": true,
        "view_count": 8762
      }
    },
    {
      "product_id": "prod_000003",
      "name": "Organic Cotton T-Shirt",
      "slug": "organic-cotton-t-shirt",
      "description": "Comfortable crew neck t-shirt made from 100% organic cotton. Ethically sourced and produced with sustainable practices.",
      "categories": ["clothing", "t-shirts", "men"],
      "tags": ["t-shirt", "organic", "cotton", "men", "casual"],
      "attributes": {
        "brand": "EcoWear",
        "material": "100% organic cotton",
        "fit": "regular",
        "sleeve_length": "short",
        "care_instructions": "Machine wash cold, tumble dry low"
      },
      "variants": [
        {
          "variant_id": "var_000006",
          "sku": "EW-TS-ORG-BLK-S-001",
          "color": "black",
          "size": "S",
          "price": 29.99,
          "compare_at_price": 34.99,
          "cost_price": 12.75,
          "stock_quantity": 156,
          "images": [
            "https://picsum.photos/id/16/800/800",
            "https://picsum.photos/id/17/800/800"
          ]
        },
        {
          "variant_id": "var_000007",
          "sku": "EW-TS-ORG-BLK-M-001",
          "color": "black",
          "size": "M",
          "price": 29.99,
          "compare_at_price": 34.99,
          "cost_price": 12.75,
          "stock_quantity": 210,
          "images": [
            "https://picsum.photos/id/16/800/800",
            "https://picsum.photos/id/17/800/800"
          ]
        },
        {
          "variant_id": "var_000008",
          "sku": "EW-TS-ORG-BLK-L-001",
          "color": "black",
          "size": "L",
          "price": 29.99,
          "compare_at_price": 34.99,
          "cost_price": 12.75,
          "stock_quantity": 187,
          "images": [
            "https://picsum.photos/id/16/800/800",
            "https://picsum.photos/id/17/800/800"
          ]
        },
        {
          "variant_id": "var_000009",
          "sku": "EW-TS-ORG-BLU-S-001",
          "color": "blue",
          "size": "S",
          "price": 29.99,
          "compare_at_price": 34.99,
          "cost_price": 12.75,
          "stock_quantity": 124,
          "images": [
            "https://picsum.photos/id/18/800/800",
            "https://picsum.photos/id/19/800/800"
          ]
        },
        {
          "variant_id": "var_000010",
          "sku": "EW-TS-ORG-BLU-M-001",
          "color": "blue",
          "size": "M",
          "price": 29.99,
          "compare_at_price": 34.99,
          "cost_price": 12.75,
          "stock_quantity": 178,
          "images": [
            "https://picsum.photos/id/18/800/800",
            "https://picsum.photos/id/19/800/800"
          ]
        }
      ],
      "ratings": {
        "average": 4.5,
        "count": 876,
        "distribution": {
          "5": 542,
          "4": 215,
          "3": 89,
          "2": 23,
          "1": 7
        }
      },
      "inventory": {
        "total_stock": 855,
        "reserved": 42,
        "available": 813,
        "reorder_threshold": 100,
        "reorder_quantity": 500
      },
      "shipping": {
        "weight_kg": 0.2,
        "dimensions_cm": {
          "length": 30,
          "width": 25,
          "height": 5
        },
        "is_free_shipping": true,
        "handling_time_days": 1
      },
      "metadata": {
        "created_at": "2022-11-05T14:30:00Z",
        "updated_at": "2025-08-28T11:15:45Z",
        "is_active": true,
        "is_featured": false,
        "view_count": 21567
      }
    }
  ],
  "orders": [
    {
      "order_id": "ord_000001",
      "user_id": "usr_000001",
      "order_number": "MS-2025-87654",
      "status": "delivered",
      "created_at": "2025-08-25T10:23:45Z",
      "updated_at": "2025-08-28T16:12:33Z",
      "items": [
        {
          "item_id": "item_000001",
          "product_id": "prod_000001",
          "variant_id": "var_000001",
          "name": "Wireless Noise-Canceling Headphones",
          "variant_details": "black",
          "sku": "SM-HP-WNC-BLK-001",
          "quantity": 1,
          "unit_price": 299.99,
          "total_price": 299.99,
          "tax_amount": 25.20,
          "discount_amount": 30.00
        },
        {
          "item_id": "item_000002",
          "product_id": "prod_000003",
          "variant_id": "var_000007",
          "name": "Organic Cotton T-Shirt",
          "variant_details": "black, M",
          "sku": "EW-TS-ORG-BLK-M-001",
          "quantity": 2,
          "unit_price": 29.99,
          "total_price": 59.98,
          "tax_amount": 5.04,
          "discount_amount": 0.00
        }
      ],
      "billing": {
        "address_id": "addr_000002",
        "payment_method_id": "pm_000001",
        "payment_status": "paid",
        "payment_date": "2025-08-25T10:24:12Z",
        "transaction_id": "txn_987654321"
      },
      "shipping": {
        "address_id": "addr_000001",
        "method": "Express",
        "carrier": "Fast Delivery Inc",
        "tracking_number": "FDX-123456789",
        "estimated_delivery": "2025-08-28",
        "actual_delivery": "2025-08-28T15:45:22Z",
        "cost": 9.99
      },
      "summary": {
        "subtotal": 359.97,
        "tax": 30.24,
        "shipping_cost": 9.99,
        "discounts": 30.00,
        "total": 370.20
      },
      "notes": "Please leave the package at the front door if no one answers."
    },
    {
      "order_id": "ord_000002",
      "user_id": "usr_000002",
      "order_number": "MS-2025-87655",
      "status": "shipped",
      "created_at": "2025-08-27T15:42:18Z",
      "updated_at": "2025-08-29T09:30:15Z",
      "items": [
        {
          "item_id": "item_000003",
          "product_id": "prod_000002",
          "variant_id": "var_000005",
          "name": "Professional Digital Camera",
          "variant_details": "With 24-70mm lens",
          "sku": "PP-DSLR-F45-KIT-001",
          "quantity": 1,
          "unit_price": 3299.99,
          "total_price": 3299.99,
          "tax_amount": 277.20,
          "discount_amount": 330.00
        }
      ],
      "billing": {
        "address_id": "addr_000003",
        "payment_method_id": "pm_000003",
        "payment_status": "paid",
        "payment_date": "2025-08-27T15:43:05Z",
        "transaction_id": "txn_987654322"
      },
      "shipping": {
        "address_id": "addr_000003",
        "method": "Priority",
        "carrier": "Secure Shipping Co",
        "tracking_number": "SSC-987654321",
        "estimated_delivery": "2025-09-02",
        "actual_delivery": null,
        "cost": 24.99
      },
      "summary": {
        "subtotal": 3299.99,
        "tax": 277.20,
        "shipping_cost": 24.99,
        "discounts": 330.00,
        "total": 3272.18
      },
      "notes": "Signature required upon delivery."
    },
    {
      "order_id": "ord_000003",
      "user_id": "usr_000003",
      "order_number": "MS-2025-87656",
      "status": "processing",
      "created_at": "2025-08-31T08:15:33Z",
      "updated_at": "2025-08-31T08:15:33Z",
      "items": [
        {
          "item_id": "item_000004",
          "product_id": "prod_000003",
          "variant_id": "var_000009",
          "name": "Organic Cotton T-Shirt",
          "variant_details": "blue, S",
          "sku": "EW-TS-ORG-BLU-S-001",
          "quantity": 3,
          "unit_price": 29.99,
          "total_price": 89.97,
          "tax_amount": 7.56,
          "discount_amount": 9.00
        },
        {
          "item_id": "item_000005",
          "product_id": "prod_000003",
          "variant_id": "var_000010",
          "name": "Organic Cotton T-Shirt",
          "variant_details": "blue, M",
          "sku": "EW-TS-ORG-BLU-M-001",
          "quantity": 2,
          "unit_price": 29.99,
          "total_price": 59.98,
          "tax_amount": 5.04,
          "discount_amount": 6.00
        }
      ],
      "billing": {
        "address_id": "addr_000005",
        "payment_method_id": "pm_000004",
        "payment_status": "paid",
        "payment_date": "2025-08-31T08:16:05Z",
        "transaction_id": "txn_987654323"
      },
      "shipping": {
        "address_id": "addr_000004",
        "method": "Standard",
        "carrier": "European Delivery Service",
        "tracking_number": null,
        "estimated_delivery": "2025-09-05",
        "actual_delivery": null,
        "cost": 12.50
      },
      "summary": {
        "subtotal": 149.95,
        "tax": 12.60,
        "shipping_cost": 12.50,
        "discounts": 15.00,
        "total": 159.05
      },
      "notes": "Please use eco-friendly packaging when possible."
    }
  ],
  "promotions": [
    {
      "promo_id": "promo_000001",
      "code": "SUMMER20",
      "type": "percentage",
      "value": 20,
      "description": "20% off all summer collection items",
      "start_date": "2025-06-01T00:00:00Z",
      "end_date": "2025-08-31T23:59:59Z",
      "applicable_categories": ["clothing", "accessories"],
      "excluded_products": ["prod_000002"],
      "usage_limit": 1000,
      "usage_count": 876,
      "per_user_limit": 2,
      "minimum_order_value": 50.00,
      "is_active": true
    },
    {
      "promo_id": "promo_000002",
      "code": "NEWCLIENT10",
      "type": "percentage",
      "value": 10,
      "description": "10% off for new customers on their first order",
      "start_date": "2025-01-01T00:00:00Z",
      "end_date": "2025-12-31T23:59:59Z",
      "applicable_categories": ["all"],
      "excluded_products": [],
      "usage_limit": null,
      "usage_count": 4532,
      "per_user_limit": 1,
      "minimum_order_value": 30.00,
      "is_active": true
    },
    {
      "promo_id": "promo_000003",
      "code": "FREESHIP",
      "type": "free_shipping",
      "value": null,
      "description": "Free standard shipping on orders over $100",
      "start_date": "2025-08-01T00:00:00Z",
      "end_date": "2025-09-30T23:59:59Z",
      "applicable_categories": ["all"],
      "excluded_products": [],
      "usage_limit": null,
      "usage_count": 12543,
      "per_user_limit": null,
      "minimum_order_value": 100.00,
      "is_active": true
    }
  ],
  "reviews": [
    {
      "review_id": "rev_000001",
      "product_id": "prod_000001",
      "user_id": "usr_000002",
      "rating": 5,
      "title": "Absolutely fantastic headphones!",
      "content": "These headphones exceed all my expectations. The noise cancellation is incredible, and the sound quality is outstanding. Battery life is exactly as advertised. Worth every penny!",
      "created_at": "2025-08-15T14:30:22Z",
      "updated_at": "2025-08-15T14:30:22Z",
      "is_verified_purchase": true,
      "helpful_votes": 42,
      "reply": {
        "content": "Thank you for your wonderful review! We're thrilled to hear you're enjoying your new headphones. - The SoundMaster Team",
        "created_at": "2025-08-16T09:15:33Z"
      }
    },
    {
      "review_id": "rev_000002",
      "product_id": "prod_000002",
      "user_id": "usr_000001",
      "rating": 4,
      "title": "Excellent camera, minor issues with software",
      "content": "The camera body is exceptional with amazing image quality. However, I've experienced some minor glitches with the autofocus software that require a firmware update. Overall, very satisfied.",
      "created_at": "2025-08-20T11:45:10Z",
      "updated_at": "2025-08-21T08:22:15Z",
      "is_verified_purchase": true,
      "helpful_votes": 18,
      "reply": {
        "content": "Thank you for your feedback. We're aware of the software issues and a new firmware update will be released next week. Please contact our support team if you need assistance. - The PhotoPro Team",
        "created_at": "2025-08-20T15:30:45Z"
      }
    },
    {
      "review_id": "rev_000003",
      "product_id": "prod_000003",
      "user_id": "usr_000003",
      "rating": 5,
      "title": "Comfortable and eco-friendly",
      "content": "These t-shirts are incredibly comfortable and I love that they're made from organic cotton. The fit is perfect and the fabric quality is excellent. Will definitely buy more!",
      "created_at": "2025-08-27T16:20:33Z",
      "updated_at": "2025-08-27T16:20:33Z",
      "is_verified_purchase": true,
      "helpful_votes": 7,
      "reply": null
    }
  ],
  "categories": [
    {
      "category_id": "cat_000001",
      "name": "Electronics",
      "slug": "electronics",
      "description": "Electronic devices and accessories",
      "parent_id": null,
      "level": 1,
      "image_url": "https://picsum.photos/id/20/800/400",
      "product_count": 8765,
      "is_active": true
    },
    {
      "category_id": "cat_000002",
      "name": "Audio",
      "slug": "audio",
      "description": "Headphones, speakers and audio equipment",
      "parent_id": "cat_000001",
      "level": 2,
      "image_url": "https://picsum.photos/id/21/800/400",
      "product_count": 1243,
      "is_active": true
    },
    {
      "category_id": "cat_000003",
      "name": "Cameras",
      "slug": "cameras",
      "description": "Digital cameras and photography equipment",
      "parent_id": "cat_000001",
      "level": 2,
      "image_url": "https://picsum.photos/id/22/800/400",
      "product_count": 876,
      "is_active": true
    },
    {
      "category_id": "cat_000004",
      "name": "Clothing",
      "slug": "clothing",
      "description": "Apparel for men, women and children",
      "parent_id": null,
      "level": 1,
      "image_url": "https://picsum.photos/id/23/800/400",
      "product_count": 12543,
      "is_active": true
    },
    {
      "category_id": "cat_000005",
      "name": "Men",
      "slug": "men",
      "description": "Clothing for men",
      "parent_id": "cat_000004",
      "level": 2,
      "image_url": "https://picsum.photos/id/24/800/400",
      "product_count": 5678,
      "is_active": true
    }
  ]
}
`

