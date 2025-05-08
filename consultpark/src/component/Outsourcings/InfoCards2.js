export default function InfoCard( {Title, Icon, message} ){
    return(
        <>
            <div className="bg-zinc-300 w-[480px] rounded-xl flex justify-center InfoCards">
                <div className="self-center py-4 px-8">
                    <h1 className="text-center text-4xl pb-16 text-zinc-700">{Title}</h1>
                    <h2 className="self-center text-zinc-500 text-2xl text-center">{message}</h2>
                </div>
            </div>
        </>
    );
}