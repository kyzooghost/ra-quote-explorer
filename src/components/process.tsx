interface ProcessProps {
    process: string,
    program: string,
    cpu: number,
    memory: number,
    status: "Pending" | "Running" | "Success" | "Failed"
}

const data: ProcessProps[] = [
    {
        process: "fibonacci-jeff-1",
        program: "fibonacci",
        cpu: 10.16,
        memory: 8.27,
        status: "Running"
    },
    {
        process: "zkevm-polygon-block-13202021",
        program: "zkevm-polygon",
        cpu: 84.16,
        memory: 85.27,
        status: "Running"
    },
    {
        process: "zk-onramp-payment-mohak",
        program: "zk-onramp",
        cpu: 0,
        memory: 0,
        status: "Failed"
    },
]
export function Component(){
    return(
        <>
            <div className="w-full h-12 grid grid-cols-7 text-gray-400 pl-4">
                <h2 className="h-full w-full flex justify-start items-center col-span-2">Process</h2>
                <h2 className="h-full w-full flex justify-start items-center col-span-2">Program</h2>
                <h2 className="h-full w-full flex justify-start items-center">CPU %</h2>
                <h2 className="h-full w-full flex justify-start items-center">Memory %</h2>
                <h2 className="h-full w-full flex justify-start items-center">Status</h2>
            </div>
            {
                data.map(process => (
                    <div className="w-full min-h-12 grid grid-cols-7 text-white pl-4">
                        <h2 className="h-full w-full flex justify-start items-center col-span-2">{process.process}</h2>
                        <h2 className="h-full w-full flex justify-start items-center col-span-2">{process.program}</h2>
                        <h2 className="h-full w-full flex justify-start items-center">{ `${process.cpu} %` }</h2>
                        <h2 className="h-full w-full flex justify-start items-center">{ `${process.memory} %` }</h2>
                        <h2 className="h-full w-full flex justify-start items-center">{process.status}</h2>
                    </div>
                ))
            }
        </>
    )
}