import countingValleys from "../countingValleys";

describe("Counting valleys of consecutive steps below sea level", () => {
    it("Should return 1 valley", () => {
        const path = "UDDDUDUU";
        const result = countingValleys(path);
        expect(result).toEqual(1);
    });
    it("Should return 2 valleys", () => {
        const path = "UDDDUDUUUDD";
        const result = countingValleys(path);
        expect(result).toEqual(2);
    });
});
