import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('代名詞', rule, {
  invalid: [
    {
      text: '貴方にはわからないでしょうね',
      output: 'あなたにはわからないでしょうね',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '此処はどこ？',
      output: 'ここはどこ？',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: 'ここは何処？',
      output: 'ここはどこ？',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '何方様でも入会できます',
      output: 'どなた様でも入会できます',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
  ],
});
