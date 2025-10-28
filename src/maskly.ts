/**
 * maskly - mask sensitive fields in strings, objects, and arrays.
 * Works with dynamic fields and customizable options.
 */

export interface MasklyOptions {
  visibleStart?: number;
  visibleEnd?: number;
  maskChar?: string;
}

/**
 * Main maskly function.
 * @param data - any input (string, object, array)
 * @param fields - optional array of field names to mask (for objects)
 * @param options - mask settings (visibleStart, visibleEnd, maskChar)
 */
export function maskly(
  data: any,
  fields?: string[],
  options: MasklyOptions = {}
): any {
  const {
    visibleStart = 2,
    visibleEnd = 2,
    maskChar = "*"
  } = options;

  // Default fields only if none provided
  const fieldList = fields && fields.length > 0
    ? fields
    : ["password", "email", "phone", "token", "secret", "ssn", "card", "aadhaar"];

  const maskString = (str: string): string => {
    if (typeof str !== "string") return str;
    if (str.length <= visibleStart + visibleEnd) return maskChar.repeat(str.length);
    const start = str.slice(0, visibleStart);
    const end = str.slice(-visibleEnd);
    return start + maskChar.repeat(str.length - visibleStart - visibleEnd) + end;
  };

  const maskValue = (value: any): any => {
    if (value == null) return value;
    if (typeof value === "string" || typeof value === "number") return maskString(String(value));
    if (Array.isArray(value)) return value.map(maskValue);
    if (typeof value === "object") return maskObject(value);
    return value;
  };

  const maskObject = (obj: Record<string, any>): any => {
    if (!obj || typeof obj !== "object") return obj;
    return Object.entries(obj).reduce((acc, [key, val]) => {
      if (fieldList.includes(key)) {
        acc[key] = maskValue(val);
      } else if (typeof val === "object") {
        acc[key] = maskObject(val);
      } else {
        acc[key] = val;
      }
      return acc;
    }, Array.isArray(obj) ? [] : {} as any);
  };

  if (typeof data === "string") return maskString(data);
  if (Array.isArray(data)) return maskValue(data);
  if (typeof data === "object") return maskObject(data);
  return data;
}
