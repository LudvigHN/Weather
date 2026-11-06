import React from 'react'

export default function countryName(code) {
    return new Intl.DisplayNames(["da"], { type: 'region' }).of(code);
}
