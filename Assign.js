const data = [
    {
        id: 0,
        name: "Subhan",
        status: "Graduated",
        university: "GCUF",
    },
    {
        id: 1,
        name: "Rao",
        status: "In Progress",
        university: "GCUF",
    },
    {
        id: 2,
        name: "Rida",
        status: "In Progress",
        university: "GCUF",
    },
    {
        id: 3,
        name: "Aneeza",
        status: "Not Graduated",
        university: "GCUF",
    },
    {
        id: 4,
        name: "Tuba",
        status: "Not Graduated",
        university: "GCUF",
    },
    {
        id: 4,
        name: "Hareem",
        status: "Not Graduated",
        university: "GCUF",
    },
];
// Function to Render Data Cards
const renderMyData = (data) => {
    const cardsData = document.getElementById("cardsData");
    cardsData.innerHTML = " ";
    data.forEach((item) => {
        const cards = document.createElement("div");
        cards.classList.add("cards");

        cards.innerHTML = `<h3>ID: ${item.id}</h3>
        <p>Name: ${item.name}</p>
        <p>Status: ${item.status}</p>
        <p>University: ${item.university}</p>`;

        cardsData.appendChild(cards);
    });

};
renderMyData(data);

// Function for searching data on the base of name or university

let searchFunc = () => {
    const searchInput = document.getElementById("Search");
    const searchedItem = searchInput.value.toLowerCase();

    const filteredData = data.filter((item) => {
        const uniMatch = item.university.toLowerCase().includes(searchedItem);
        const nameMatch = item.name.toLowerCase().includes(searchedItem);
        const statusMatch = item.status.toLowerCase().includes(searchedItem);

        return uniMatch || nameMatch || statusMatch;
    });
    renderMyData(filteredData);
};
//  Function for searching  data on the basis of status (Radio buttons)

