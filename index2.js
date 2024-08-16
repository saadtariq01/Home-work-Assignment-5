async function displayUserName() {
    // Prompt the user to enter their name
    const userName = prompt('Please enter your name:');

    // Create a promise that resolves after 2 seconds
    const namePromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(userName);
        }, 2000);
    });

    // Await the promise and then display the name in the DOM
    const name = await namePromise;
    document.getElementById('nameDisplay').textContent = `Hello, ${name}!`;
}

