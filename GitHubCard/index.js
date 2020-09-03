import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const cards = document.querySelector('.cards')

axios.get('https://api.github.com/users/fatima-rizvi')
  .then(stuff => {
    console.log('the data: ',stuff.data)
    const myCard = cardMaker(stuff.data);
    console.log(myCard);
    cards.appendChild(myCard)
    // debugger;
  })
  .catch(err => {
    console.log(err);
  })
// const myCard = cardMarker(stuff.data);

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['Jahteo','fibonacci','robertmasters','chasingeuphoria', 'kubes2020'];

followersArray.forEach(followerName => {
  let mainURL = 'https://api.github.com/users/'
  let followerURL = mainURL.concat(followerName)
  axios.get(followerURL)
  .then(stuff => {
    console.log('the data: ',stuff.data)
    const myCard = cardMaker(stuff.data);
    console.log(myCard);
    cards.appendChild(myCard)
    // debugger;
  })
  .catch(err => {
    console.log(err);
  })
})





/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(obj) {
  //Instantiating elements
  const card = document.createElement('div')
  const userImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const nameOfUser = document.createElement('h3')
  const userName = document.createElement('p')
  const userLocation = document.createElement('p')
  const profile = document.createElement('p')
  const githubAddress = document.createElement('a')
  const followersNum = document.createElement('p')
  const followingNum = document.createElement('p')
  const userBio = document.createElement('p')
  //Setting class names, attributes and text
  //attributes and names
  userImg.src = obj.avatar_url
  nameOfUser.textContent = `${obj.name}`
  userName.textContent = `${obj.login}`
  userLocation.textContent = `Location: ${obj.location}`
  profile.textContent = 'Profile:'
  githubAddress.href = obj.html_url
  githubAddress.textContent = `${obj.html_url}`
  followersNum.textContent = `Followers: ${obj.followers}`
  followingNum.textContent = `Following : ${obj.following}`
  userBio.textContent = `Bio: ${obj.bio}`
  //class names
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  nameOfUser.classList.add('name')
  userName.classList.add('username')
  //creating the heirarchy
  //start with card
  card.appendChild(userImg)
  card.appendChild(cardInfo)
  //Move onto card info
  cardInfo.appendChild(nameOfUser)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followersNum)
  cardInfo.appendChild(followingNum)
  //Lastly, profile
  profile.appendChild(githubAddress)

  return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
