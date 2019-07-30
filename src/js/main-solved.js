
console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

;(function() {

    const API_URL_BASE = 'twitter-proxy.php';
    const timelineFormEl = document.querySelector('form[name="timeline"]')

    function setupEventListeners() {
        const timelineBtnEl = timelineFormEl.querySelector('button')
        timelineBtnEl.addEventListener('click', handleTimelineSearch)
    }

    function handleTimelineSearch(event) {
        event.preventDefault()
        const screenName = timelineFormEl.querySelector('[name="screen_name"]').value
        console.log('searching timeline for', screenName)
       axios.get(API_URL_BASE, {
           params: {
            op: 'user_timeline',
            screen_name: screenName
           }
       }).then(handleTimelineSearchResults)
    }

    function handleTimelineSearchResults(response) {
        console.log('timeline search results', response)
        displayTweets(response.data, timelineFormEl.querySelector('.results ul'))
    }

    function displayTweets(tweetArray, resultsEl) {
        console.log('showing tweets', tweetArray, resultsEl)
        
        resultsEl.innerHTML = ''; // hacky shortcut

        for(let i=0; i<tweetArray.length; i++) {
            const li = document.createElement('li')
            const p  = document.createElement('p')
            const tweet = tweetArray[i]
            p.textContent = tweet.text
            li.appendChild(p)
            resultsEl.appendChild(li)
        }
    }

    setupEventListeners()

    
}());