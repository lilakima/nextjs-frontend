import type {NextPage} from 'next'
import Template from "../components/shared/Template"

const userData = {
    bgImg: "./user-portrait.jpeg",
    name: "Matthew Henry",
    occupation: "Music Enthusiast",
    preference: [
        {id: 1, type: "Looking for competitions"},
        {id: 2, type: "Discuss in guitar group"},
        {id: 3, type: "Study finger style online courses"},
        {id: 4, type: "Contribute music scores"}
    ],
    followedMusicians: [
        {
            id: 1,
            name: "Jimmy Hendrix",
            image: "./jimmy-hendrix.jpeg"
        },
        {
            id: 2,
            name: "Stevie Ray Vaughan",
            image: "./jimmy-hendrix.jpeg"
        },
        {
            id: 3,
            name: "Eddie Van Halen",
            image: "./jimmy-hendrix.jpeg"
        },
        {
            id: 4,
            name: "Greg Ginn",
            image: "./jimmy-hendrix.jpeg"
        },
        {
            id: 5,
            name: "Kirk Hammett",
            image: "./jimmy-hendrix.jpeg"
        },
        {
            id: 6,
            name: "Johnny Marr",
            image: "./jimmy-hendrix.jpeg"
        },
        {
            id: 7,
            name: "Neil Young",
            image: "./jimmy-hendrix.jpeg"
        }
    ]
}

const User: NextPage = () => {
    return (
        <Template>
            <div>
                <div
                    className="content mb-32 lg:mb-0 mt-24 lg:mt-32 mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center md:items-start">
                        <div className="user-portrait rounded-full w-32 h-32 shadow-lg bg-cover bg-center bg-no-repeat"
                             style={{backgroundImage: `url("${userData.bgImg}")`}}></div>
                        <div
                            className="user-name mt-8 font-medium font-semibold text-lg text-mainDark">{userData.name}</div>
                        <div
                            className="user-occupation font-extralight text-xs text-mainDark">{userData.occupation}</div>
                        <div className="mt-8">
                            <div className="font-medium font-semibold text-lg text-mainDark my-2">Profile</div>
                            <div className="text-[#475569]/50 my-2">music</div>
                            <div className="text-[#475569]/50 my-2">instrument</div>
                            <div className="text-[#475569]/50 my-2">artist</div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-4 lg:col-span-4">
                        <div className="bg-[#f8fafc] rounded-2xl pt-[22px] pb-4 px-10 shadow-lg mb-8">
                            <div className="mb-4 font-medium font-semibold text-xs text-mainDark">
                                {userData.name} spends most of the time on ...
                            </div>

                            {
                                userData.preference
                                    .map(({id, type}) => <div
                                            className="my-2 px-2 py-1 border border-slate-200 rounded-md font-semibold text-sm text-[#52525B] bg-[#e5e5e5]/25"
                                            key={id}>
                                            {type}
                                        </div>
                                    )
                            }
                        </div>
                        <div className="bg-[#f8fafc] rounded-2xl pt-[22px] pb-4 px-10 shadow-lg mb-8">
                            <div className="mb-4 font-medium font-semibold text-xs text-mainDark">
                                Follow most with..
                            </div>
                            <div className="flex flex-wrap overflow-hidden">
                                {
                                    userData.followedMusicians
                                        .map(({id, image, name}) => <div className="flex flex-col items-center m-2"
                                                                key={id}>
                                            <div
                                                className="musician-portrait rounded-full w-14 h-14 shadow-md bg-cover bg-center bg-no-repeat"
                                                style={{backgroundImage: `url("${image}")`}}></div>
                                            <div className="musician-name text-sm text-[#52525B]">{name}</div>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
};

export default User