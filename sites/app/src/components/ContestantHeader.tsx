export const ContestantHeader = () => {
    const firstName = "Alex"
    const lastName = "de Beaumont"
    const age = 26
    return <div className="flex-nowrap bg-slate-500">
        <div className="text-center">{firstName}</div>
        <div className="text-center">{lastName}</div>
        <div className="text-center">{age}</div>
    </div>
}