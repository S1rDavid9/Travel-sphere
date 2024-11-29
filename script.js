// Get the modal elements
var loginModal = document.getElementById("loginModal");
var signupModal = document.getElementById("signupModal");

// Get the button that opens the modal
var loginBtn = document.getElementById("loginLink");
var signupBtn = document.getElementById("signupLink");

// Get the <span> element that closes the modal
var closeLogin = document.getElementById("closeLogin");
var closeSignup = document.getElementById("closeSignup");

// Open the login modal
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// Open the signup modal
signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

// Close the login modal
closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

// Close the signup modal
closeSignup.onclick = function() {
    signupModal.style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
    if (event.target == loginModal || event.target == signupModal) {
        loginModal.style.display = "none";
        signupModal.style.display = "none";
    }
}

// // Define the buttons and results sections
// const flightSearchButton = document.getElementById('flightSearchButton');
// const accommodationSearchButton = document.getElementById('accommodationSearchButton');
// const flightResults = document.getElementById('flightResults');
// const accommodationResults = document.getElementById('accommodationResults');

// // Modal elements
// const flightModal = document.getElementById('flightModal');
// const accommodationModal = document.getElementById('accommodationModal');
// const closeFlightModal = document.getElementById('closeFlightModal');
// const closeAccommodationModal = document.getElementById('closeAccommodationModal');

// // RapidAPI headers
// const apiHeaders = {
//     "X-RapidAPI-Key": "1edf882553msh16a3808d8d38a3fp15685bjsn4be242f7c749",
//     "X-RapidAPI-Host": "booking-com15.p.rapidapi.com"
// };

// // Open the flight search modal
// flightSearchButton.addEventListener('click', () => {
//     flightModal.style.display = 'block';
// });

// // Open the accommodation search modal
// accommodationSearchButton.addEventListener('click', () => {
//     accommodationModal.style.display = 'block';
// });

// // Close the flight search modal
// closeFlightModal.addEventListener('click', () => {
//     flightModal.style.display = 'none';
// });

// // Close the accommodation search modal
// closeAccommodationModal.addEventListener('click', () => {
//     accommodationModal.style.display = 'none';
// });

// // Flight Search Handler
// document.getElementById('searchFlights').addEventListener('click', async () => {
//     const fromId = document.getElementById('fromId').value;
//     const toId = document.getElementById('toId').value;
//     const departDate = document.getElementById('departDate').value;
//     const returnDate = document.getElementById('returnDate').value;
//     const adults = document.getElementById('adults').value;

//     flightResults.innerHTML = "Loading flight results...";
//     try {
//         const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=BOM.AIRPORT&toId=DEL.AIRPORT&departDate=2024-11-12&returnDate=2024-11-15&pageNo=1&adults=1&children=0%2C17&sort=BEST&cabinClass=ECONOMY&currency_code=AED`, {
//             method: "GET",
//             headers: apiHeaders
//         });
//         const data = await response.json();
//         displayResults(data, flightResults);
//         flightModal.style.display = 'none'; // Close the modal after search
//     } catch (error) {
//         flightResults.innerHTML = `Error fetching flight results: ${error.message}`;
//     }
// });

// // Accommodation Search Handler
// document.getElementById('searchAccommodation').addEventListener('click', async () => {
//     const latitude = document.getElementById('latitude').value;
//     const longitude = document.getElementById('longitude').value;
//     const arrivalDate = document.getElementById('arrivalDate').value;
//     const departureDate = document.getElementById('departureDate').value;
//     const adults = document.getElementById('accommodAdults').value;

//     accommodationResults.innerHTML = "Loading accommodation results...";
//     try {
//         const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=-2092174&search_type=CITY&arrival_date=2024-11-12&departure_date=2024-11-21&adults=1&children_age=0%2C17&room_qty=1&page_number=1&units=metric&temperature_unit=c&languagecode=en-us&currency_code=AED`, {
//             method: "GET",
//             headers: apiHeaders
//         });
//         const data = await response.json();
//         displayResults(data, accommodationResults);
//         accommodationModal.style.display = 'none'; // Close the modal after search
//     } catch (error) {
//         accommodationResults.innerHTML = `Error fetching accommodation results: ${error.message}`;
//     }
// });

