const drinks = [
  { id: 'd001', name: '珍珠奶茶', price: 12 },
  { id: 'd002', name: '冰柠檬水', price: 8 },
  { id: 'd003', name: '草莓冰沙', price: 15 },
  { id: 'd004', name: '芒果西米露', price: 16 },
  { id: 'd005', name: '抹茶拿铁', price: 14 },
  { id: 'd006', name: '原味冰淇淋', price: 6 },
  { id: 'd007', name: '西瓜汁', price: 10 },
  { id: 'd008', name: '百香果苏打', price: 13 },
  { id: 'd009', name: '红豆冰粉', price: 9 },
  { id: 'd010', name: '椰汁仙草冻', price: 11 }
];

const orders = [
  {
    "id": "ORD00001",
    "time": "2026-06-14 09:26",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      }
    ],
    "totalAmount": 72
  },
  {
    "id": "ORD00002",
    "time": "2026-06-14 09:39",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 12
  },
  {
    "id": "ORD00003",
    "time": "2026-06-14 10:11",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      }
    ],
    "totalAmount": 26
  },
  {
    "id": "ORD00004",
    "time": "2026-06-14 10:14",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 88
  },
  {
    "id": "ORD00005",
    "time": "2026-06-14 10:46",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00006",
    "time": "2026-06-14 11:07",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 44
  },
  {
    "id": "ORD00007",
    "time": "2026-06-14 11:34",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      }
    ],
    "totalAmount": 74
  },
  {
    "id": "ORD00008",
    "time": "2026-06-14 11:36",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      }
    ],
    "totalAmount": 62
  },
  {
    "id": "ORD00009",
    "time": "2026-06-14 11:46",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 55
  },
  {
    "id": "ORD00010",
    "time": "2026-06-14 12:07",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 52
  },
  {
    "id": "ORD00011",
    "time": "2026-06-14 12:08",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      }
    ],
    "totalAmount": 30
  },
  {
    "id": "ORD00012",
    "time": "2026-06-14 12:13",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      }
    ],
    "totalAmount": 22
  },
  {
    "id": "ORD00013",
    "time": "2026-06-14 12:44",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 43
  },
  {
    "id": "ORD00014",
    "time": "2026-06-14 13:18",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00015",
    "time": "2026-06-14 13:24",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 30
  },
  {
    "id": "ORD00016",
    "time": "2026-06-14 14:47",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 58
  },
  {
    "id": "ORD00017",
    "time": "2026-06-14 14:53",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 16
  },
  {
    "id": "ORD00018",
    "time": "2026-06-14 15:27",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 45
  },
  {
    "id": "ORD00019",
    "time": "2026-06-14 15:27",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      }
    ],
    "totalAmount": 26
  },
  {
    "id": "ORD00020",
    "time": "2026-06-14 15:35",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 13
  },
  {
    "id": "ORD00021",
    "time": "2026-06-14 15:38",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 8
  },
  {
    "id": "ORD00022",
    "time": "2026-06-14 15:47",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      }
    ],
    "totalAmount": 38
  },
  {
    "id": "ORD00023",
    "time": "2026-06-14 15:58",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 20
  },
  {
    "id": "ORD00024",
    "time": "2026-06-14 16:07",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 59
  },
  {
    "id": "ORD00025",
    "time": "2026-06-14 16:35",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 53
  },
  {
    "id": "ORD00026",
    "time": "2026-06-14 16:44",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      }
    ],
    "totalAmount": 11
  },
  {
    "id": "ORD00027",
    "time": "2026-06-14 17:03",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 63
  },
  {
    "id": "ORD00028",
    "time": "2026-06-14 17:06",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 21
  },
  {
    "id": "ORD00029",
    "time": "2026-06-14 17:13",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 23
  },
  {
    "id": "ORD00030",
    "time": "2026-06-14 17:23",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 28
  },
  {
    "id": "ORD00031",
    "time": "2026-06-14 18:01",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 38
  },
  {
    "id": "ORD00032",
    "time": "2026-06-14 18:20",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      }
    ],
    "totalAmount": 50
  },
  {
    "id": "ORD00033",
    "time": "2026-06-14 18:21",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 62
  },
  {
    "id": "ORD00034",
    "time": "2026-06-14 18:45",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 18
  },
  {
    "id": "ORD00035",
    "time": "2026-06-14 18:51",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 31
  },
  {
    "id": "ORD00036",
    "time": "2026-06-14 19:43",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 34
  },
  {
    "id": "ORD00037",
    "time": "2026-06-14 19:44",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 20
  },
  {
    "id": "ORD00038",
    "time": "2026-06-14 20:09",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 44
  },
  {
    "id": "ORD00039",
    "time": "2026-06-14 20:13",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 46
  },
  {
    "id": "ORD00040",
    "time": "2026-06-14 20:14",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 14
  },
  {
    "id": "ORD00041",
    "time": "2026-06-14 20:28",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      }
    ],
    "totalAmount": 49
  },
  {
    "id": "ORD00042",
    "time": "2026-06-14 20:32",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 38
  },
  {
    "id": "ORD00043",
    "time": "2026-06-15 09:07",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 14
  },
  {
    "id": "ORD00044",
    "time": "2026-06-15 09:16",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00045",
    "time": "2026-06-15 09:53",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      }
    ],
    "totalAmount": 11
  },
  {
    "id": "ORD00046",
    "time": "2026-06-15 10:14",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 24
  },
  {
    "id": "ORD00047",
    "time": "2026-06-15 10:30",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 74
  },
  {
    "id": "ORD00048",
    "time": "2026-06-15 10:41",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 13
  },
  {
    "id": "ORD00049",
    "time": "2026-06-15 10:52",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 75
  },
  {
    "id": "ORD00050",
    "time": "2026-06-15 10:57",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00051",
    "time": "2026-06-15 11:12",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 27
  },
  {
    "id": "ORD00052",
    "time": "2026-06-15 11:46",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 39
  },
  {
    "id": "ORD00053",
    "time": "2026-06-15 12:05",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 25
  },
  {
    "id": "ORD00054",
    "time": "2026-06-15 12:08",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      }
    ],
    "totalAmount": 54
  },
  {
    "id": "ORD00055",
    "time": "2026-06-15 12:25",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      }
    ],
    "totalAmount": 48
  },
  {
    "id": "ORD00056",
    "time": "2026-06-15 12:39",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 29
  },
  {
    "id": "ORD00057",
    "time": "2026-06-15 12:54",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      }
    ],
    "totalAmount": 52
  },
  {
    "id": "ORD00058",
    "time": "2026-06-15 13:23",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 23
  },
  {
    "id": "ORD00059",
    "time": "2026-06-15 14:05",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      }
    ],
    "totalAmount": 58
  },
  {
    "id": "ORD00060",
    "time": "2026-06-15 14:44",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00061",
    "time": "2026-06-15 14:49",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 47
  },
  {
    "id": "ORD00062",
    "time": "2026-06-15 15:06",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      }
    ],
    "totalAmount": 29
  },
  {
    "id": "ORD00063",
    "time": "2026-06-15 15:18",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 40
  },
  {
    "id": "ORD00064",
    "time": "2026-06-15 15:23",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      }
    ],
    "totalAmount": 48
  },
  {
    "id": "ORD00065",
    "time": "2026-06-15 15:32",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 12
  },
  {
    "id": "ORD00066",
    "time": "2026-06-15 15:33",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 25
  },
  {
    "id": "ORD00067",
    "time": "2026-06-15 15:49",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 48
  },
  {
    "id": "ORD00068",
    "time": "2026-06-15 15:55",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      }
    ],
    "totalAmount": 69
  },
  {
    "id": "ORD00069",
    "time": "2026-06-15 16:01",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 28
  },
  {
    "id": "ORD00070",
    "time": "2026-06-15 16:10",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 84
  },
  {
    "id": "ORD00071",
    "time": "2026-06-15 16:17",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 44
  },
  {
    "id": "ORD00072",
    "time": "2026-06-15 16:36",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      }
    ],
    "totalAmount": 48
  },
  {
    "id": "ORD00073",
    "time": "2026-06-15 17:04",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      }
    ],
    "totalAmount": 19
  },
  {
    "id": "ORD00074",
    "time": "2026-06-15 17:41",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      }
    ],
    "totalAmount": 37
  },
  {
    "id": "ORD00075",
    "time": "2026-06-15 18:48",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 76
  },
  {
    "id": "ORD00076",
    "time": "2026-06-15 19:11",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 33
  },
  {
    "id": "ORD00077",
    "time": "2026-06-15 19:11",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 14
  },
  {
    "id": "ORD00078",
    "time": "2026-06-15 19:14",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 51
  },
  {
    "id": "ORD00079",
    "time": "2026-06-15 19:39",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 52
  },
  {
    "id": "ORD00080",
    "time": "2026-06-15 19:40",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 56
  },
  {
    "id": "ORD00081",
    "time": "2026-06-15 19:44",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 6
  },
  {
    "id": "ORD00082",
    "time": "2026-06-15 19:53",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 20
  },
  {
    "id": "ORD00083",
    "time": "2026-06-15 20:15",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      }
    ],
    "totalAmount": 30
  },
  {
    "id": "ORD00084",
    "time": "2026-06-15 20:17",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 19
  },
  {
    "id": "ORD00085",
    "time": "2026-06-15 20:24",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 13
  },
  {
    "id": "ORD00086",
    "time": "2026-06-15 20:30",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 6
  },
  {
    "id": "ORD00087",
    "time": "2026-06-15 20:45",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 26
  },
  {
    "id": "ORD00088",
    "time": "2026-06-16 09:20",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 34
  },
  {
    "id": "ORD00089",
    "time": "2026-06-16 09:23",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 24
  },
  {
    "id": "ORD00090",
    "time": "2026-06-16 09:49",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      }
    ],
    "totalAmount": 59
  },
  {
    "id": "ORD00091",
    "time": "2026-06-16 09:54",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      }
    ],
    "totalAmount": 12
  },
  {
    "id": "ORD00092",
    "time": "2026-06-16 10:29",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 16
  },
  {
    "id": "ORD00093",
    "time": "2026-06-16 10:52",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 46
  },
  {
    "id": "ORD00094",
    "time": "2026-06-16 11:01",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 34
  },
  {
    "id": "ORD00095",
    "time": "2026-06-16 11:14",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 38
  },
  {
    "id": "ORD00096",
    "time": "2026-06-16 11:15",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 26
  },
  {
    "id": "ORD00097",
    "time": "2026-06-16 11:28",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 31
  },
  {
    "id": "ORD00098",
    "time": "2026-06-16 11:36",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 35
  },
  {
    "id": "ORD00099",
    "time": "2026-06-16 12:23",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 58
  },
  {
    "id": "ORD00100",
    "time": "2026-06-16 12:30",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      }
    ],
    "totalAmount": 41
  },
  {
    "id": "ORD00101",
    "time": "2026-06-16 12:41",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 9
  },
  {
    "id": "ORD00102",
    "time": "2026-06-16 13:43",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      }
    ],
    "totalAmount": 16
  },
  {
    "id": "ORD00103",
    "time": "2026-06-16 13:47",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 39
  },
  {
    "id": "ORD00104",
    "time": "2026-06-16 13:58",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 28
  },
  {
    "id": "ORD00105",
    "time": "2026-06-16 14:16",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 51
  },
  {
    "id": "ORD00106",
    "time": "2026-06-16 14:21",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 18
  },
  {
    "id": "ORD00107",
    "time": "2026-06-16 15:06",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      }
    ],
    "totalAmount": 16
  },
  {
    "id": "ORD00108",
    "time": "2026-06-16 15:14",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 42
  },
  {
    "id": "ORD00109",
    "time": "2026-06-16 15:23",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      }
    ],
    "totalAmount": 74
  },
  {
    "id": "ORD00110",
    "time": "2026-06-16 15:35",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00111",
    "time": "2026-06-16 15:39",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 48
  },
  {
    "id": "ORD00112",
    "time": "2026-06-16 15:49",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 12
  },
  {
    "id": "ORD00113",
    "time": "2026-06-16 15:58",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 24
  },
  {
    "id": "ORD00114",
    "time": "2026-06-16 16:11",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 86
  },
  {
    "id": "ORD00115",
    "time": "2026-06-16 16:13",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 50
  },
  {
    "id": "ORD00116",
    "time": "2026-06-16 16:18",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      }
    ],
    "totalAmount": 41
  },
  {
    "id": "ORD00117",
    "time": "2026-06-16 16:33",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 48
  },
  {
    "id": "ORD00118",
    "time": "2026-06-16 16:42",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      }
    ],
    "totalAmount": 11
  },
  {
    "id": "ORD00119",
    "time": "2026-06-16 16:46",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      }
    ],
    "totalAmount": 58
  },
  {
    "id": "ORD00120",
    "time": "2026-06-16 17:26",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 35
  },
  {
    "id": "ORD00121",
    "time": "2026-06-16 17:34",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 39
  },
  {
    "id": "ORD00122",
    "time": "2026-06-16 17:38",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      }
    ],
    "totalAmount": 54
  },
  {
    "id": "ORD00123",
    "time": "2026-06-16 18:25",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 68
  },
  {
    "id": "ORD00124",
    "time": "2026-06-16 18:25",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      }
    ],
    "totalAmount": 37
  },
  {
    "id": "ORD00125",
    "time": "2026-06-16 18:40",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      }
    ],
    "totalAmount": 38
  },
  {
    "id": "ORD00126",
    "time": "2026-06-16 19:11",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      }
    ],
    "totalAmount": 33
  },
  {
    "id": "ORD00127",
    "time": "2026-06-16 19:21",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      }
    ],
    "totalAmount": 60
  },
  {
    "id": "ORD00128",
    "time": "2026-06-16 19:26",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 14
  },
  {
    "id": "ORD00129",
    "time": "2026-06-16 19:34",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      }
    ],
    "totalAmount": 67
  },
  {
    "id": "ORD00130",
    "time": "2026-06-16 19:47",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      }
    ],
    "totalAmount": 22
  },
  {
    "id": "ORD00131",
    "time": "2026-06-16 20:23",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 66
  },
  {
    "id": "ORD00132",
    "time": "2026-06-16 20:40",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 64
  },
  {
    "id": "ORD00133",
    "time": "2026-06-16 20:44",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 20
  },
  {
    "id": "ORD00134",
    "time": "2026-06-16 20:58",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 18
  },
  {
    "id": "ORD00135",
    "time": "2026-06-17 09:00",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      }
    ],
    "totalAmount": 47
  },
  {
    "id": "ORD00136",
    "time": "2026-06-17 09:03",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 25
  },
  {
    "id": "ORD00137",
    "time": "2026-06-17 09:34",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 50
  },
  {
    "id": "ORD00138",
    "time": "2026-06-17 09:41",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 31
  },
  {
    "id": "ORD00139",
    "time": "2026-06-17 09:44",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      }
    ],
    "totalAmount": 35
  },
  {
    "id": "ORD00140",
    "time": "2026-06-17 09:47",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 66
  },
  {
    "id": "ORD00141",
    "time": "2026-06-17 09:55",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 9
  },
  {
    "id": "ORD00142",
    "time": "2026-06-17 10:03",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00143",
    "time": "2026-06-17 10:27",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 30
  },
  {
    "id": "ORD00144",
    "time": "2026-06-17 11:48",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      }
    ],
    "totalAmount": 22
  },
  {
    "id": "ORD00145",
    "time": "2026-06-17 12:06",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 28
  },
  {
    "id": "ORD00146",
    "time": "2026-06-17 12:50",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 53
  },
  {
    "id": "ORD00147",
    "time": "2026-06-17 12:56",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      }
    ],
    "totalAmount": 12
  },
  {
    "id": "ORD00148",
    "time": "2026-06-17 12:58",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 8
  },
  {
    "id": "ORD00149",
    "time": "2026-06-17 13:10",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 72
  },
  {
    "id": "ORD00150",
    "time": "2026-06-17 13:13",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 50
  },
  {
    "id": "ORD00151",
    "time": "2026-06-17 13:27",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 19
  },
  {
    "id": "ORD00152",
    "time": "2026-06-17 13:34",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 24
  },
  {
    "id": "ORD00153",
    "time": "2026-06-17 13:40",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 18
  },
  {
    "id": "ORD00154",
    "time": "2026-06-17 13:41",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 56
  },
  {
    "id": "ORD00155",
    "time": "2026-06-17 13:45",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 13
  },
  {
    "id": "ORD00156",
    "time": "2026-06-17 13:54",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 46
  },
  {
    "id": "ORD00157",
    "time": "2026-06-17 14:16",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      }
    ],
    "totalAmount": 26
  },
  {
    "id": "ORD00158",
    "time": "2026-06-17 14:56",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 62
  },
  {
    "id": "ORD00159",
    "time": "2026-06-17 15:15",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 48
  },
  {
    "id": "ORD00160",
    "time": "2026-06-17 15:52",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00161",
    "time": "2026-06-17 16:01",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      }
    ],
    "totalAmount": 63
  },
  {
    "id": "ORD00162",
    "time": "2026-06-17 16:29",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00163",
    "time": "2026-06-17 16:51",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 42
  },
  {
    "id": "ORD00164",
    "time": "2026-06-17 17:36",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 64
  },
  {
    "id": "ORD00165",
    "time": "2026-06-17 17:46",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 23
  },
  {
    "id": "ORD00166",
    "time": "2026-06-17 17:51",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 14
  },
  {
    "id": "ORD00167",
    "time": "2026-06-17 18:06",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      }
    ],
    "totalAmount": 26
  },
  {
    "id": "ORD00168",
    "time": "2026-06-17 18:12",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 58
  },
  {
    "id": "ORD00169",
    "time": "2026-06-17 18:13",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 12
  },
  {
    "id": "ORD00170",
    "time": "2026-06-17 18:51",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 46
  },
  {
    "id": "ORD00171",
    "time": "2026-06-17 19:15",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 6
  },
  {
    "id": "ORD00172",
    "time": "2026-06-17 19:49",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 20
  },
  {
    "id": "ORD00173",
    "time": "2026-06-17 19:54",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 16
  },
  {
    "id": "ORD00174",
    "time": "2026-06-17 20:50",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 24
  },
  {
    "id": "ORD00175",
    "time": "2026-06-17 20:59",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      }
    ],
    "totalAmount": 16
  },
  {
    "id": "ORD00176",
    "time": "2026-06-18 09:06",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      }
    ],
    "totalAmount": 10
  },
  {
    "id": "ORD00177",
    "time": "2026-06-18 09:28",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 36
  },
  {
    "id": "ORD00178",
    "time": "2026-06-18 09:46",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      }
    ],
    "totalAmount": 76
  },
  {
    "id": "ORD00179",
    "time": "2026-06-18 09:57",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 36
  },
  {
    "id": "ORD00180",
    "time": "2026-06-18 10:17",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      }
    ],
    "totalAmount": 16
  },
  {
    "id": "ORD00181",
    "time": "2026-06-18 10:23",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 33
  },
  {
    "id": "ORD00182",
    "time": "2026-06-18 10:36",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 50
  },
  {
    "id": "ORD00183",
    "time": "2026-06-18 10:42",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      }
    ],
    "totalAmount": 23
  },
  {
    "id": "ORD00184",
    "time": "2026-06-18 10:42",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 6
  },
  {
    "id": "ORD00185",
    "time": "2026-06-18 10:46",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 46
  },
  {
    "id": "ORD00186",
    "time": "2026-06-18 11:09",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 48
  },
  {
    "id": "ORD00187",
    "time": "2026-06-18 11:49",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 28
  },
  {
    "id": "ORD00188",
    "time": "2026-06-18 11:54",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 14
  },
  {
    "id": "ORD00189",
    "time": "2026-06-18 12:02",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      }
    ],
    "totalAmount": 27
  },
  {
    "id": "ORD00190",
    "time": "2026-06-18 12:05",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00191",
    "time": "2026-06-18 12:13",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 14
  },
  {
    "id": "ORD00192",
    "time": "2026-06-18 13:15",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 18
  },
  {
    "id": "ORD00193",
    "time": "2026-06-18 13:37",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      }
    ],
    "totalAmount": 42
  },
  {
    "id": "ORD00194",
    "time": "2026-06-18 13:39",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 57
  },
  {
    "id": "ORD00195",
    "time": "2026-06-18 13:56",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 36
  },
  {
    "id": "ORD00196",
    "time": "2026-06-18 14:01",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 8
  },
  {
    "id": "ORD00197",
    "time": "2026-06-18 14:15",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 68
  },
  {
    "id": "ORD00198",
    "time": "2026-06-18 14:56",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 13
  },
  {
    "id": "ORD00199",
    "time": "2026-06-18 15:05",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 14
  },
  {
    "id": "ORD00200",
    "time": "2026-06-18 15:28",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 34
  },
  {
    "id": "ORD00201",
    "time": "2026-06-18 15:39",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 49
  },
  {
    "id": "ORD00202",
    "time": "2026-06-18 16:37",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      }
    ],
    "totalAmount": 55
  },
  {
    "id": "ORD00203",
    "time": "2026-06-18 16:56",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 59
  },
  {
    "id": "ORD00204",
    "time": "2026-06-18 17:07",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 37
  },
  {
    "id": "ORD00205",
    "time": "2026-06-18 17:35",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 33
  },
  {
    "id": "ORD00206",
    "time": "2026-06-18 17:44",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 74
  },
  {
    "id": "ORD00207",
    "time": "2026-06-18 17:49",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 14
  },
  {
    "id": "ORD00208",
    "time": "2026-06-18 17:54",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00209",
    "time": "2026-06-18 18:22",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 29
  },
  {
    "id": "ORD00210",
    "time": "2026-06-18 18:32",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 16
  },
  {
    "id": "ORD00211",
    "time": "2026-06-18 18:48",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      }
    ],
    "totalAmount": 46
  },
  {
    "id": "ORD00212",
    "time": "2026-06-18 19:27",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 15
  },
  {
    "id": "ORD00213",
    "time": "2026-06-18 19:49",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      }
    ],
    "totalAmount": 60
  },
  {
    "id": "ORD00214",
    "time": "2026-06-18 20:21",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 21
  },
  {
    "id": "ORD00215",
    "time": "2026-06-18 20:27",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 36
  },
  {
    "id": "ORD00216",
    "time": "2026-06-18 20:58",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 52
  },
  {
    "id": "ORD00217",
    "time": "2026-06-19 09:15",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      }
    ],
    "totalAmount": 40
  },
  {
    "id": "ORD00218",
    "time": "2026-06-19 09:20",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00219",
    "time": "2026-06-19 09:22",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      }
    ],
    "totalAmount": 44
  },
  {
    "id": "ORD00220",
    "time": "2026-06-19 09:30",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 29
  },
  {
    "id": "ORD00221",
    "time": "2026-06-19 09:46",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 55
  },
  {
    "id": "ORD00222",
    "time": "2026-06-19 09:48",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 52
  },
  {
    "id": "ORD00223",
    "time": "2026-06-19 10:06",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 24
  },
  {
    "id": "ORD00224",
    "time": "2026-06-19 11:08",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 13
  },
  {
    "id": "ORD00225",
    "time": "2026-06-19 11:27",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 30
  },
  {
    "id": "ORD00226",
    "time": "2026-06-19 11:37",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 14
  },
  {
    "id": "ORD00227",
    "time": "2026-06-19 11:55",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      }
    ],
    "totalAmount": 22
  },
  {
    "id": "ORD00228",
    "time": "2026-06-19 11:59",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 9
  },
  {
    "id": "ORD00229",
    "time": "2026-06-19 12:04",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 50
  },
  {
    "id": "ORD00230",
    "time": "2026-06-19 12:39",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 25
  },
  {
    "id": "ORD00231",
    "time": "2026-06-19 12:41",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 40
  },
  {
    "id": "ORD00232",
    "time": "2026-06-19 12:41",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 19
  },
  {
    "id": "ORD00233",
    "time": "2026-06-19 12:46",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 20
  },
  {
    "id": "ORD00234",
    "time": "2026-06-19 12:48",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 6
  },
  {
    "id": "ORD00235",
    "time": "2026-06-19 13:24",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 34
  },
  {
    "id": "ORD00236",
    "time": "2026-06-19 13:26",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 35
  },
  {
    "id": "ORD00237",
    "time": "2026-06-19 13:34",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      }
    ],
    "totalAmount": 10
  },
  {
    "id": "ORD00238",
    "time": "2026-06-19 13:35",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      }
    ],
    "totalAmount": 22
  },
  {
    "id": "ORD00239",
    "time": "2026-06-19 13:36",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 28
  },
  {
    "id": "ORD00240",
    "time": "2026-06-19 13:40",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 8
  },
  {
    "id": "ORD00241",
    "time": "2026-06-19 14:26",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      }
    ],
    "totalAmount": 37
  },
  {
    "id": "ORD00242",
    "time": "2026-06-19 14:51",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 30
  },
  {
    "id": "ORD00243",
    "time": "2026-06-19 15:06",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 14
  },
  {
    "id": "ORD00244",
    "time": "2026-06-19 15:26",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 36
  },
  {
    "id": "ORD00245",
    "time": "2026-06-19 15:29",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 30
  },
  {
    "id": "ORD00246",
    "time": "2026-06-19 15:49",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 60
  },
  {
    "id": "ORD00247",
    "time": "2026-06-19 15:59",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 30
  },
  {
    "id": "ORD00248",
    "time": "2026-06-19 16:28",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 28
  },
  {
    "id": "ORD00249",
    "time": "2026-06-19 16:47",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 21
  },
  {
    "id": "ORD00250",
    "time": "2026-06-19 16:50",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 71
  },
  {
    "id": "ORD00251",
    "time": "2026-06-19 16:51",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 20
  },
  {
    "id": "ORD00252",
    "time": "2026-06-19 16:52",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 66
  },
  {
    "id": "ORD00253",
    "time": "2026-06-19 17:04",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 24
  },
  {
    "id": "ORD00254",
    "time": "2026-06-19 17:08",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 18
  },
  {
    "id": "ORD00255",
    "time": "2026-06-19 17:47",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 38
  },
  {
    "id": "ORD00256",
    "time": "2026-06-19 18:01",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      }
    ],
    "totalAmount": 33
  },
  {
    "id": "ORD00257",
    "time": "2026-06-19 18:10",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 12
  },
  {
    "id": "ORD00258",
    "time": "2026-06-19 18:46",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      }
    ],
    "totalAmount": 34
  },
  {
    "id": "ORD00259",
    "time": "2026-06-19 19:30",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 2
      }
    ],
    "totalAmount": 16
  },
  {
    "id": "ORD00260",
    "time": "2026-06-19 19:45",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 28
  },
  {
    "id": "ORD00261",
    "time": "2026-06-19 20:09",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 78
  },
  {
    "id": "ORD00262",
    "time": "2026-06-19 20:40",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      }
    ],
    "totalAmount": 42
  },
  {
    "id": "ORD00263",
    "time": "2026-06-19 20:48",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 16
  },
  {
    "id": "ORD00264",
    "time": "2026-06-19 20:51",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 19
  },
  {
    "id": "ORD00265",
    "time": "2026-06-19 20:54",
    "items": [
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 24
  },
  {
    "id": "ORD00266",
    "time": "2026-06-20 09:18",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      }
    ],
    "totalAmount": 55
  },
  {
    "id": "ORD00267",
    "time": "2026-06-20 09:34",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 18
  },
  {
    "id": "ORD00268",
    "time": "2026-06-20 09:43",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 37
  },
  {
    "id": "ORD00269",
    "time": "2026-06-20 10:46",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 9
  },
  {
    "id": "ORD00270",
    "time": "2026-06-20 11:05",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 6
  },
  {
    "id": "ORD00271",
    "time": "2026-06-20 11:08",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      }
    ],
    "totalAmount": 33
  },
  {
    "id": "ORD00272",
    "time": "2026-06-20 11:09",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 8
  },
  {
    "id": "ORD00273",
    "time": "2026-06-20 11:31",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 26
  },
  {
    "id": "ORD00274",
    "time": "2026-06-20 11:37",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 8
  },
  {
    "id": "ORD00275",
    "time": "2026-06-20 11:51",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 27
  },
  {
    "id": "ORD00276",
    "time": "2026-06-20 12:13",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      }
    ],
    "totalAmount": 43
  },
  {
    "id": "ORD00277",
    "time": "2026-06-20 12:14",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 41
  },
  {
    "id": "ORD00278",
    "time": "2026-06-20 12:33",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 24
  },
  {
    "id": "ORD00279",
    "time": "2026-06-20 12:37",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      }
    ],
    "totalAmount": 35
  },
  {
    "id": "ORD00280",
    "time": "2026-06-20 12:38",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 43
  },
  {
    "id": "ORD00281",
    "time": "2026-06-20 12:55",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 8
  },
  {
    "id": "ORD00282",
    "time": "2026-06-20 13:21",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 1
      },
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 2
      }
    ],
    "totalAmount": 49
  },
  {
    "id": "ORD00283",
    "time": "2026-06-20 14:11",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 23
  },
  {
    "id": "ORD00284",
    "time": "2026-06-20 14:19",
    "items": [
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 1
      }
    ],
    "totalAmount": 9
  },
  {
    "id": "ORD00285",
    "time": "2026-06-20 14:25",
    "items": [
      {
        "drinkId": "d008",
        "drinkName": "百香果苏打",
        "price": 13,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      }
    ],
    "totalAmount": 56
  },
  {
    "id": "ORD00286",
    "time": "2026-06-20 15:05",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 32
  },
  {
    "id": "ORD00287",
    "time": "2026-06-20 15:09",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 47
  },
  {
    "id": "ORD00288",
    "time": "2026-06-20 15:36",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      }
    ],
    "totalAmount": 34
  },
  {
    "id": "ORD00289",
    "time": "2026-06-20 15:39",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 43
  },
  {
    "id": "ORD00290",
    "time": "2026-06-20 16:04",
    "items": [
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      }
    ],
    "totalAmount": 67
  },
  {
    "id": "ORD00291",
    "time": "2026-06-20 16:12",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      },
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 30
  },
  {
    "id": "ORD00292",
    "time": "2026-06-20 16:24",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d010",
        "drinkName": "椰汁仙草冻",
        "price": 11,
        "quantity": 2
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 42
  },
  {
    "id": "ORD00293",
    "time": "2026-06-20 16:31",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 1
      }
    ],
    "totalAmount": 21
  },
  {
    "id": "ORD00294",
    "time": "2026-06-20 16:47",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 20
  },
  {
    "id": "ORD00295",
    "time": "2026-06-20 17:28",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 28
  },
  {
    "id": "ORD00296",
    "time": "2026-06-20 17:32",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      }
    ],
    "totalAmount": 34
  },
  {
    "id": "ORD00297",
    "time": "2026-06-20 18:26",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 1
      }
    ],
    "totalAmount": 15
  },
  {
    "id": "ORD00298",
    "time": "2026-06-20 18:35",
    "items": [
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 1
      },
      {
        "drinkId": "d001",
        "drinkName": "珍珠奶茶",
        "price": 12,
        "quantity": 2
      }
    ],
    "totalAmount": 40
  },
  {
    "id": "ORD00299",
    "time": "2026-06-20 18:46",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 28
  },
  {
    "id": "ORD00300",
    "time": "2026-06-20 18:46",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      },
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      }
    ],
    "totalAmount": 18
  },
  {
    "id": "ORD00301",
    "time": "2026-06-20 18:50",
    "items": [
      {
        "drinkId": "d002",
        "drinkName": "冰柠檬水",
        "price": 8,
        "quantity": 1
      },
      {
        "drinkId": "d004",
        "drinkName": "芒果西米露",
        "price": 16,
        "quantity": 2
      }
    ],
    "totalAmount": 40
  },
  {
    "id": "ORD00302",
    "time": "2026-06-20 19:05",
    "items": [
      {
        "drinkId": "d003",
        "drinkName": "草莓冰沙",
        "price": 15,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      }
    ],
    "totalAmount": 68
  },
  {
    "id": "ORD00303",
    "time": "2026-06-20 19:34",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      }
    ],
    "totalAmount": 12
  },
  {
    "id": "ORD00304",
    "time": "2026-06-20 20:30",
    "items": [
      {
        "drinkId": "d006",
        "drinkName": "原味冰淇淋",
        "price": 6,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      }
    ],
    "totalAmount": 40
  },
  {
    "id": "ORD00305",
    "time": "2026-06-20 20:36",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 2
      },
      {
        "drinkId": "d009",
        "drinkName": "红豆冰粉",
        "price": 9,
        "quantity": 2
      }
    ],
    "totalAmount": 46
  },
  {
    "id": "ORD00306",
    "time": "2026-06-20 20:43",
    "items": [
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 14
  },
  {
    "id": "ORD00307",
    "time": "2026-06-20 20:50",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 1
      }
    ],
    "totalAmount": 10
  },
  {
    "id": "ORD00308",
    "time": "2026-06-20 20:57",
    "items": [
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d007",
        "drinkName": "西瓜汁",
        "price": 10,
        "quantity": 2
      },
      {
        "drinkId": "d005",
        "drinkName": "抹茶拿铁",
        "price": 14,
        "quantity": 1
      }
    ],
    "totalAmount": 54
  }
];

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

module.exports = { drinks, orders, formatDate };
