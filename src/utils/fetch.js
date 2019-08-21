var url = '';


export const postData = (data) => {
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // .then(res => res.json())
    //     .then(response => console.log('Success:', JSON.stringify(response)))
    //     .catch(error => console.error('Error:', error))

        console.table(data)
}