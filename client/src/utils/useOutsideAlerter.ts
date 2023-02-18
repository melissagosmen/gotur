import type {Dispatch, RefObject, SetStateAction} from 'react';
import {useEffect} from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: RefObject<HTMLDivElement>, callback: Dispatch<SetStateAction<boolean>>) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Element;
            if (ref.current && !ref.current.contains(target))
                callback(false);
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [callback, ref]);
}

export default useOutsideAlerter;