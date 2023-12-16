import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('rule', rule, {
  valid: [
    'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
  ],
  invalid: [
    {
      text: '丁度良かった。色々話を聞いて頂きたいと思っていた所でした。',
      output:
        'ちょうどよかった。いろいろ話を聞いていただきたいと思っていたところでした。',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [2, 3],
        },
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [7, 8],
        },
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [14, 15],
        },
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [24, 25],
        },
      ],
    },
  ],
});
