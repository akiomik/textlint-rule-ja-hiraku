export const daimeishi = [
  {
    message: '平仮名にひらいたほうが読みやすい代名詞を使用しています: 貴方',
    expected: 'あなた',
    tokens: [
      {
        surface_form: '貴方',
        pos: '名詞',
        pos_detail_1: '代名詞',
        basic_form: '貴方',
        reading: 'アナタ',
      },
    ],
  },
  {
    message: '平仮名にひらいたほうが読みやすい代名詞を使用しています: 何れ',
    expected: 'いずれ',
    tokens: [
      {
        surface_form: '何れ',
        pos: '名詞',
        pos_detail_1: '代名詞',
        basic_form: '何れ',
        reading: 'イズレ',
      },
    ],
  },
  {
    message: '平仮名にひらいたほうが読みやすい代名詞を使用しています: 此処',
    expected: 'ここ',
    tokens: [
      {
        surface_form: '此処',
        pos: '名詞',
        // pos_detail_1: '代名詞',
        basic_form: '此処',
        reading: 'ココ',
      },
    ],
  },
  // {
  //   message: '平仮名にひらいたほうが読みやすい代名詞を使用しています: 此れ',
  //   expected: 'これ',
  //   tokens: [
  //     {
  //       surface_form: '此れ',
  //       pos: '名詞',
  //       pos_detail_1: '代名詞',
  //       basic_form: '此れ',
  //       reading: 'コレ',
  //     },
  //   ],
  // },
  // {
  //   message: '平仮名にひらいたほうが読みやすい代名詞を使用しています: 其処',
  //   expected: 'そこ',
  //   tokens: [
  //     {
  //       surface_form: '其処',
  //       pos: '名詞',
  //       pos_detail_1: '代名詞',
  //       basic_form: '其処',
  //       reading: 'ソコ',
  //     },
  //   ],
  // },
  // {
  //   message: '平仮名にひらいたほうが読みやすい代名詞を使用しています: 其れ',
  //   expected: 'それ',
  //   tokens: [
  //     {
  //       surface_form: '其れ',
  //       pos: '名詞',
  //       pos_detail_1: '代名詞',
  //       basic_form: '其れ',
  //       reading: 'ソレ',
  //     },
  //   ],
  // },
  {
    message: '平仮名にひらいたほうが読みやすい代名詞を使用しています: 何処',
    expected: 'どこ',
    tokens: [
      {
        surface_form: '何処',
        pos: '名詞',
        pos_detail_1: '代名詞',
        basic_form: '何処',
        reading: 'ドコ',
      },
    ],
  },
  {
    message: '平仮名にひらいたほうが読みやすい代名詞を使用しています: 何方',
    expected: 'どなた',
    tokens: [
      {
        surface_form: '何方',
        pos: '名詞',
        // pos_detail_1: '代名詞',
        basic_form: '何方',
        reading: 'ドナタ',
      },
    ],
  },
];
