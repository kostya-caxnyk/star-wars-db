export default (...funcs) => (comp) => {
    return funcs.reduceRight((prevResult, func) => func(prevResult), comp)
}