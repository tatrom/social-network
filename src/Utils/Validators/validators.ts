export const requiredField = (value: string) => {
    if (value) {
        return undefined;
    }
    return 'Filed is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value.length > maxLength) return `Max length is ${maxLength}`

    return undefined;
}