import encodeToNonPaddedBase64 from "../stringToBase64";

describe("base64 Encoding and Decoding", () => {
    it("Should encode and decode to non-padded Base64 using btoa() method, using an input array of strings", () => {
        const input = "Hello, World!";
        const expected = "SGVsbG8sIFdvcmxkIQ";

        // Test encoding and decoding
        const result = encodeToNonPaddedBase64(input);
        expect(result).toEqual(expected);
    });
});
