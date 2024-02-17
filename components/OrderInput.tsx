'use client';

import React, { useState, useEffect } from 'react';

export default function OrderInput({ inputType }: { inputType: string }) {
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('OrderInput mounted');
        console.log('inputType:', inputType);
        return () => {
            console.log('OrderInput unmounted');
        };
    },[]);

    return (
        <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
            </label>
            <div className="mt-2">
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Schlabethany McSchlaberson"
                />
            </div>
        </div>
    );
};