function cardMaker({ login, id, node_id, avatar_url, gravater_id, url, html_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, repos_url, events_url, received_events_url, type, aite_admin, name, company, blog, location, email,hireable, bio, twitter_username, public_repos, public_gists, followers, following, created_at, updated_at }) {
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
    userImg.src = avatar_url
    nameOfUser.textContent = `${name}`
    userName.textContent = `${login}`
    userLocation.textContent = `Location: ${location}`
    profile.textContent = 'Profile:'
    githubAddress.href = html_url
    githubAddress.textContent = `${html_url}`
    followersNum.textContent = `Followers: ${followers}`
    followingNum.textContent = `Following : ${following}`
    userBio.textContent = `Bio: ${bio}`
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
    
  
  }