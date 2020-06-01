module.exports = function pubsubFactory(fetch) {
    function publish(topic, messages) {
        return fetch(
            `https://pubsub.googleapis.com/v1/${topic}:publish`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/json'
                },
                body: JSON.stringify({ messages })
            })
    }

    return {
        publish
    }
}
