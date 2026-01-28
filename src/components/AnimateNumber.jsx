import React from 'react';
export default function AnimateNumber({ value, suffix = "", prefix = "" }) {
    return (
        <span>
            {prefix}{value}{suffix}
        </span>
    );
}
