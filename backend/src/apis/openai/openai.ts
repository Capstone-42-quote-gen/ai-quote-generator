const completion = await openai.createCompletion(
    {
        model: "gpt-3.5-turbo",
        prompt: "Hello world",
    },
    {
        timeout: 1000,
        headers: {
            "Example-Header": "example",
        },
    }
);

// Error handling
//
// API requests can potentially return errors due to invalid inputs or other issues. These errors can be handled with a try...catch statement, and the error details can be found in either error.response or error.message:

try {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Hello world",
    });
    console.log(completion.data.choices[0].text);
} catch (error) {
    if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
    } else {
        console.log(error.message);
    }
}