/**
 * Created by joker on 15.12.16.
 */

export function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}