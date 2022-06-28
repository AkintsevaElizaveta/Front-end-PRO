let userName = prompt('What is your name?');

    if (userName == null || userName === '') {
        alert(`Hello, stranger!`)
    } else {
        alert(`Hello, ${userName}! How are you?`);
    }
