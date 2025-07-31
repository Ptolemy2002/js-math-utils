export type ClampOptions = {
    min?: number;
    max?: number;
};

export function clamp(value: number, {min=null, max=null}: ClampOptions = {}): number {
    if (min !== null && value < min) return min;
    if (max !== null && value > max) return max;
    return value;
}

export function wrapNumber(value: number, min: number, max: number): number {
    // Handle edge case: if min equals max, return that value
    if (min === max) {
        return min;
    }
    
    // Calculate the range size
    const rangeSize = max - min;
    
    // If value is already within range (inclusive), return as-is
    if (value >= min && value <= max) {
        return value;
    }
    
    // Normalize the value by shifting it relative to min
    const normalizedValue = value - min;
    
    // Calculate the wrapped position within the range
    // Use modulo to find where the value falls in the repeating pattern
    // The +1 is to ensure that the range is inclusive of both min and max
    let wrappedValue = normalizedValue % rangeSize;
    
    // Handle negative values by ensuring the result is positive
    if (wrappedValue < 0) {
        wrappedValue += rangeSize;
    }
    
    // If wrappedValue is 0 and the value approaches from the left,
    // we need to return the max value so that we can remain
    // inclusive of the max boundary
    if (wrappedValue === 0 && value > max) {
        return max;
    }

    // Shift back to the original range and return
    return wrappedValue + min;
}