export const getLastLetterToUppercaseFromName = (name: string) => {
    if (typeof name !== 'string') {
        return ''
    }
    let name_parts = name.split(' ');
    name_parts[name_parts.length - 1] = name_parts[name_parts.length - 1].charAt(0).toUpperCase() + '.';
    return name_parts.join(' ');
}