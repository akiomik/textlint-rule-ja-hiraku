import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('副助詞', rule, {
  invalid: [
    {
      text: '暑さ寒さも彼岸迄',
      output: '暑さ寒さも彼岸まで',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [7, 8],
        },
      ],
    },
    {
      text: 'あんた程の実力者がそういうのなら…',
      output: 'あんたほどの実力者がそういうのなら…',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
  ],
});
