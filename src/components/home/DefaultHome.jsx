const DefaultHome = ()=> {
    return(<div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden w-full overflow-y-auto p-5 items-stretch">
    
    <div className="p-5 bg-black shadow rounded-lg hover:shadow-2xl hover:brightness-150 hover:border hover:border-4 hover:border-slate-900 resize overflow-auto">
        <div className="flex justify-between items-center mb-3">
            <h1 className="text-lg font-semibold">Left Tab Demo</h1>
            <button className="text-pink-500 hover:text-red-800 hover:brightness-200">DEMO</button>
        </div>
        <details className="text-center">
            <summary className="text-green-500 hover:text-green-700">More Details (DEMO)</summary>
            <div>**add threads stuff here**</div>
        </details>
    </div>

    <div className="p-5 bg-slate-500 shadow rounded-lg hover:shadow-2xl hover:brightness-125 hover:border hover:border-4 hover:border-slate-400 resize overflow-auto">
        <div className="flex justify-between items-center mb-3">
            <h1 className="text-lg font-semibold">MIDDLE TAB DEMO</h1>
            <button className="text-pink-500 hover:text-red-800 hover:brightness-200">Go to DEMO</button>
        </div>
        <details className="text-center">
            <summary className="text-green-500 hover:text-green-700">More Details (DEMO)</summary>
            <div>**add notes stuff here**</div>
        </details>
    </div>

    <div className="p-5 bg-slate-300 shadow rounded-lg hover:shadow-2xl hover:brightness-110 hover:border hover:border-4 hover:border-slate-200 resize overflow-auto">
        <div className="flex justify-between items-center mb-3">
            <h1 className="text-lg font-semibold">RIGHT SIDE DEMO</h1>
            <button className="text-pink-500 hover:text-red-800 hover:brightness-200">DEMO</button>
        </div>
        <details className="text-center">
            <summary className="text-green-500 hover:text-green-700">More Details (DEMO)</summary>
            <div className="text-left">**add tags stuff here**</div>
        </details>
    </div>

</div>
);
    }

    export default DefaultHome