// // Function to display results
// function displayResults(data, container) {
//     container.innerHTML = ""; // Clear previous results
//     if (!data.result || data.result.length === 0) {
//         container.innerHTML = "No results found.";
//         return;
//     }
//     const list = document.createElement('ul');
//     data.result.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = item.name || "Unnamed Item";
//         list.appendChild(listItem);
//     });
//     container.appendChild(list);
// }

// // Get modal elements
// const flightSearchModal = document.getElementById("flightSearchModal");
// const accommodationSearchModal = document.getElementById("accommodationSearchModal");

// // Get modal close buttons
// const closeButtons = document.querySelectorAll(".modal .close");

// // Get form elements
// const flightSearchForm = document.getElementById("flightSearchForm");
// const accommodationSearchForm = document.getElementById("accommodationSearchForm");

// // API Headers
// const apiHeaders = {
//     "X-RapidAPI-Key": "1edf882553msh16a3808d8d38a3fp15685bjsn4be242f7c749",
//     "X-RapidAPI-Host": "booking-com15.p.rapidapi.com"
// };

// // Event listeners for opening modals
// document.getElementById("flightSearchButton").onclick = () => {
//     flightSearchModal.style.display = "block";
// };

// document.getElementById("accommodationSearchButton").onclick = () => {
//     accommodationSearchModal.style.display = "block";
// };

// // Event listeners for closing modals
// closeButtons.forEach((btn) => {
//     btn.onclick = () => {
//         btn.closest(".modal").style.display = "none";
//     };
// });

// // Close modal if user clicks outside modal content
// window.onclick = (event) => {
//     if (event.target === flightSearchModal) flightSearchModal.style.display = "none";
//     if (event.target === accommodationSearchModal) accommodationSearchModal.style.display = "none";
// };

// // Flight search form submission
// flightSearchForm.addEventListener("submit", async (event) => {
//     event.preventDefault(); // Prevent form submission
//     const fromId = document.getElementById("fromId").value;
//     const toId = document.getElementById("toId").value;
//     const departDate = document.getElementById("departDate").value;
//     const returnDate = document.getElementById("returnDate").value;
//     const adults = document.getElementById("adults").value;

//     const flightResults = document.getElementById("flightResults");
//     flightResults.innerHTML = "Loading flight results...";

//     try {
//         const response = await fetch(
//             'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=BOM.AIRPORT&toId=DEL.AIRPORT&pageNo=1&adults=1&children=0%2C17&sort=BEST&cabinClass=ECONOMY&currency_code=AED',
//             {
//                 method: "GET",
//                 headers: apiHeaders,
//             }
//         );
//         const data = await response.json();
//         displayResults(data, flightResults);
//     } catch (error) {
//         flightResults.innerHTML = `Error fetching flight results: ${error.message}`;
//     } finally {
//         flightSearchModal.style.display = "none"; // Close modal
//     }
// });

// // Accommodation search form submission
// accommodationSearchForm.addEventListener("submit", async (event) => {
//     event.preventDefault(); // Prevent form submission
//     const cityId = document.getElementById("cityId").value;
//     const arrivalDate = document.getElementById("arrivalDate").value;
//     const departureDate = document.getElementById("departureDate").value;
//     const adults = document.getElementById("adults").value;

//     const accommodationResults = document.getElementById("accommodationResults");
//     accommodationResults.innerHTML = "Loading accommodation results...";

//     try {
//         const response = await fetch(
//             'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=-2092174&search_type=CITY&adults=1&children_age=0%2C17&room_qty=1&page_number=1&units=metric&temperature_unit=c&languagecode=en-us&currency_code=AED',
//             {
//                 method: "GET",
//                 headers: apiHeaders,
//             }
//         );
//         const data = await response.json();
//         displayResults(data, accommodationResults);
//     } catch (error) {
//         accommodationResults.innerHTML = `Error fetching accommodation results: ${error.message}`;
//     } finally {
//         accommodationSearchModal.style.display = "none"; // Close modal
//     }
// });

// // Display results function
// function displayResults(data, container) {
//     container.innerHTML = ""; // Clear previous results

//     // Log the raw data to debug response structure
//     console.log(data);

