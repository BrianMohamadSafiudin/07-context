import Heading from "./heading";
import Section2 from "./section2";

export default function Post({ title, body }: { title: string, body: string }) {
    return (
        <div>
            {/* <p>Brian Mohamad Safiudin</p>
            <p><i>NIM : 2141720133</i></p> */}

            <Section2 isFancy={true}>
                <Heading>
                    {title}
                </Heading>
                <p><i>{body}</i></p>
            </Section2>
        </div>
    )
}