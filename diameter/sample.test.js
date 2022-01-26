import cases from 'jest-in-case';
import fn from './diameter';

cases(
  'Test case validation for diameter question',
  ({ graph, result }) => {
    expect(fn(graph)).toEqual(result);
  },
  [
    {
      graph: [
        ['1', '2'],
        ['1', '3'],
        ['2', '1'],
      ],
      result: { r: 1, d: 2 },
    },
    {
      graph: [
        ['a', 'c'],
        ['a', 'b'],
        ['a', 'd'],
        ['c', 'f'],
        ['f', 'd'],
        ['f', 'g'],
        ['g', 'e'],
        ['e', 'd'],
        ['e', 'b'],
      ],
      result: { r: 2, d: 3 },
    },
  ],
);
