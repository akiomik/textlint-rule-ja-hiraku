import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('その他 (形容詞)', rule, {
  invalid: [
    {
      text: 'アムロ、上手くやれよ',
      output: 'アムロ、うまくやれよ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: '韻が固い',
      output: '韻がかたい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
    {
      text: '韻が硬い',
      output: '韻がかたい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
    {
      text: '韻が堅い',
      output: '韻がかたい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
    {
      text: '可能性は無いに等しい',
      output: '可能性はないに等しい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [4, 5],
        },
      ],
    },
    {
      text: 'それは不味いことになったな',
      output: 'それはまずいことになったな',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '勿体ないおばけ',
      output: 'もったいないおばけ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '良いお年をお迎えください',
      output: 'よいお年をお迎えください',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '頭が良くなる習慣',
      output: '頭がよくなる習慣',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
      ],
    },
  ],
});
