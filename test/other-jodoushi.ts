import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('その他 (助動詞)', rule, {
  invalid: [
    {
      text: '三日とろろ美味しゅう御座いました',
      output: '三日とろろ美味しゅうございました',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [10, 11],
        },
      ],
    },
  ],
});