//     // Check for results based on actual API response format
//     const results = data?.result || [];
//     if (results.length === 0) {
//         container.innerHTML = "No results found.";
//         return;
//     }

//     const list = document.createElement("ul");
//     results.forEach((item) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = item.name || "Unnamed Item"; // Adjust based on API fields
//         list.appendChild(listItem);
//     });
//     container.appendChild(list);
// }

// document.addEventListener("DOMContentLoaded", () => {
//     // Open and close modals
//     const modals = document.querySelectorAll(".modal");
//     const openFlightModal = document.getElementById("flightSearchButton");
//     const openAccommodationModal = document.getElementById("accommodationSearchButton");
//     const flightModal = document.getElementById("flightSearchModal");
//     const accommodationModal = document.getElementById("accommodationSearchModal");

//     const closeButtons = document.querySelectorAll(".close");

//     openFlightModal.addEventListener("click", () => (flightModal.style.display = "block"));
//     openAccommodationModal.addEventListener("click", () => (accommodationModal.style.display = "block"));

//     closeButtons.forEach((button) =>
//         button.addEventListener("click", () =>
//             modals.forEach((modal) => (modal.style.display = "none"))
//         )
//     );

//     window.addEventListener("click", (event) => {
//         if (event.target.classList.contains("modal")) {
//             modals.forEach((modal) => (modal.style.display = "none"));
//         }
//     });


//     // Flight Search Logic
//     const flightSearchForm = document.getElementById("flightSearchForm");
//     const flightResults = document.getElementById("flightResults");

//     flightSearchForm.addEventListener("submit", async (event) => {
//         event.preventDefault();
//         const fromId = document.getElementById("fromId").value;
//         const toId = document.getElementById("toId").value;
//         const departDate = document.getElementById("departDate").value;
//         const returnDate = document.getElementById("returnDate").value || null;
//         const adults = document.getElementById("adults").value;

//         flightResults.innerHTML = "Loading flight results...";

//         try {
//             const response = await fetch(
//                 `https://api.aviationstack.com/v1/airports
//     ? access_key = 7a381ea872f17614555b02c2742e4eb0`
//             );

//             if (!response.ok) throw new Error("Failed to fetch flights.");

//             const data = await response.json();
//             displayResults(data, flightResults, "flight");
//         } catch (error) {
//             flightResults.innerHTML = `Error fetching flight results: ${error.message}`;
//         } finally {
//             flightModal.style.display = "none";
//         }
//     });

//     // Display results helper
//     function displayResults(data, container, type) {
//         container.innerHTML = ""; // Clear previous results
//         const results = type === "flight" ? data.trips || [] : []; // Adjust based on API response

//         if (results.length === 0) {
//             container.innerHTML = "No results found.";
//             return;
//         }

//         const list = document.createElement("ul");
//         results.forEach((item) => {
//             const listItem = document.createElement("li");
//             listItem.textContent = type === "flight" ? `${item.airline} - ${item.price}` : "Unknown Item";
//             list.appendChild(listItem);
//         });
//         container.appendChild(list);
//     }
// });

// document.addEventListener("DOMContentLoaded", () => {
//     // API Configuration
//     const API_BASE_URL = 'https://api.aviationstack.com/v1/airports?access_key={7a381ea872f17614555b02c2742e4eb0}';
//     const API_ACCESS_KEY = '7a381ea872f17614555b02c2742e4eb0';

//     const flightSearchForm = document.getElementById("flightSearchForm");
//     const flightResults = document.getElementById("flightResults");

//     flightSearchForm.addEventListener("submit", async (event) => {
//         event.preventDefault();
        
//         // Collect form data
//         const fromId = document.getElementById("fromId").value;
//         const toId = document.getElementById("toId").value;
//         const departDate = document.getElementById("departDate").value;
//         const returnDate = document.getElementById("returnDate").value || null;
//         const adults = document.getElementById("adults").value;
        
//         flightResults.innerHTML = "Searching for flights...";
        
//         try {
//             // Construct query parameters
//             const queryParams = new URLSearchParams({
//                 from: fromId,
//                 to: toId,
//                 date: departDate,
//                 adults: adults,
//                 access_key: API_ACCESS_KEY
//             });

//             // If return date is provided, add it to query params
//             if (returnDate) {
//                 queryParams.append('return_date', returnDate);
//             }

