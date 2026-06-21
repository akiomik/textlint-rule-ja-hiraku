import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run(
  'options (disabled)',
  {
    rules: [
      {
        ruleId: 'ja-hiraku',
        rule,
        options: {
          daimeishi: false,
          fukujoshi: false,
          fukushi: false,
          hojodoushi: false,
          hojokeiyoushi: false,
          keishikimeishi: false,
          'other-doushi': false,
          'other-jodoushi': false,
          'other-kandoushi': false,
          'other-keiyoushi': false,
          'other-meishi': false,
          rentaishi: false,
          setsuzokushi: false,
        },
      },
    ],
  },
  {
    valid: [
      'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
      '丁度良かった。色々話を聞いて頂きたいと思っていた所でした。',
    ],
  },
);

tester.run(
  'options (fukushi: Record で 丁度 disabled)',
  {
    rules: [
      {
        ruleId: 'ja-hiraku',
        rule,
        options: {
          fukushi: { 丁度: false },
        },
      },
    ],
  },
  {
    valid: ['丁度ここに着いた。'],
    invalid: [
      {
        text: '色々話を聞いて頂きたいと思っていた所でした。',
        output: 'いろいろ話を聞いていただきたいと思っていたところでした。',
        errors: [
          {
            message: '平仮名にひらいたほうが読みやすい副詞を使用しています: 色々',
            range: [0, 1],
          },
          {
            message: '平仮名にひらいたほうが読みやすい補助動詞を使用しています: 頂き',
            range: [7, 8],
          },
          {
            message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 所',
            range: [17, 18],
          },
        ],
      },
    ],
  },
);
