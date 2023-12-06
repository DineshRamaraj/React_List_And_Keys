import UserProfile from './components/UserProfile/index'

import './App.css'

// const userDetails = {
//   imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
//   name: 'Dineshkumar',
//   role: 'Software Developer',
// }
const userDetailsList = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Dineshkumar',
    role: 'Software Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Surya Kumar',
    role: 'Software Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Arun Kumar',
    role: 'Software Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Sarath Kumar',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile UserDetails={eachItem} />
      ))}
    </ul>
    {/* <ul>
      <UserProfile userDetails={userDetailsList[0]} />
      <UserProfile userDetails={userDetailsList[1]} />
      <UserProfile userDetails={userDetailsList[2]} />
      <UserProfile userDetails={userDetailsList[3]} />
    </ul> */}
  </div>
)

export default App
