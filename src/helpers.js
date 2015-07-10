export function checkNecessaryParams(name, opts, params) {
    params.forEach((item) => {
        if (!opts.hasOwnProperty(item)) {
            throw new Error(`${item} is a necessary param for ${name} task`);
        }
    });
}
