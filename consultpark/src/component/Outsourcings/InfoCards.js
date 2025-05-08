export default function InfoCard( {message} ){
    return(
        <>
            <div className="bg-zinc-300 w-[480px] h-64 rounded-xl flex justify-center InfoCards">
                <h2 className="self-center text-zinc-500 text-3xl text-center">{message}</h2>
            </div>
        </>
    );
}