export const rentaishi = [
  {
    message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    expected: 'いろいろ',
    tokens: [
      {
        surface_form: '色々',
        basic_form: '色々',
        pos: '名詞',
        reading: 'イロイロ',
      },
    ],
  },
  {
    message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    expected: 'いろんな',
    tokens: [
      {
        surface_form: '色んな',
        basic_form: '色んな',
        pos: '連体詞',
        reading: 'イロンナ',
      },
    ],
  },
  // {
  //   message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
  //   expected: 'いわゆる',
  //   tokens: [
  //     {
  //       surface_form: '所謂',
  //       basic_form: '所謂',
  //       pos: '連体詞',
  //       reading: 'イワユル',
  //     },
  //   ],
  // },
  {
    message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    expected: 'この前',
    tokens: [
      {
        surface_form: '此の前',
        basic_form: '此の前',
        pos: '名詞',
        reading: 'コノマエ',
      },
    ],
  },
  {
    message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    expected: 'その',
    tokens: [
      {
        surface_form: '其の',
        basic_form: '其の',
        pos: '連体詞',
        reading: 'ソノ',
      },
    ],
  },
];
