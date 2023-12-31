import type { TextlintRuleModule } from '@textlint/types';
import { tokenize } from 'kuromojin';
import { createTextlintMatcher } from 'morpheme-match-textlint';

import { DictionaryLoader } from './loader';
import type { DictOpts } from './opts';

const report: TextlintRuleModule = (context, options) => {
  const { Syntax, RuleError, report, getSource, fixer } = context;

  const loader = new DictionaryLoader(options as DictOpts);
  const dictionaries = loader.load();
  const matchAll = createTextlintMatcher({ tokenize, dictionaries });

  return {
    [Syntax.Str](node) {
      // "Str" node
      const text = getSource(node); // Get text

      return matchAll(text).then((results) => {
        for (const result of results) {
          if (result.expected) {
            report(
              node,
              new RuleError(result.message, {
                index: result.index,
                fix: fixer.replaceTextRange(result.range, result.expected),
              }),
            );
          }
        }
      });
    },
  };
};

export default {
  linter: report,
  fixer: report,
};
