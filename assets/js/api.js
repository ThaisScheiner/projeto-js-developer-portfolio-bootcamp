
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/ThaisScheiner/projeto-js-developer-portfolio-bootcamp/main/data/profile.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

