type ClampOptions = {
    min?: number;
    max?: number;
};

export function clamp(value: number, {min=null, max=null}: ClampOptions = {}): number {
    if (min !== null && value < min) return min;
    if (max !== null && value > max) return max;
    return value;
}

export function wrapNumber(n: number, min: number, max: number): number {
    const range = max - min;
    return (
        (n - range) % range === 0 ?
            min
        : n >= min ?
            min + (n - min) % range
                :
            max + (n - min) % range
    );
}