import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('形式名詞', rule, {
  valid: [
    '上の部屋にいます',
    '内なる本能',
    '事が起きる',
    '無謀な粗暴者は、可能なら毎ターン攻撃する。',
    'その店は通りに面している',
    '時が経つ',
    '所変われば品変わる',
    '先に中に入っています',
    '物を減らしたい',
    '一様な乱数',
  ],
  invalid: [
    {
      text: 'その上リベレーターにそっくりだ',
      output: 'そのうえリベレーターにそっくりだ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 上',
          range: [2, 3],
        },
      ],
    },
    {
      text: 'その内じゃなくて今すぐがいいの',
      output: 'そのうちじゃなくて今すぐがいいの',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 内',
          range: [2, 3],
        },
      ],
    },
    {
      text: 'そんな事もある',
      output: 'そんなこともある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 事',
          range: [3, 4],
        },
      ],
    },
    {
      text: 'トークルーム毎に通知を設定する',
      output: 'トークルームごとに通知を設定する',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 毎',
          range: [6, 7],
        },
      ],
    },
    {
      text: '戦う度に強くなる',
      output: '戦うたびに強くなる',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 度',
          range: [2, 3],
        },
      ],
    },
    {
      text: '彼女の為に必死に働いている',
      output: '彼女のために必死に働いている',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 為',
          range: [3, 4],
        },
      ],
    },
    // {
    //   text: '神様の言う通り',
    //   output: '神様の言う通り',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 通り',
    //       range: [5, 6],
    //     },
    //   ],
    // },
    {
      text: 'そんな時もある',
      output: 'そんなときもある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 時',
          range: [3, 4],
        },
      ],
    },
    {
      text: 'そんな所もある',
      output: 'そんなところもある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 所',
          range: [3, 4],
        },
      ],
    },
    {
      text: '嵐の中で輝いて',
      output: '嵐のなかで輝いて',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 中',
          range: [2, 3],
        },
      ],
    },
    {
      text: 'そろそろ到着する筈だ',
      output: 'そろそろ到着するはずだ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 筈',
          range: [8, 9],
        },
      ],
    },
    // {
    //   text: 'そう考える方もいます',
    //   output: 'そう考えるかたもいます',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 方',
    //       range: [5, 6],
    //     },
    //   ],
    // },
    {
      text: 'そうした方がよい',
      output: 'そうしたほうがよい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 方',
          range: [4, 5],
        },
      ],
    },
    {
      text: '焼き芋の他に銀杏も売っている',
      output: '焼き芋のほかに銀杏も売っている',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 他',
          range: [4, 5],
        },
      ],
    },
    {
      text: 'そうする他ない',
      output: 'そうするほかない',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 他',
          range: [4, 5],
        },
      ],
    },
    {
      text: 'そんな物だ',
      output: 'そんなものだ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 物',
          range: [3, 4],
        },
      ],
    },
    {
      text: 'その様にさせていただきます',
      output: 'そのようにさせていただきます',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 様',
          range: [2, 3],
        },
      ],
    },
    {
      text: '僕がダンサーになった訳',
      output: '僕がダンサーになったわけ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形式名詞を使用しています: 訳',
          range: [10, 11],
        },
      ],
    },
  ],
});
