import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function Contacts() {
    return (
        <Section2 isFancy={true}>
            <Heading>Contact Saya</Heading>
            <Post title="Whatsapp!" body="+62-821-1490-3130" />
            <Post title="Instagram!" body="@briansafiudin" />
            <Post title="LinkedIn!" body="@BrianMohamadSafiudin"></Post>
        </Section2>
    );
}