import assert from 'node:assert';
import { describe, it } from 'node:test';
import { filterEntries } from '../src/loader';

const stableEntry = {
  message: 'stable',
  expected: 'すてーぶる',
  tokens: [{ surface_form: '安定' }],
};

const pendingEntry = {
  message: 'pending',
  expected: 'ぺんでぃんぐ',
  pending: true as const,
  tokens: [{ surface_form: '保留' }],
};

const entries = [stableEntry, pendingEntry];

describe('filterEntries', () => {
  describe('categoryOpts === true', () => {
    it('stable エントリを含む', () => {
      const result = filterEntries(entries, true);
      assert.ok(result.includes(stableEntry));
    });

    it('pending エントリを除外する', () => {
      const result = filterEntries(entries, true);
      assert.ok(!result.includes(pendingEntry));
    });
  });

  describe('categoryOpts === false', () => {
    it('全エントリを除外する', () => {
      const result = filterEntries(entries, false);
      assert.strictEqual(result.length, 0);
    });
  });

  describe('categoryOpts が Record', () => {
    it('Record に含まれない stable エントリはデフォルト有効', () => {
      const result = filterEntries(entries, { 保留: true });
      assert.ok(result.includes(stableEntry));
    });

    it('stable エントリを個別に無効化できる', () => {
      const result = filterEntries(entries, { 安定: false });
      assert.ok(!result.includes(stableEntry));
    });

    it('pending エントリを明示的に有効化できる', () => {
      const result = filterEntries(entries, { 保留: true });
      assert.ok(result.includes(pendingEntry));
    });

    it('Record に含まれない pending エントリはデフォルト無効', () => {
      const result = filterEntries(entries, { 安定: true });
      assert.ok(!result.includes(pendingEntry));
    });
  });
});
