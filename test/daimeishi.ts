import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('代名詞', rule, {
  valid: [
    '私が町長です',
    '僕が町長です',
    '我が町長です',
    '君が町長です',
    '彼が町長です',
    '彼女が町長です',
    '自分が町長です',
  ],
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
