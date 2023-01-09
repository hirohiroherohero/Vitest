import { it, expect, describe } from "vitest";
import {
    valueArrayNullCheck,
    TypeArrayNullCheck,
    phoneNumberConvert,
    dateConvert,
} from "../../src/utils";

describe("유틸 테스트", () => {
    it("valueArrayNullCheck", () => {
        const hasNullArray = [{ a: "1", b: "2" }, null];

        expect(valueArrayNullCheck(hasNullArray).find((i) => i === null)).toBe(
            undefined
        );
    });

    // it("TypeArrayNullCheck", () => {
    //     type HasNullArray = { [x: string]: any | null }[];
    //     type WithoutNullArray = TypeArrayNullCheck<HasNullArray>;

    //     expect([{ a: "1" }]).toBeInstanceOf(WithoutNullArray);
    // });
});

describe("컨버터 테스트", () => {
    it("phoneNumberConvert", () => {
        expect(phoneNumberConvert("01043127959")).toBe("010-4312-7959");
    });

    it("dateConvert", () => {
        const christmas = new Date(2023, 11, 25, 12, 25, 12).toISOString();

        expect(dateConvert(christmas, "DATE")).toBe("2023-12-25");
        expect(dateConvert(christmas, "DATETIME")).toBe("2023-12-25 12:25:12");
    });
});
