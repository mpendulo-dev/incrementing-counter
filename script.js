// get all counter classes
const counter = document.querySelectorAll('.counter');

// loop through the counter and set the inner text to a string of Zero
counter.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        // the plus (+) sign turns the string target into a number
        // we get the values of the target and convert them to numbers
        const target = +counter.getAttribute('data-target');
        
        // the counter has 3 values
        const c = +counter.innerText;

        // divides the value of the target and use it it as an incrementer.
        const increment = target / 200;

        
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }
    // call the function
    updateCounter();
});