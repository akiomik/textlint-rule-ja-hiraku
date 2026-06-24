import type { ExpectedDictionary } from 'morpheme-match-all';
import type { ExpectedTokenWithCapture } from 'morpheme-match-textlint';

import { daimeishi } from './dictionaries/daimeishi';
import { fukujoshi } from './dictionaries/fukujoshi';
import { fukushi } from './dictionaries/fukushi';
import { hojodoushi } from './dictionaries/hojodoushi';
import { hojokeiyoushi } from './dictionaries/hojokeiyoushi';
import { keishikimeishi } from './dictionaries/keishikimeishi';
import { otherDoushi } from './dictionaries/other-doushi';
import { otherJodoushi } from './dictionaries/other-jodoushi';
import { otherKandoushi } from './dictionaries/other-kandoushi';
import { otherKeiyoushi } from './dictionaries/other-keiyoushi';
import { otherMeishi } from './dictionaries/other-meishi';
import { rentaishi } from './dictionaries/rentaishi';
import { setsuzokushi } from './dictionaries/setsuzokushi';
import type { CategoryOpts, DictOpts } from './opts';

export type PendingEntry<T extends ExpectedTokenWithCapture> = ExpectedDictionary<T> & {
  pending?: boolean;
};

const defaultOpts: DictOpts = {
  daimeishi: true,
  fukushi: true,
  fukujoshi: true,
  hojodoushi: true,
  hojokeiyoushi: true,
  keishikimeishi: true,
  'other-doushi': true,
  'other-jodoushi': true,
  'other-kandoushi': true,
  'other-keiyoushi': true,
  'other-meishi': true,
  rentaishi: true,
  setsuzokushi: true,
};

export function filterEntries<T extends ExpectedTokenWithCapture, Dictionary extends PendingEntry<T>>(
  entries: Dictionary[],
  categoryOpts: CategoryOpts,
): Dictionary[] {
  if (categoryOpts === false) return [];

  return entries.filter((entry) => {
    const sf = entry.tokens[0]?.surface_form;
    const key = Array.isArray(sf) ? sf[0] : sf;

    if (typeof categoryOpts === 'object' && key !== undefined && Object.hasOwn(categoryOpts, key)) {
      return categoryOpts[key];
    }

    return !entry.pending;
  });
}

export class DictionaryLoader {
  private options: DictOpts;

  constructor(options: Partial<DictOpts>) {
    this.options = { ...defaultOpts, ...options };
  }

  load<T extends ExpectedTokenWithCapture, Dictionary extends PendingEntry<T>>(): Dictionary[] {
    const categories: Array<[CategoryOpts, unknown[]]> = [
      [this.options.daimeishi, daimeishi],
      [this.options.fukujoshi, fukujoshi],
      [this.options.fukushi, fukushi],
      [this.options.hojodoushi, hojodoushi],
      [this.options.hojokeiyoushi, hojokeiyoushi],
      [this.options.keishikimeishi, keishikimeishi],
      [this.options['other-doushi'], otherDoushi],
      [this.options['other-jodoushi'], otherJodoushi],
      [this.options['other-kandoushi'], otherKandoushi],
      [this.options['other-keiyoushi'], otherKeiyoushi],
      [this.options['other-meishi'], otherMeishi],
      [this.options.rentaishi, rentaishi],
      [this.options.setsuzokushi, setsuzokushi],
    ];

    return categories.flatMap(([opts, entries]) => filterEntries(entries as Dictionary[], opts));
  }
}
