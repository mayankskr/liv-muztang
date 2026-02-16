

export default function QueryForm(){

    return(
        <>
        <h1 className="text-center text-5xl mb-6">Ask question</h1>
            <div className="QueryForm max-w-2xl mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100">
            <form action="" className="flex flex-col gap-5" aria-labelledby="queryform-heading" noValidate>
                <h3 id="queryform-heading" className="sr-only">Query form</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label htmlFor="name" className="flex flex-col text-sm">
                    <span className="mb-2 text-slate-800">Name</span>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 bg-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                    autoComplete="name"
                    />
                </label>

                <label htmlFor="number" className="flex flex-col text-sm">
                    <span className="mb-2 text-slate-800">Number</span>
                    <input
                    id="number"
                    name="number"
                    type="tel"
                    placeholder="+1 555 555 5555"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 bg-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                    inputMode="tel"
                    autoComplete="tel"
                    />
                </label>
                </div>

                <label htmlFor="query" className="flex flex-col text-sm">
                <span className="mb-2 text-slate-800">Query</span>
                <textarea
                    id="query"
                    name="query"
                    placeholder="Write your message..."
                    className="w-full min-h-30 rounded-lg border border-gray-200 px-4 py-3 bg-white placeholder-slate-300 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                />
                </label>
            <button className="border-2 w-fit mx-auto p-2 rounded-3xl text-slate-700 font-bold">Submit</button>
            </form>
            </div>
        
        </>
    )

}