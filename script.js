const input = document.getElementById('emailInput');
const tagInput = document.querySelector('.tag-input');
const guestCount = document.getElementById('guestCount');

let guests = [];

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && input.value.trim() !== '') {
        event.preventDefault();
        addGuest(input.value.trim());
        input.value = '';
    }
});

function addGuest(email) {
    if (guests.includes(email)) return;

    guests.push(email);
    updateGuestList();
}

function removeGuest(email) {
    guests = guests.filter((guest) => guest !== email);
    updateGuestList();
}

function updateGuestList() {
    tagInput.innerHTML = '';
    
    guests.forEach((guest) => {
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.innerHTML = `
            <span>${guest}</span>
            <button onclick="removeGuest('${guest}')">&times;</button>
        `;
        tagInput.appendChild(tag);
    });

    tagInput.appendChild(input);
    guestCount.textContent = guests.length;
}

document.getElementById('inviteButton').addEventListener('click', () => {
    if (guests.length > 0) {
        alert(`Invited ${guests.length} guests:\n${guests.join(', ')}`);
    } else {
        alert('No guests to invite.');
    }
});