//             // Make API request
//             const response = await fetch(`${API_BASE_URL}?${queryParams}`, {
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json',
//                     // Some APIs might require additional headers
//                     // 'Authorization': `Bearer ${API_ACCESS_KEY}`
//                 }
//             });

//             // Check if response is successful
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             // Parse JSON response
//             const data = await response.json();

//             // Display results
//             displayFlightResults(data.flights || []);

//         } catch (error) {
//             console.error('Flight search error:', error);
//             flightResults.innerHTML = `Error searching flights: ${error.message}`;
//         }
//     });

//     function displayFlightResults(flights) {
//         flightResults.innerHTML = ""; // Clear previous results
        
//         if (flights.length === 0) {
//             flightResults.innerHTML = "No flights found.";
//             return;
//         }
        
//         const resultContainer = document.createElement("div");
//         resultContainer.classList.add("flight-results");
        
//         flights.forEach((flight) => {
//             const flightCard = document.createElement("div");
//             flightCard.classList.add("flight-card");
//             flightCard.innerHTML = `
//                 <h3>${flight.airline}</h3>
//                 <p>Route: ${flight.fromAirport} → ${flight.toAirport}</p>
//                 <p>Date: ${flight.departDate}</p>
//                 <p>Price: ${flight.price}</p>
//                 <p>Duration: ${flight.duration}</p>
//                 <button class="book-flight">Book Now</button>
//             `;
            
//             resultContainer.appendChild(flightCard);
//         });
        
//         flightResults.appendChild(resultContainer);
//     }
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const flightSearchButton = document.getElementById('flightSearchButton');
//     const flightSearchModal = document.getElementById('flightSearchModal');
//     const flightSearchCloseBtn = flightSearchModal.querySelector('.close');
//     const flightSearchForm = document.getElementById('flightSearchForm');
//     const flightResultsContainer = document.getElementById('flightResults');

//     // Open Flight Search Modal
//     flightSearchButton.addEventListener('click', () => {
//         flightSearchModal.style.display = 'block';
//     });

//     // Close Flight Search Modal
//     flightSearchCloseBtn.addEventListener('click', () => {
//         flightSearchModal.style.display = 'none';
//     });

//     // Close modal if clicked outside
//     window.addEventListener('click', (event) => {
//         if (event.target === flightSearchModal) {
//             flightSearchModal.style.display = 'none';
//         }
//     });

//     // Flight Search Form Submission
//     flightSearchForm.addEventListener('submit', async (e) => {
//         e.preventDefault();

//         const fromLocation = document.getElementById('fromId').value;
//         const toLocation = document.getElementById('toId').value;
//         const departDate = document.getElementById('departDate').value;

//         const API_ENDPOINT = 'http://api.aviationstack.com/v1/flights';
//         const ACCESS_KEY = '7a381ea872f17614555b02c2742e4eb0';

//         try {
//             const response = await fetch(`${API_ENDPOINT}?access_key=${ACCESS_KEY}&dep_iata=${fromLocation}&arr_iata=${toLocation}&flight_date=${departDate}`);

//             if (!response.ok) {
//                 throw new Error('Flight search failed');
//             }

//             const flightData = await response.json();
//             displayFlightResults(flightData.data);

//             // Close modal after successful search
//             flightSearchModal.style.display = 'none';
//         } catch (error) {
//             console.error('Flight Search Error:', error);
//             flightResultsContainer.innerHTML = `
//                 <p class="error">Unable to retrieve flights. Please check your airport codes and try again.</p>
//             `;
//         }
//     });

//     // Function to display flight results
//     function displayFlightResults(flights) {
//         // Clear previous results
//         flightResultsContainer.innerHTML = '';

//         // Check if flights array is empty
//         if (!flights || flights.length === 0) {
//             flightResultsContainer.innerHTML = '<p>No flights found matching your search criteria.</p>';
//             return;
//         }

