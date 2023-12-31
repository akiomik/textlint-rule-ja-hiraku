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
          message: '平仮名にひらいたほうが読みやすい感動詞を使用しています: 有難う',
          range: [0, 1],
        },
      ],
    },
  ],
});
