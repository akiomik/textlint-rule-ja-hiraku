import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('その他 (感動詞)', rule, {
  invalid: [
    {
      text: '有難うございました',
      output: 'ありがとうございました',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
  ],
});
