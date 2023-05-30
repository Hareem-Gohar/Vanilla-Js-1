const data = [
    {
        id: 0,
        name: "Rida",
        status: "In Progress",
        university: "GCUF",
    },
    {
        id: 1,
        name: "Sania",
        status: "Graduated",
        university: "GCUF",
    },

    {
        id: 2,
        name: "Maryam",
        status: "In Progress",
        university: "GCUF",
    },
    {
        id: 3,
        name: "Aneeza",
        status: "Graduated",
        university: "GCUF",
    },
    {
        id: 4,
        name: "Unknown",
        status: "Not Graduated",
        university: "GCUF",
    },
    {
        id: 5,
        name: "Meerab",
        status: "Not Graduated",
        university: "GCUF",
    },
    {
        id: 6,
        name: "Ayesha",
        status: "In Progress",
        university: "UET",
    },
    {
        id: 7,
        name: "unknown",
        status: "Graduated",
        university: "GCUF",
    },
    {
        id: 8,
        name: "unknown",
        status: "Not Graduated",
        university: "UET",
    },
];

// Function to Render Data Cards
const renderMyData = (data) => {
    const cardsData = document.getElementById("cardsData");
    cardsData.innerHTML = " ";
    data.forEach((item) => {
        cardsData.innerHTML += ` <div class="cards p-4 mb-2 col-lg-3 col-md-6 col-sm-12 me-2 ">
        <h3>ID: ${item.id}</h3>
        <p>Name: ${item.name}</p>
        <p>Status: ${item.status}</p>
        <p>University: ${item.university}</p> </div>`;

    });

};

// renderMyData(data);

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

const filterByStatus = (e) => {
    let filteredData;

    if (e.target.value === "Graduated") {
        filteredData = data.filter((item) => {
            return item.status === 'Graduated';
        });
    }
    else if (e.target.value === "In Progress") {
        filteredData = data.filter((item) => {
            return item.status === 'In Progress';
        });
    }
    else if (e.target.value === "Not Graduated") {
        filteredData = data.filter((item) => {
            return item.status === 'Not Graduated';
        });
    }

    renderMyData(filteredData);
};
