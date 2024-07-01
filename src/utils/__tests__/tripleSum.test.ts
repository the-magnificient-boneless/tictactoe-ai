import tripleSum from '../tripleSum'

describe('tripleSum function', () => {
  it('should return an empty array for an empty input', () => {
    expect(tripleSum([])).toEqual([]);
  });

  it('should return an empty array for an array with less than 3 elements', () => {
    expect(tripleSum([1])).toEqual([]);
    expect(tripleSum([1, 2])).toEqual([]);
  });

  it('should return a single triplet for a simple case', () => {
    expect(tripleSum([-1, 0, 1])).toEqual([[-1, 0, 1]]);
  });

  it('should return all unique triplets in a sorted array', () => {
    expect(tripleSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, 0, 1]]);
  });

  it('should handle cases with duplicate elements', () => {
    expect(tripleSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, 0, 1]]); // Only unique triplet returned
    expect(tripleSum([-2, 0, 1, 1, 2, 0])).toEqual([[-2, 0, 2]]); // Handles multiple occurrences of the same element
  });
});