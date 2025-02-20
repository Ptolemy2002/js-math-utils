export type ClampOptions = {
    min?: number;
    max?: number;
};

export function clamp(value: number, {min=null, max=null}: ClampOptions = {}): number {
    if (min !== null && value < min) return min;
    if (max !== null && value > max) return max;
    return value;
}

export function wrapNumber(n: number, min: number, max: number): number {
    const range = max - min + 1;
    return (n - min + range) % range + min;
}