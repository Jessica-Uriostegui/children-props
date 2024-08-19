import Card from './Card';


const App = () => {
  return (
    <div>
      <Card>
        <h2>Children Props</h2>
        <p>Children Props in React!</p>
      </Card>

      <Card>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image" />
        <p>image description</p>
      </Card>
      {/* Card with List */}
      <Card>
        <h3>Shopping List</h3>
        <ul>
          <li>Strawberry</li>
          <li>Bananas</li>
          <li>Apples</li>
        </ul>
      </Card>

      {/* Card with Nested Components*/}
      <Card>
        <h2>Custom Button Card</h2>
        <button style={{ backgroundColor: 'blue', color: 'white', }}>Press Me</button>
      </Card>

      {/* Card with Form Elements */}
      <Card>
        <h2>Login Form</h2>
        <form>
          <div>
            <label>Username:</label>
            <input type="text" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </Card>    
    </div>
  );
};





export default App;