//         // Create results
//         flights.forEach(flight => {
//             const flightElement = document.createElement('div');
//             flightElement.classList.add('flight-result');
//             flightElement.innerHTML = `
//                 <div class="flight-details">
//                     <h3>${flight.airline.name} Flight ${flight.flight.iata}</h3>
//                     <p>Departure: ${flight.departure.airport} at ${flight.departure.scheduled}</p>
//                     <p>Arrival: ${flight.arrival.airport} at ${flight.arrival.scheduled}</p>
//                     <p>Status: ${flight.flight_status}</p>
//                 </div>
//             `;
//             flightResultsContainer.appendChild(flightElement);
//         });
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const flightSearchButton = document.getElementById('flightSearchButton');
//     const flightSearchModal = document.getElementById('flightSearchModal');
//     const flightSearchCloseBtn = flightSearchModal.querySelector('.close');
//     const flightSearchForm = document.getElementById('flightSearchForm');
//     const flightResultsContainer = document.getElementById('flightResults');

//     // Open Flight Search Modal
//     flightSearchButton.addEventListener('click', () => {
//         flightSearchModal.style.display = 'block';
//     });

//     // Close Flight Search Modal
//     flightSearchCloseBtn.addEventListener('click', () => {
//         flightSearchModal.style.display = 'none';
//     });

//     // Close modal if clicked outside
//     window.addEventListener('click', (event) => {
//         if (event.target === flightSearchModal) {
//             flightSearchModal.style.display = 'none';
//         }
//     });

//     // Flight Search Form Submission
//     flightSearchForm.addEventListener('submit', async (e) => {
//         e.preventDefault();

//         const fromLocation = document.getElementById('fromId').value.toUpperCase();
//         const toLocation = document.getElementById('toId').value.toUpperCase();
//         const departDate = document.getElementById('departDate').value;

//         try {
//             // Show loading state
//             flightResultsContainer.innerHTML = '<p>Searching for flights...</p>';

//             // OpenSky Network API - gets all current flight states
//             // Note: This API doesn't support specific route filtering, so we'll do it client-side
//             const response = await fetch('https://opensky-network.org/api/states/all');
            
//             if (!response.ok) {
//                 throw new Error('Flight search failed');
//             }

//             const flightData = await response.json();
//             displayFlightResults(flightData.states, fromLocation, toLocation);

//             // Close modal after search
//             flightSearchModal.style.display = 'none';
//         } catch (error) {
//             console.error('Flight Search Error:', error);
//             flightResultsContainer.innerHTML = `
//                 <p class="error">Unable to retrieve flights. Please try again.</p>
//                 <p>${error.message}</p>
//             `;
//         }
//     });

//     // Function to display flight results
//     function displayFlightResults(flights, fromAirport, toAirport) {
//         // Clear previous results
//         flightResultsContainer.innerHTML = '';

//         // Filter and process flights
//         const filteredFlights = flights.filter(flight => {
//             // Basic filtering - check if flight's origin or destination matches search criteria
//             return (flight[2] && 
//                    (flight[2].toUpperCase().includes(fromAirport) || 
//                     flight[2].toUpperCase().includes(toAirport)));
//         });

//         // Check if flights array is empty
//         if (!filteredFlights || filteredFlights.length === 0) {
//             flightResultsContainer.innerHTML = `
//                 <p>No flights found matching your search criteria:</p>
//                 <p>From: ${fromAirport}, To: ${toAirport}</p>
//             `;
//             return;
//         }

//         // Create results header
//         const resultsHeader = document.createElement('h3');
//         resultsHeader.textContent = `Flight Results (${filteredFlights.length} flights found)`;
//         flightResultsContainer.appendChild(resultsHeader);

