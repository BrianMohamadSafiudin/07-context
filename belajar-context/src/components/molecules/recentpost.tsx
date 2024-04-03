import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPosts() {
    return (
        <Section2 isFancy = {true}>
            <Heading>Posting Terbaru</Heading>
            <Post title="Licenses & certifications" body="AWS Academy Graduate - AWS Academy Cloud Architecting" />
            <Post title="Badan Nasional Sertifikasi Profesi" body="Certified BNSP ( JMP, JWD, JGD )" />
        </Section2>
    );
}