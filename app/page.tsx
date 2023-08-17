import Image from 'next/image'


export default function Home() {
    return (
        <main className="container mx-auto">
            <section>
                <div className="flex items-center justify-center">
                    <Image
                        src={"/img/profile-picture.png"}
                        alt={"Ruslan's profile picture"}
                        width={200}
                        height={200}
                        priority={true}
                        className="h-80 w-80 object-cover"
                    />
                </div>
            </section>
        </main>
    )
}
