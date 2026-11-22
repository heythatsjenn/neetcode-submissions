class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cache = {}
        this.cacheKeys = new Set()
    }

    /**
     * @param {number} key
     * @return {void}
     */
    useKey(key) {
        if(this.cacheKeys.has(key)){
            this.cacheKeys.delete(key)
        }

        this.cacheKeys.add(key)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cacheKeys.has(key)){
            this.useKey(key)
            return this.cache[key]
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.useKey(key)

        this.cache[key] = value

        if(this.cacheKeys.size > this.capacity){
            const firstKey = this.cacheKeys.values().next().value;
            delete this.cache[firstKey]
            this.cacheKeys.delete(firstKey)
        }
    }
}
