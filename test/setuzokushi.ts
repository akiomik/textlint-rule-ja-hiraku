import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('接続詞', rule, {
  invalid: [
    {
      text: 'グレートブリテン及び北アイルランド連合王国',
      output: 'グレートブリテンおよび北アイルランド連合王国',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [8, 9],
        },
      ],
    },
    {
      text: 'A且つBならばCまたはD',
      output: 'AかつBならばCまたはD',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [1, 2],
        },
      ],
    },
    {
      text: '従ってこの契約は無効である',
      output: 'したがってこの契約は無効である',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '但しこの契約は有効である',
      output: 'ただしこの契約は有効である',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '因みに風邪もひきました',
      output: 'ちなみに風邪もひきました',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '尚この契約は有効である',
      output: 'なおこの契約は有効である',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: 'お客様並びに関係者の皆様へ',
      output: 'お客様ならびに関係者の皆様へ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [3, 4],
        },
      ],
    },
    {
      text: '並びにこの契約は有効である',
      output: 'ならびにこの契約は有効である',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '又、伊勢御参宮の折おりからは',
      output: 'また、伊勢御参宮の折おりからは',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '又は伊勢御参宮の折おりからは',
      output: 'または伊勢御参宮の折おりからは',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
  ],
});
