
async function fetchProfileData() {
    const url = ' https://thaisscheiner.github.io/projeto-js-developer-portfolio-bootcamp/'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
