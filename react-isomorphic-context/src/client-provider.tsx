'use client'
import React from 'react'

import { createContext, useState } from 'react'

let contexts = new Map<string, any>()

export function ClientProvider({
    children,
    id,
    value,
}: {
    children: any
    value: any
    id: string
}) {
    if (!contexts.has(id)) {
        contexts.set(id, createContext(value))
    }
    const clientContext = contexts.get(id)

    return (
        <clientContext.Provider value={value}>
            {children}
        </clientContext.Provider>
    )
}


ClientProvider.contexts = contexts