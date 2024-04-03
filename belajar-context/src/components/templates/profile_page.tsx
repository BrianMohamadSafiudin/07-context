import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function ProfilePage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Halaman Profil Brian</Heading>
            <Post title="Profil Brian!" body="Brian Mohamad Safiudin - 2141720133" />
            <img  src="https://media.licdn.com/dms/image/C5603AQEZUf16VyjO2g/profile-displayphoto-shrink_800_800/0/1648031471298?e=1714003200&v=beta&t=RFPH785pBo3YdQkQJsr9dxdTw5DlWm4ynHIsdI8Vg_c" alt="Profile Image" />
        </Section2>
    );
}