import room1 from './images/room1.jpg';
import room2 from './images/room2.jpg';

function Home()
{
    return(
        <div>
            <div className="container">
                <div className="hero">
                    <h2>Welcome to Luxury Hotel</h2>
                    <p>Experience the ultimate comfort and elegance</p>
                </div>
            </div>

            <div className="booking-form container">
            <form>
                <label>Start Date:</label>
                <input type="date" placeholder="Check-in Date"/>
                <label>End Date:</label>
                <input type="date" placeholder="Check-out Date"/>
                <select>
                    <option value="">Select Room Type</option>
                    <option value="single">Single Room</option>
                    <option value="double">Double Room</option>
                    <option value="suite">Suite</option>
                </select>
                <input type="submit" value="Check Availability"/>
            </form>
            </div>

            <div className="rooms container" id="rooms">
                <div className="room-card">
                    <img src={room1} alt="Room 1"/>
                    <div className="room-card-content">
                        <h3>Deluxe Room</h3>
                        <p>Spacious room with sea view, king-size bed, and modern amenities.</p>
                        <p className="price">$250 per night</p>
                        <a href="#" className="btn">Book Now</a>
                    </div>
                </div>

                <div className="room-card">
                    <img src={room2}alt="Room 2"/>
                    <div className="room-card-content">
                        <h3>Suite</h3>
                        <p>Luxurious suite with a separate living area, balcony, and premium services.</p>
                        <p className="price">$450 per night</p>
                        <a href="#" className="btn">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export  default Home;