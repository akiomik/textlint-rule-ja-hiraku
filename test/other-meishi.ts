import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('その他 (名詞)', rule, {
  invalid: [
    {
      text: 'この世全ての悪',
      output: 'この世すべての悪',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい名詞を使用しています: 全て',
          range: [3, 4],
        },
      ],
    },
    {
      text: 'nostrを始めとする分散SNS',
      output: 'nostrをはじめとする分散SNS',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい名詞を使用しています: 始め',
          range: [6, 7],
        },
      ],
    },
    {
      text: 'nostrを初めとする分散SNS',
      output: 'nostrをはじめとする分散SNS',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい名詞を使用しています: 初め',
          range: [6, 7],
        },
      ],
    },
    {
      text: '焼き芋を食べるなんてもっての外だ',
      output: '焼き芋を食べるなんてもってのほかだ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい名詞を使用しています: もっての外',
          range: [10, 11],
        },
      ],
    },
    {
      text: '僅かに増加した',
      output: 'わずかに増加した',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい名詞を使用しています: 僅か',
          range: [0, 1],
        },
      ],
    },
  ],
});