//         // Create results
//         filteredFlights.forEach((flight, index) => {
//             const flightElement = document.createElement('div');
//             flightElement.classList.add('flight-result');
//             flightElement.innerHTML = `
//                 <div class="flight-details">
//                     <h4>Flight #${index + 1}</h4>
//                     <p><strong>Call Sign:</strong> ${flight[1] || 'N/A'}</p>
//                     <p><strong>Origin Country:</strong> ${flight[2] || 'N/A'}</p>
//                     <p><strong>Altitude:</strong> ${flight[7] ? flight[7].toFixed(2) + ' meters' : 'N/A'}</p>
//                     <p><strong>Velocity:</strong> ${flight[9] ? flight[9].toFixed(2) + ' m/s' : 'N/A'}</p>
//                     <p><strong>Heading:</strong> ${flight[10] ? flight[10].toFixed(2) + '°' : 'N/A'}</p>
//                 </div>
//             `;
//             flightResultsContainer.appendChild(flightElement);
//         });
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const flightSearchButton = document.getElementById('flightSearchButton');
    const flightSearchModal = document.getElementById('flightSearchModal');
    const flightSearchCloseBtn = flightSearchModal.querySelector('.close');
    const flightSearchForm = document.getElementById('flightSearchForm');
    const flightResultsContainer = document.getElementById('flightResults');

    // Open Flight Search Modal
    flightSearchButton.addEventListener('click', () => {
        console.log('Opening flight search modal');
        flightSearchModal.style.display = 'block';
    });

    // Close Flight Search Modal
    flightSearchCloseBtn.addEventListener('click', () => {
        console.log('Closing flight search modal');
        flightSearchModal.style.display = 'none';
    });

    // Close modal if clicked outside
    window.addEventListener('click', (event) => {
        if (event.target === flightSearchModal) {
            console.log('Click outside modal detected, closing modal');
            flightSearchModal.style.display = 'none';
        }
    });

    // Flight Search Form Submission
    flightSearchForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fromLocation = document.getElementById('fromId').value.toUpperCase();
        const toLocation = document.getElementById('toId').value.toUpperCase();
        const departDate = document.getElementById('departDate').value;

        console.log('Form submitted with values:', { fromLocation, toLocation, departDate });

        try {
            // Show loading state
            flightResultsContainer.innerHTML = '<p>Searching for flights...</p>';
            console.log('Fetching flight data from API...');

            // OpenSky Network API
            const response = await fetch('https://opensky-network.org/api/states/all');
            console.log('API response status:', response.status);

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const flightData = await response.json();
            console.log('API response data:', flightData);

            displayFlightResults(flightData.states, fromLocation, toLocation);

            // Close modal after search
            flightSearchModal.style.display = 'none';
        } catch (error) {
            console.error('Flight Search Error:', error);
            flightResultsContainer.innerHTML = `
                <p class="error">Unable to retrieve flights. Please try again.</p>
                <p>Error details: ${error.message}</p>
            `;
        }
    });

    // Function to display flight results
    function displayFlightResults(flights, fromAirport, toAirport) {
        console.log('Displaying flight results', { flights, fromAirport, toAirport });

        // Clear previous results
        flightResultsContainer.innerHTML = '';

        // Filter and process flights
        const filteredFlights = flights?.filter(flight => {
            // Basic filtering - check if flight's origin or destination matches search criteria
            return (flight[1] && 
                   (flight[1].toUpperCase().includes(fromAirport) || 
                    flight[1].toUpperCase().includes(toAirport)));
        });

        console.log('Filtered flights:', filteredFlights);

        // Check if flights array is empty
        if (!filteredFlights || filteredFlights.length === 0) {
            flightResultsContainer.innerHTML = `
                <p>No flights found matching your search criteria:</p>
                <p>From: ${fromAirport}, To: ${toAirport}</p>
            `;
            return;
        }

        // Create results header
        const resultsHeader = document.createElement('h3');
        resultsHeader.textContent = `Flight Results (${filteredFlights.length} flights found)`;
        flightResultsContainer.appendChild(resultsHeader);

        // Create results
        filteredFlights.forEach((flight, index) => {
            const flightElement = document.createElement('div');
            flightElement.classList.add('flight-result');
            flightElement.innerHTML = `
                <div class="flight-details">
                    <h4>Flight #${index + 1}</h4>
                    <p><strong>Call Sign:</strong> ${flight[1] || 'N/A'}</p>
                    <p><strong>Origin Country:</strong> ${flight[2] || 'N/A'}</p>
                    <p><strong>Altitude:</strong> ${flight[7] ? flight[7].toFixed(2) + ' meters' : 'N/A'}</p>
                    <p><strong>Velocity:</strong> ${flight[9] ? flight[9].toFixed(2) + ' m/s' : 'N/A'}</p>
                    <p><strong>Heading:</strong> ${flight[10] ? flight[10].toFixed(2) + '°' : 'N/A'}</p>
                </div>
            `;
            flightResultsContainer.appendChild(flightElement);
        });
    }
});         