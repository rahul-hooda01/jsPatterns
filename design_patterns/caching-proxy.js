class ApiService {
    fetchData() {
        // Simulate a network request or an expensive operation
        console.log("Fetching data from the API...");
        return "Fetched data";
    }
}


class CachingProxy {
    constructor(apiService) {
        this.apiService = apiService;
        this.cache = null;  // Cache storage
    }

    fetchData() {
        if (this.cache === null) {
            console.log("No cache found, fetching new data...");
            this.cache = this.apiService.fetchData();  // Cache the result
        } else {
            console.log("Returning cached data...");
        }
        return this.cache;
    }

    clearCache() {
        console.log("Clearing cache...");
        this.cache = null;
    }
}


const apiService = new ApiService();
const cachingProxy = new CachingProxy(apiService);

// First call - data fetched from the API
console.log(cachingProxy.fetchData());  // Output: Fetching data from the API... Fetched data

// Second call - data served from cache
console.log(cachingProxy.fetchData());  // Output: Returning cached data... Fetched data

// Clear cache and fetch new data
cachingProxy.clearCache();
console.log(cachingProxy.fetchData());  // Output: No cache found, fetching new data... Fetched data
