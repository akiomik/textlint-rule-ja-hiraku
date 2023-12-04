import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();
tester.run("rule", rule, {
  valid: [
    "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。",
  ],
  invalid: [
    {
      text: "僕がダンサーになった訳",
      errors: [
        {
          message: "平仮名にひらいたほうが読みやすい漢字を使用しています。",
          range: [10, 11],
        },
      ],
    },
    {
      text: "そうした方がよい",
      errors: [
        {
          message: "平仮名にひらいたほうが読みやすい漢字を使用しています。",
          range: [4, 5],
        },
      ],
    },
    {
      text: "そうする他ない",
      errors: [
        {
          message: "平仮名にひらいたほうが読みやすい漢字を使用しています。",
          range: [4, 5],
        },
      ],
    },
  ],
});
