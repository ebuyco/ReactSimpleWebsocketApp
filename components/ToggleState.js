import { useState } from 'react';

export const ToggleState= (initialState) => {
        const [expanded, setExpanded] = useState(initialState);
        const onToggle = (id) =>  {
            setExpanded(
                    Object.assign([], expanded, {
                         [id]: !expanded[id]
                    })
            );
        };
        return { expanded, onToggle }
}
