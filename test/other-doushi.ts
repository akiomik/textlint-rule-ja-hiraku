import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('その他 (動詞)', rule, {
  invalid: [
    {
      text: 'オレに分かるように説明しろ',
      output: 'オレにわかるように説明しろ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: 'ぜんぜん分からない 俺たちは雰囲気で株をやっている',
      output: 'ぜんぜんわからない 俺たちは雰囲気で株をやっている',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: '分かり手',
      output: 'わかり手',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '分かろうとする努力が足りない',
      output: 'わかろうとする努力が足りない',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: 'お願いだから分かって欲しい',
      output: 'お願いだからわかって欲しい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [6, 7],
        },
      ],
    },
    {
      text: 'ひとりで出来るもん',
      output: 'ひとりでできるもん',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: 'ひとりで出来ないもん',
      output: 'ひとりでできないもん',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: 'みんなを一つに纏める',
      output: 'みんなを一つにまとめる',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [7, 8],
        },
      ],
    },
    {
      text: 'みんなを一つに纏めたい',
      output: 'みんなを一つにまとめたい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [7, 8],
        },
      ],
    },
    {
      text: 'みんなを一つに纏めようとした',
      output: 'みんなを一つにまとめようとした',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [7, 8],
        },
      ],
    },
    // {
    //   text: "拘りスカーフ",
    //   output: "こだわりスカーフ",
    //   errors: [
    //     {
    //       message: "平仮名にひらいたほうが読みやすい漢字を使用しています。",
    //       range: [0, 1],
    //     },
    //   ],
    // },
    // {
    //   text: "機械を弄る",
    //   output: "機械をいじる",
    //   errors: [
    //     {
    //       message: "平仮名にひらいたほうが読みやすい漢字を使用しています。",
    //       range: [0, 1],
    //     },
    //   ],
    // },
  ],
});
