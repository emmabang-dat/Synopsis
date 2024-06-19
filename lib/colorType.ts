export type ColorType = {
    id: string;
    name: string;
    value: string;
  };
  
  
  export function CastToColorType(object : any) : ColorType {
      if (object === undefined || object === null)
        return { id: 'unknown', name: object, value: 'unknown' } as ColorType;
      if (
        typeof object === 'object' &&
        'id' in object &&
        'name' in object &&
        'value' in object
      ) {
        return object as ColorType;
      } else {
        throw new Error('Invalid object structure. Cannot cast to ColorType.');
      }
  }
  
  export function isColorLight(hex: string): boolean {
    // Convert hex to RGB first
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length == 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length == 7) {
      r = parseInt(hex.substring(1, 3), 16);
      g = parseInt(hex.substring(3, 5), 16);
      b = parseInt(hex.substring(5, 7), 16);
    }
  
    // Simple algorithm to determine if it's light or dark
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5;
  }