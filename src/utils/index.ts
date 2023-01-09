export type InferArray<T extends any[]> = T extends (infer U)[]
    ? NonNullable<U>
    : never;

const isNotEmpty = <TValue>(
    value: TValue | null | undefined
): value is TValue => {
    return value !== null && value !== undefined;
};

/**
 * (value 기준) Array 안에 null을 체크해서 제거해줌.
 */

export const valueArrayNullCheck = <T extends any[]>(
    valueArray: T
): InferArray<T>[] => {
    return valueArray.filter(isNotEmpty);
};

/**
 * (type 기준) Array 안에 null을 체크해서 제거해주고 객체타입으로 반환해줌.
 */
export type TypeArrayNullCheck<T extends any[]> = InferArray<T>;

export const phoneNumberConvert = (phoneNumber: string | number) => {
    if (typeof phoneNumber === "number") {
        return String(phoneNumber).replace(
            /^(\d{2,3})(\d{3,4})(\d{4})$/,
            `$1-$2-$3`
        );
    }

    return phoneNumber.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
};

type DateType = `${string}-${string}-${string}`;
type DateTimeType =
    `${string}-${string}-${string} ${string}:${string}:${string}`;

export const dateConvert = (
    dateStr: string,
    returnType: "DATE" | "DATETIME"
): DateType | DateTimeType => {
    const newDate = new Date(dateStr);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const date = String(newDate.getDate()).padStart(2, "0");
    const hours = String(newDate.getHours()).padStart(2, "0");
    const minutes = String(newDate.getMinutes()).padStart(2, "0");
    const seconds = String(newDate.getSeconds()).padStart(2, "0");

    if (returnType === "DATE") {
        return `${year}-${month}-${date}`;
    } else if (returnType === "DATETIME") {
        return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    } else throw new Error("returnType is required");
};
