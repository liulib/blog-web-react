import { useEffect, useRef } from 'react';

export function useWatch(
    value: any,
    callback: any,
    config = { immediate: false }
) {
    const oldValue = useRef();
    const isInit = useRef(false);
    const isWatch = useRef(true);
    useEffect(() => {
        if (isWatch.current) {
            if (!isInit.current) {
                isInit.current = true;
                if (config.immediate) {
                    callback(value, oldValue.current);
                }
            } else {
                callback(value, oldValue.current);
            }
            oldValue.current = value;
        }
    }, [value]);

    const unwatch = () => {
        isWatch.current = false;
    };

    return unwatch;
}
