import { isNullOrUndefined } from '@ptolemy2002/js-utils';

export function clamp(value, min, max) {
    if (!isNullOrUndefined(min) && value < min) return min;
    if (!isNullOrUndefined(max) && value > max) return max;
    return value;
}

export function wrapNumber(n, min, max) {
    const range = max - min
    return n >= min ? min + (n - min) % range : max + (n - min) % range
}