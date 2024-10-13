import Cookie from 'js-cookie'
import ProfileDisplay from '../components/ProfileDisplay.jsx'
import { Container, Text } from '@chakra-ui/react'
import useProfile from '../feed/profiles.jsx'
import { useEffect } from 'react'
function Profile(){
    const { fetchProfiles, profiles } = useProfile();
    const uid = Cookie.get('username')
	useEffect(() => {
		fetchProfiles();
	}, [fetchProfiles]);
    const x = Cookie.get('username')
    const y = Cookie.get('check')
    console.log(x)
    if(!x && !y){
        console.log('works')
        window.location.href='/auth';
    }
    return(
        <Container>
        {profiles.filter(x => x.username === uid).map((profile) => (
            <ProfileDisplay key={profile._id} profile={profile} />
        ))}
        </Container>
    )
}
export default Profile